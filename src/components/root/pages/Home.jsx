import FeedCard from "./FeedCard";


const Home = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={"w-full h-screen overflow-y-scroll scrollbar-hide"}>
      <h1 className="text-3xl m-4 font-semibold">Home Feed</h1>
      {data?.map((ele, ind) => (
        <FeedCard key={ind}/>
      ))}
    </div>
  );
};

export default Home;
