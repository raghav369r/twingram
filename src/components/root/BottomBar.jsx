import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../config/store/userReducer";
import { IoHomeOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";

const BottomBar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div className="flex w-full justify-around items-center bg-black overflow-x-scroll z-10">
      <NavLink
        to="/"
        className={"px-3 py-1.5 " + (pathname == "/" ? "border-t-4 border-blue-700" : "")}
      >
        <IoHomeOutline className="size-6" />
      </NavLink>
      <NavLink
        to="/explore"
        className={
          "px-3 py-1.5 " + (pathname == "/explore" ? "border-t-4 border-blue-700" : "")
        }
      >
        <MdExplore className="size-6" />
      </NavLink>
      <NavLink
        to="/people"
        className={
          "px-3 py-1.5 " + (pathname == "/people" ? "border-t-4 border-blue-700" : "")
        }
      >
        <IoPeopleOutline className="size-6" />
      </NavLink>
      <NavLink
        to="/saved"
        className={"px-3 py-1.5 " + (pathname == "/saved" ? "border-t-4 border-blue-700" : "")}
      >
        <img
          src="/assets/icons/saveFilled.svg"
          alt=""
          className="size-6 invert brightness-0"
        />
      </NavLink>
      <NavLink
        to="/create-post"
        className={
          "px-3 py-1.5 " + (pathname == "/create-post" ? "border-t-4 border-blue-700" : "")
        }
      >
        <MdCreateNewFolder className="size-6" />
      </NavLink>
      <h1
        to="/"
        className="px-3 py-1.5 cursor-pointer"
        onClick={() => dispatch(removeUser())}
      >
        <IoLogOutOutline className="size-6" />
      </h1>
    </div>
  );
};

export default BottomBar;
