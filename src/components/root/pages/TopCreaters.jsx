import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { getAllUsers } from "../../../services/user";
import { NavLink } from "react-router-dom";

const TopCreaters = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await getAllUsers();
      setData(res);
    };
    getData();
  }, []);
  return (
    <div>
      {data?.map((ele, ind) => (
        <div
          key={ind}
          className="max-w-64 border-gray-700 border m-10 rounded-lg flex flex-col items-center justify-center p-2"
        >
          <NavLink to={"/user/"+ele?._id} className="size-20 rounded-full  bg-pink-500" >
            <Avatar name={ele?.name} size="100%" round={true} />
          </NavLink>
          <h1>{ele?.name}</h1>
          <p className="text-gray-700">{"@" + ele?.email.split("@")[0]}</p>
          <button className="px-4 py-1.5 bg-blue-500 rounded-lg my-4">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default TopCreaters;
