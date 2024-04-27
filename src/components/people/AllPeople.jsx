import { IoSearchOutline } from "react-icons/io5";
import { IoFilterSharp } from "react-icons/io5";

const AllPeople = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
            <h1 className="text-xl font-semibold">People You Might Know</h1>
        </div>
    </div>
  );
};

export default AllPeople;
