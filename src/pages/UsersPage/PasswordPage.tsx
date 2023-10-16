import React from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const PasswordPage:React.FC = () => {
  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Recover Password Page</h1>
      <div className="card p-fluid flex flex-wrap gap-3">
        <div className="flex-auto mb-3">
          <label htmlFor="email" className="font-bold block mb-2">Email</label>
          <InputText id="email" name="email" />
        </div>
        <div className="row">
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Send a new password"/>
          </div>
        </div>
      </div>
    </div>
  )
}
