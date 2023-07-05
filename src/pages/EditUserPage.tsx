import React from "react";
import { editUser, getallUsers } from "../store/api";
import { useNavigate, useParams } from "react-router-dom";

import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const EditUserPage:React.FC = () => {
  const [user, setUser] = React.useState({
    name: "",
    username : "",
    email: "",
    phone: "",
  });
  const { name, username, email, phone } = user;
  const { id } = useParams();
  React.useEffect(() => {
    loadUserData();
  },[]);
  const loadUserData = async () =>{
    const response = await getallUsers(id);
    setUser(response.data);
  }
  const navigate = useNavigate();
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const editUserDetails = async () => {
    await editUser( id, user );
    navigate("/users");
  }
  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Edit User Page</h1>
      <div className="card p-fluid flex flex-wrap gap-3">
        <div className="flex-auto mb-3">
          <label htmlFor="name" className="font-bold block mb-2">Name</label>
          <InputText id="name" onChange={(e) => onChange(e)} name="name" value={name} className="p-invalid" />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="username" className="font-bold block mb-2">Full name</label>
          <InputText id="username" onChange={(e) => onChange(e)} name="username" value={username} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="email" className="font-bold block mb-2">Email</label>
          <InputText id="email" onChange={(e) => onChange(e)} name="email" value={email} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
          <InputMask id="phone" onChange={(e) => onChange(e)} name="phone" value={phone} mask="+7 (999) 999-99-99" placeholder="+7 (999) 999-99-99" />
        </div>
        <div className="row">
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Update user" onClick={() => editUserDetails() } />
          </div>
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Cancel update" onClick={()=> navigate("/users")} />
          </div>
        </div>
      </div>
    </div>
  )
}
