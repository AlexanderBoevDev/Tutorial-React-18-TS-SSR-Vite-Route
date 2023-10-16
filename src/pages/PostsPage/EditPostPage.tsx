import React from "react";
import { editPost, getallPosts } from "../../store/EntitiesCRUDL";
import { useNavigate, useParams } from "react-router-dom";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const EditPostPage:React.FC = () => {
  const [post, setPost] = React.useState({
    userId: "",
    title : "",
    url: "",
    body: "",
  });
  const { userId, title, url, body } = post;
  const { id } = useParams();
  React.useEffect(() => {
    loadPostData();
  },[]);
  const loadPostData = async () =>{
    const response = await getallPosts(id);
    setPost(response.data);
  }
  const navigate = useNavigate();
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  }
  const editPostDetails = async () => {
    await editPost( id, post );
    navigate("/posts");
  }
  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Edit Post ({title})</h1>
      <div className="card p-fluid flex flex-wrap gap-3">
        <div className="flex-auto mb-3">
          <label htmlFor="title" className="font-bold block mb-2">Title</label>
          <InputText id="title" onChange={(e) => onChange(e)} name="title" value={title} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="body" className="font-bold block mb-2">Body</label>
          <InputText id="body" onChange={(e) => onChange(e)} name="body" value={body} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="userId" className="font-bold block mb-2">Author ID</label>
          <InputText id="userId" onChange={(e) => onChange(e)} name="userId" value={userId} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="url" className="font-bold block mb-2">Url</label>
          <InputText id="url" onChange={(e) => onChange(e)} name="url" value={url} />
        </div>
        <div className="row">
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Update user" onClick={() => editPostDetails() } />
          </div>
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Cancel update" onClick={()=> navigate("/posts")} />
          </div>
        </div>
      </div>
    </div>
  )
}
