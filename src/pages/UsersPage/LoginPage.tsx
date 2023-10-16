import React from "react";
import { AuthContext } from "../../store/AuthContext";
import { Navigate } from "react-router-dom";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

export const LoginPage:React.FC = () => {

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  // @ts-ignore
  const { login, isLoggedIn } = React.useContext(AuthContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const jwtToken = "fake-jwt-token";
    login(jwtToken);
  };

  if (isLoggedIn) {
    // Редирект на главную страницу если пользовать авторизировался
    return <Navigate to="/" />;
  }

  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Login Page</h1>
      <form className="card p-fluid flex flex-wrap gap-3" onSubmit={handleSubmit}>
        <div className="flex-auto mb-3">
          <label htmlFor="email" className="font-bold block mb-2">
            Email
          </label>
          <InputText id="email" name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex-auto mb-3">
          <label htmlFor="password" className="font-bold block mb-2">
            Password
          </label>
          <Password id="password" name="password"
            value={password}
            feedback={false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            toggleMask
          />
        </div>
        <div className="row">
          <div className="col-md-auto mb-3">
            <Button type="submit" label="Log in"/>
          </div>
        </div>
      </form>

    </div>
  )
}
