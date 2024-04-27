import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./pages/SideBar";
import TopCreaters from "./pages/TopCreaters";

const RootLayout = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  return (
    <div className="text-white flex h-screen">
      <div className="w-1/5 bg-neutral-900 p-2">
        <SideBar />
      </div>
      <div className="w-3/5">
        <Outlet />
      </div>
      <div className="w-1/5 bg-neutral-900 h-full overflow-y-scroll">
        <h1 className="text-2xl font-semibold text-center mt-8">
          Top Creaters
        </h1>
        <TopCreaters />
      </div>
    </div>
  );
};

export default RootLayout;
