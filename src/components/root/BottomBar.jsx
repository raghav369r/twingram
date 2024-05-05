import React from "react";
import { NavLink } from "react-router-dom";
import { removeUser } from "../../config/store/userReducer";
import { useDispatch } from "react-redux";

const BottomBar = () => {
  const dispatch=useDispatch();
  return (
    <div className="flex w-full justify-around items-center bg-black overflow-x-scroll">
      <NavLink to="/home" className="px-3 py-1.5">Home</NavLink >
      <NavLink to="/explore" className="px-3 py-1.5">Explore</NavLink >
      <NavLink to="/people" className="px-3 py-1.5">People</NavLink >
      <NavLink to="/saved" className="px-3 py-1.5">Saved</NavLink >
      <NavLink to="/create-post" className="px-3 py-1.5">Create Post</NavLink >
      <h1 to="/" className="px-3 py-1.5 cursor-pointer" onClick={()=>dispatch(removeUser())}>Logout</h1 >
    </div>
  );
};

export default BottomBar;
