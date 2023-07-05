import React from "react";
import { addPost } from "../store/api";
import { useNavigate } from "react-router-dom";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const AddPostPage:React.FC = () => {
  const [post, setPost] = React.useState({
    userId: "",
    title : "",
    url: "",
    body: "",
  });
  const { userId, title, url, body } = post;
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setPost({...post, [e.target.name]: e.target.value});
  }
  const addPostDetails = async () =>{
    await addPost(post);
    navigate("/posts");
  }
  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Add Post Page</h1>
      <div className="card p-fluid flex flex-wrap gap-3">
        <div className="flex-auto mb-3">
          <label htmlFor="title" className="font-bold block mb-2">Title</label>
          <InputText id="title" onChange={(e) => onValueChange(e)} name="title" value={title} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="body" className="font-bold block mb-2">Body</label>
          <InputText id="body" onChange={(e) => onValueChange(e)} name="body" value={body} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="userId" className="font-bold block mb-2">Author ID</label>
          <InputText id="userId" onChange={(e) => onValueChange(e)} name="userId" value={userId} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="url" className="font-bold block mb-2">Url</label>
          <InputText id="url" onChange={(e) => onValueChange(e)} name="url" value={url} />
        </div>
        <div className="row">
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Create post" onClick={() => addPostDetails() } />
          </div>
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Cancel create" onClick={()=> navigate("/posts")} />
          </div>
        </div>
      </div>
    </div>
  )
}
