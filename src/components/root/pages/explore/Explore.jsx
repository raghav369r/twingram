import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";


const Explore = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="p-10 h-screen overflow-y-scroll">
      <h1 className="font-semibold text-3xl ">Search Posts</h1>
      <div className="flex w-full items-center my-4">
        <label className="bg-neutral-800 p-4 rounded-l-lg">
          <IoSearchOutline className="size-6" style={{color:"#808080"}}/>
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
          <div className="flex items-center px-4 py-1.5 bg-neutral-800 rounded-lg gap-2"><h1 className="text-lg">All</h1><IoFilterSharp style={{color:"#808080"}} className="size-5"/></div>
        </div>
        <div className="flex flex-wrap gap-4">
          {data.map((ele) => (
            <div
              key={ele}
              className="size-56 rounded-lg bg-neutral-800 relative"
            >
              <div className="flex justify-between bottom-0 items-center w-full p-2 absolute">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-pink-400" />
                  <p>karna</p>
                </div>
                <div>
                  <IoIosHeart className="" />
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
