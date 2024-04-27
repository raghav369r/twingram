import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./pages/SideBar";

const RootLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  return (
    <div className="text-white flex h-screen">
      <div className="w-1/4 bg-neutral-900 p-2">
        <SideBar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
