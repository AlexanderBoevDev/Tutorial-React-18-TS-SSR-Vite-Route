import React from "react";
import { AuthContext } from "../../store/AuthContext";

export const UserPage:React.FC = () => {
  // @ts-ignore
  // const { token } = React.useContext(AuthContext);

  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">User Page</h1>
      {/*@ts-ignore*/}
      <p>Your secret token is: <strong>{ React.useContext(AuthContext).jwt }</strong></p>
    </div>
  )
}
