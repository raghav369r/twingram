import React from "react";

const Card = () => {
  return (
    <div className="m-2 p-2 md:p-7 border border-gray-700 rounded-md flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="size-20 rounded-full bg-neutral-600 animate-pulse" />
        <div className="py-2 rounded-md w-1/2 bg-neutral-600 animate-pulse" />
      </div>
      <div className="py-2 w-1/2 rounded-md animate-pulse bg-neutral-600" />
      <div className="py-2 w-1/2 rounded-md animate-pulse bg-neutral-600" />
      <div className="h-52 w-full  aspect-square bg-neutral-600 animate-pulse" />
    </div>
  );
};
const FeedShimmer = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div>
      {data.map((ele) => (
        <Card key={ele} />
      ))}
    </div>
  );
};

export default FeedShimmer;
