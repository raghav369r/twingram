import { Outlet, useNavigate } from "react-router-dom";

import side_img from "/assets/images/side_img.jpg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AuthLayout = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate(-1);
  }, [user, navigate]);
  if(user) return null;
  return (
    <div className="flex h-[100dvh] select-none">
      <div className="w-full md:w-1/2 ">
        <Outlet />
      </div>
      <div className="hidden w-1/2 md:block relative">
        <img src={side_img} alt="" className="object-cover w-full h-[100dvh]" />
        <div className="top-0 z-10 absolute flex h-[100dvh] items-center justify-center w-full">
          <div className="bg-blue-700 rounded-lg group cursor-pointer p-5 h-fit flex flex-col justify-center items-center bg-opacity-80">
            <h2 className="text-xl font-semibold">
              want to try the App? use the below credentials 👇
            </h2>
            <p className="hidden group-hover:block">Email: ajju@gmail.com</p>
            <p className="hidden group-hover:block">Password: ajju</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
