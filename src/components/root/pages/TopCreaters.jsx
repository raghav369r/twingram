import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";
import Follow from "../../shared/Follow";
import useGetAllUsers from "../../../hooks/useGetAllUsers";
import useGetCuttentUser from "../../../hooks/useGetCuttentUser";

const TopCreaters = () => {
  const data = useGetAllUsers();
  const curruser=useGetCuttentUser();
  if (data.loading) return <h1>loading</h1>;
  if (data.error) return null;
  return (
    <div className="">
      {data?.map(({ following, user }, ind) => (
        <div
          key={ind}
          className="mx-auto my-2 max-w-44 border-gray-700 border rounded-lg flex flex-col items-center justify-center p-2"
        >
          <NavLink
            to={"/user/" + user?._id}
            className="size-20 rounded-full  bg-pink-500"
          >
            <Avatar name={user?.name} size="100%" round={true} />
          </NavLink>
          <h1>{user?.name}</h1>
          <p className="text-gray-700">{"@" + user?.email?.split("@")[0]}</p>
          <Follow
            followingu={following}
            userId1={curruser?._id}
            userId2={user?._id}
          />
        </div>
      ))}
    </div>
  );
};

export default TopCreaters;
