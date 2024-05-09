import React from "react";

const SmallPostShimmer = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {data.map((ele) => (
        <div
          key={ele}
          className="relative sm:h-36 md:h-60 bg-neutral-600 animate-pulse m-2 rounded-sm"
        >
          <div className="absolute bottom-0 left-0 flex justify-between items-center p-2 w-full z-10">
            <div className="size-10 md:size-16 rounded-full animate-pulse bg-neutral-400" />
            <div className="py-2 rounded-md px-3 w-1/2 animate-pulse bg-neutral-400"/>
          </div>
        </div>
      ))}
    </>
  );
};

export default SmallPostShimmer;
