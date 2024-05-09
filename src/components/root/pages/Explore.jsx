import { IoSearchOutline } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";
import SmallPost from "./SmallPost";
import useGetfeed from "../../../hooks/useGetfeed";
import SmallPostShimmer from "../../shimmers/SmallPostShimmer";

const Explore = () => {
  const data = useGetfeed();
  if (data?.error)
    return <h1 className="font-semibold text-2xl">Some thing went wrong</h1>;

  return (
    <div className="p-2 md:p-10 h-screen overflow-y-scroll">
      <h1 className="font-semibold text-3xl ">Search Posts</h1>
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
        <div className="grid grid-cols-3 ">
          {data?.loading
            ? <SmallPostShimmer/>
            : data?.map((ele, ind) => <SmallPost ele={ele} key={ind} />)}
        </div>
      </div>
    </div>
  );
};

export default Explore;
