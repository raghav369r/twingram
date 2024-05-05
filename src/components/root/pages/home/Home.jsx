import TopCreaters from "../TopCreaters";
import FeedCard from "./FeedCard";
import { useEffect, useState } from "react";
import { getFeed } from "../../../../services/posts/post";
import useGetfeed from "../../../../hooks/useGetfeed";

const Home = () => {
  const data = useGetfeed();
  if (data?.error)
    return <h1 className="font-semibold text-2xl">Some thing went wrong</h1>;

  return (
    <div className="flex">
      <div
        className={"w-full md:w-3/4 h-screen overflow-y-scroll scrollbar-hide"}
      >
        <h1 className="text-3xl m-4 font-semibold">Home Feed</h1>
        {data?.map((ele, ind) => (
          <FeedCard key={ind} post={ele} />
        ))}
      </div>
      <div className="hidden w-1/4 md:block bg-neutral-900 h-screen overflow-y-scroll">
        <h1 className="text-2xl font-semibold text-center mt-8">
          Top Creaters
        </h1>
        <TopCreaters />
      </div>
    </div>
  );
};

export default Home;
