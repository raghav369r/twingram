import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";
import { IoSearchOutline } from "react-icons/io5";
import useGetAlluUsers from "../../../hooks/useGetAlluUsers";

const Profile = ({ profile }) => {
  const { name, email, _id } = profile;
  return (
    <div className="flex flex-col justify-center items-center border border-gray-800 p-4 rounded-lg">
      <NavLink to={"/user/" + _id} className="size-16 m-2">
        <Avatar name={name} size="100%" round={true} />
      </NavLink>
      <h1 className="">{name}</h1>
      <p className="text-neutral-700">{"@" + email?.split("@")[0]}</p>
      <button className="px-4 py-1.5 bg-blue-500 rounded-lg my-4">
        Follow
      </button>
    </div>
  );
};

const AllPeople = () => {
  const data = useGetAlluUsers();
  return (
    <div className="p-2 md:p-10 h-screen overflow-y-scroll">
      <h1 className="font-semibold text-3xl ">Search People</h1>
      <div className="flex w-full items-center my-4">
        <label className="bg-neutral-800 p-4 rounded-l-lg">
          <IoSearchOutline className="size-6" style={{ color: "#808080" }} />
        </label>
        <input
          type="text"
          name="query"
          placeholder="Search"
          className="bg-neutral-800 py-4 rounded-r-lg my-4 w-full focus:outline-0"
        />
      </div>
      <div className="">
        <h1 className="text-xl font-semibold">People You Might Know</h1>
      </div>
      <div className="my-4 grid grid-cols-2  md:grid-cols-4 gap-2">
        {data?.map((ele, ind) => (
          <Profile key={ind} profile={ele} />
        ))}
      </div>
    </div>
  );
};

export default AllPeople;
