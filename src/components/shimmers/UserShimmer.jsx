import React from "react";

const UserShimmer = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {data.map((ele) => (
        <div key={ele} className="flex flex-col gap-2 justify-center items-center border border-gray-800 p-4 rounded-lg">
          <div className="bg-neutral-600 size-20 rounded-full animate-pulse" />
          <div className="px-3 py-2  w-[100%] animate-pulse rounded-md bg-neutral-600"></div>
          <div className="px-3 py-2 w-full animate-pulse rounded-md bg-neutral-600"></div>
          <div className="bg-neutral-600 p-2 w-1/2 rounded-lg"/>
        </div>
      ))}
    </>
  );
};

export default UserShimmer;
