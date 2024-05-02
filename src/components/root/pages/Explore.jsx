import { IoSearchOutline } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import Like from "../../shared/Like";
import { useEffect, useState } from "react";
import { getFeed } from "../../../services/posts/post";

const Explore = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const res = await getFeed();
    if (res.error)
      return <h1 className="font-semibold text-2xl">Some thing went wrong</h1>;
    else setData(res);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-10 h-screen overflow-y-scroll">
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
        <div className=" flex items-center justify-between">
          <h1 className="font-semibold text-2xl my-4">Popular Today</h1>
          <div className="flex items-center px-4 py-1.5 bg-neutral-800 rounded-lg gap-2">
            <h1 className="text-lg">All</h1>
            <IoFilterSharp style={{ color: "#808080" }} className="size-5" />
          </div>
        </div>
        <div className="grid grid-cols-3">
          {data?.map((ele,ind) => (
            <div
              key={ind}
              className="rounded-lg bg-neutral-800 relative group cursor-pointer"
            >
              <img src={ele?.imageUrl} alt="" className="w-full aspect-square object-cover"/>
              <div className="hidden group-hover:flex justify-between bottom-0 items-center w-full p-2 absolute z-10">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-pink-400" />
                  <p>karna</p>
                </div>
                <div>
                  <Like showLikes={false} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
