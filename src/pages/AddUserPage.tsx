import React from "react";
import { addUser } from "../store/api";
import { useNavigate } from "react-router-dom";

import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const AddUserPage:React.FC = () => {
  const [user, setUser] = React.useState({
    name: "",
    username : "",
    email: "",
    phone: "",
  });
  const { name, username, email, phone } = user;
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }
  const addUserDetails = async () =>{
    await addUser(user);
    navigate("/users");
  }
  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Add User Page</h1>
      <div className="card p-fluid flex flex-wrap gap-3">
        <div className="flex-auto mb-3">
          <label htmlFor="name" className="font-bold block mb-2">Name</label>
          <InputText id="name" onChange={(e) => onValueChange(e)} name="name" value={name} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="username" className="font-bold block mb-2">Full name</label>
          <InputText id="username" onChange={(e) => onValueChange(e)} name="username" value={username} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="email" className="font-bold block mb-2">Email</label>
          <InputText id="email" onChange={(e) => onValueChange(e)} name="email" value={email} />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
          <InputMask id="phone" onChange={(e) => onValueChange(e)} name="phone" value={phone} mask="+7 (999) 999-99-99" placeholder="+7 (999) 999-99-99" />
        </div>
        <div className="row">
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Create user" onClick={() => addUserDetails() } />
          </div>
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Cancel create" onClick={()=> navigate("/users")} />
          </div>
        </div>
      </div>
    </div>
  )
}
