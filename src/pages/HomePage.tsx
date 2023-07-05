import React from "react";
import { SwiperSlideLayout } from "../layouts/SwiperSlideLayout";

export const HomePage:React.FC = () => {
  return (
    <div className="container-fluid container-xxl">
      <h1 className="mb-4">Home Page</h1>
      <SwiperSlideLayout/>
    </div>
  )
}
