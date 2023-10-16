import React from "react";
import { SwiperSlideLayout } from "../../layouts/SwiperSlideLayout";
// import { AuthContext } from "../../store/AuthContext";

export const HomePage:React.FC = () => {

  // @ts-ignore
  // const { isLoggedIn, logout } = React.useContext(AuthContext);

  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Home Page</h1>

      {/*{isLoggedIn ? (*/}
      {/*  <>*/}
      {/*    <p>Welcome! You are logged in.</p>*/}
      {/*    <button onClick={ logout }>*/}
      {/*      Logout*/}
      {/*    </button>*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <p>Please log in to access more features.</p>*/}
      {/*)}*/}

      <SwiperSlideLayout/>
    </div>
  )
}
