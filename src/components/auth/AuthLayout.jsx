import { Outlet, useNavigate } from "react-router-dom";

import side_img from "/assets/images/side_img.jpg";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const AuthLayout = () => {
  const user=useSelector(store=>store.user);
  const navigate=useNavigate();
  useEffect(()=>{
    if(user) navigate("/");
  },[user,navigate]);
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 ">
        <Outlet />
      </div>
      <div className="hidden w-1/2 md:block">
        <img src={side_img} alt="" className="object-cover w-full h-screen" />
      </div>
    </div>
  );
};

export default AuthLayout;
