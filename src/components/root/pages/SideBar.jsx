import { IoHomeOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


const SideBar = () => {
    const user=useSelector(store=>store.user);
    const {pathname}=useLocation();
    return (
    <div className="w-full">
        <ul className="flex flex-col gap-4">
            <li className="flex gap-2 px-10 py-5"><img src="/assets/images/logo.svg" alt=""/></li>
            <li className="text-xl px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-500">{user?.name}</li>
            <li className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${pathname=="/"?" bg-blue-500":"" }`}><IoHomeOutline className="size-7"/><h1 className="text-xl font-semibold">Home</h1></li>
            <li className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${pathname=="/explore"?" bg-blue-500":"" }`}><MdExplore className="size-7"/><h1 className="text-xl font-semibold">Explore</h1></li>
            <li className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${pathname=="/people"?" bg-blue-500":"" }`}><IoPeopleOutline className="size-7"/><h1 className="text-xl font-semibold">People</h1></li>
            <li className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${pathname=="/saved"?" bg-blue-500":"" }`}><img src="/assets/icons/saved.svg" alt="" className="invert transition brightness-0 size-7"/><h1 className="text-xl font-semibold">Saved</h1></li>
            <li className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${pathname=="/create-post"?" bg-blue-500":"" }`}><MdCreateNewFolder className="size-7"/><h1 className="text-xl font-semibold">Create Post</h1></li>
            <li className={`flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4 ${pathname=="/home"?" bg-blue-500":"" }`}><IoLogOutOutline className="size-7"/><h1 className="text-xl font-semibold">LogOut</h1></li>
        </ul>
    </div>
  ) 
}

export default SideBar