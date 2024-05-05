import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { removeUser } from "../../../config/store/userReducer";
import Avatar from "react-avatar";
import useGetCuttentUser from "../../../hooks/useGetCuttentUser";

const SideBar = () => {
  const user = useGetCuttentUser();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeUser());
  };
  return (
    <div className="w-full">
      <ul className="flex flex-col gap-4">
        <li className="transition hover:scale-105">
          {" "}
          <NavLink to={"/"} className="flex gap-2 py-5">
            <img src="/assets/images/logo.svg" alt="" />
          </NavLink>
        </li>
        <li className="transition hover:scale-105">
          {" "}
          <NavLink
            to={"/user/" + user?._id}
            className="text-xl px-4 py-2 flex gap-3 items-center rounded-lg cursor-pointer hover:bg-blue-500"
          >
            <Avatar name={user?.name} size="40" round={true} />
            <p>{user?.name}</p>
          </NavLink>
        </li>
        <li className="transition hover:scale-105">
          {" "}
          <NavLink
            to={"/"}
            className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${
              pathname == "/" ? " bg-blue-500" : ""
            }`}
          >
            <IoHomeOutline className="size-7" />
            <h1 className="text-xl font-semibold">Home</h1>
          </NavLink>
        </li>
        <li className="transition hover:scale-105">
          {" "}
          <NavLink
            to={"/explore"}
            className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${
              pathname == "/explore" ? " bg-blue-500" : ""
            }`}
          >
            <MdExplore className="size-7" />
            <h1 className="text-xl font-semibold">Explore</h1>
          </NavLink>
        </li>
        <li className="transition hover:scale-105">
          {" "}
          <NavLink
            to={"/people"}
            className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${
              pathname == "/people" ? " bg-blue-500" : ""
            }`}
          >
            <IoPeopleOutline className="size-7" />
            <h1 className="text-xl font-semibold">People</h1>
          </NavLink>
        </li>
        <li className="transition hover:scale-105">
          {" "}
          <NavLink
            to={"/saved"}
            className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${
              pathname == "/saved" ? " bg-blue-500" : ""
            }`}
          >
            <img
              src="/assets/icons/saved.svg"
              alt=""
              className="invert transition hover:scale-105tion brightness-0 size-7"
            />
            <h1 className="text-xl font-semibold">Saved</h1>
          </NavLink>
        </li>
        <li className="transition hover:scale-105">
          {" "}
          <NavLink
            to={"/create-post"}
            className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${
              pathname == "/create-post" ? " bg-blue-500" : ""
            }`}
          >
            <MdCreateNewFolder className="size-7" />
            <h1 className="text-xl font-semibold">Create Post</h1>
          </NavLink>
        </li>
        <li
          className="flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4"
          onClick={handleLogout}
        >
          <IoLogOutOutline className="size-7" />
          <h1 className="text-xl font-semibold">LogOut</h1>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
