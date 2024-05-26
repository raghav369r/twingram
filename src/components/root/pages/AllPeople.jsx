import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";
import { IoSearchOutline } from "react-icons/io5";
import useGetAllUsers from "../../../hooks/useGetAllUsers";
import UserShimmer from "../../shimmers/UserShimmer";
import { useSelector } from "react-redux";
import useGetCuttentUser from "../../../hooks/useGetCuttentUser";
import Follow from "../../shared/Follow";

const Profile = ({ profile }) => {
  const { user, following } = profile;
  const { _id, email, name } = user;
  const curruser = useGetCuttentUser();
  return (
    <div className="flex flex-col justify-center items-center border border-gray-800 p-4 rounded-lg">
      <NavLink to={"/user/" + _id} className="size-16 m-2">
        <Avatar name={name} size="100%" round={true} />
      </NavLink>
      <h1 className="">{name}</h1>
      <p className="text-neutral-700">{"@" + email?.split("@")[0]}</p>
      <Follow followingu={following} userId1={curruser?._id} userId2={_id} />
    </div>
  );
};

const AllPeople = () => {
  const data = useGetAllUsers();
  return (
    <div className="p-2 md:p-10 h-[100dvh] overflow-y-scroll">
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
        {data?.loading ? (
          <UserShimmer />
        ) : (
          data?.map((ele, ind) => <Profile key={ind} profile={ele} />)
        )}
      </div>
    </div>
  );
};

export default AllPeople;
