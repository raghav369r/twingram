import Avatar from "react-avatar";

const TopCreaters = () => {
  const data = [
    {
      name: "raghav",
      username: "@raghav",
    },
    {
      name: "reddy",
      username: "@reddy",
    },
    {
      name: "karna",
      username: "@the_karna",
    },
    {
      name: "raghav",
      username: "@raghav",
    },
    {
      name: "reddy",
      username: "@reddy",
    },
    {
      name: "karna",
      username: "@the_karna",
    },
  ];
  return (
    <div>
      {data.map((ele, ind) => (
        <div
          key={ind}
          className="max-w-64 border-gray-700 border m-10 rounded-lg flex flex-col items-center justify-center p-2"
        >
          <div className="size-20 rounded-full  bg-pink-500">
            <Avatar name="king kohli" size="100%" round={true} />
          </div>
          <h1>{ele.name}</h1>
          <p className="text-gray-700">{ele.username}</p>
          <button className="px-4 py-1.5 bg-blue-500 rounded-lg my-4">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default TopCreaters;
