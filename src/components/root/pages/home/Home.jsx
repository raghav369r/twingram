import TopCreaters from "../TopCreaters";
import FeedCard from "./FeedCard";

const Home = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex">
      <div className={"w-full md:w-3/4 h-screen overflow-y-scroll scrollbar-hide"}>
        <h1 className="text-3xl m-4 font-semibold">Home Feed</h1>
        {data?.map((ele, ind) => (
          <FeedCard key={ind} />
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
