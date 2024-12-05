import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./pages/SideBar";
import useGetCuttentUser from "../../hooks/useGetCuttentUser";
import BottomBar from "./BottomBar";

const RootLayout = () => {
  const navigate = useNavigate();
  const user = useGetCuttentUser();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  if (!user) return null;
  return (
    <>
      <div className="text-white flex h-[100dvh] relative ">
        <div className="w-1/4 bg-neutral-900 p-2 hidden md:block">
          <SideBar />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
      <div className="sticky bottom-0 left-0 md:hidden w-full delay-150 transition duration-100 z-50">
        <BottomBar />
      </div>
    </>
  );
};

export default RootLayout;
