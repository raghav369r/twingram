import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./pages/SideBar";
import useGetCuttentUser from "../../hooks/useGetCuttentUser";
import BottomBar from "./BottomBar";

const RootLayout = () => {
  const navigate = useNavigate();
  const user = useGetCuttentUser();
  const [show, setShow]=useState(true);
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  return (
    <div className="text-white flex h-screen relative" >
      <div className="w-1/4 bg-neutral-900 p-2 hidden md:block">
        <SideBar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
      <div className="absolute bottom-0 left-0 md:hidden w-full">
        <BottomBar/>
      </div>
    </div>
  );
};

export default RootLayout;
