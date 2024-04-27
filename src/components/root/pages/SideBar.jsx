import { IoHomeOutline } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { MdCreateNewFolder } from "react-icons/md";
import { useSelector } from "react-redux";



const SideBar = () => {
    const user=useSelector(store=>store.user);
    return (
    <div className="w-full">
        <ul className="flex flex-col gap-4">
            <li className="flex gap-2 px-10 py-5"><img src="/assets/images/logo.svg" alt=""/></li>
            <li className="text-xl px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-500">{user?.name}</li>
            <li className="flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4"><IoHomeOutline className="size-7"/><h1 className="text-xl font-semibold">Home</h1></li>
            <li className="flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4"><MdExplore className="size-7"/><h1 className="text-xl font-semibold">Explore</h1></li>
            <li className="flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4"><IoPeopleOutline className="size-7"/><h1 className="text-xl font-semibold">People</h1></li>
            <li className="flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4"><img src="/assets/icons/saved.svg" alt="" className="invert transition brightness-0 size-7"/><h1 className="text-xl font-semibold">Saved</h1></li>
            <li className="flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4"><MdCreateNewFolder className="size-7"/><h1 className="text-xl font-semibold">Create Post</h1></li>
            <li className="flex gap-4 items-center rounded-lg cursor-pointer hover:bg-blue-500 px-2 py-4"><IoLogOutOutline className="size-7"/><h1 className="text-xl font-semibold">LogOut</h1></li>
        </ul>
    </div>
  ) 
}

export default SideBar