const CreatePost = () => {
  return (
    <div className="h-screen overflow-y-scroll">
      <h1 className="text-3xl font-semibold">Create Post</h1>
      <form className="felx flex-row gap-4 p-10">
        <label className="my-4">Caption</label>
        <textarea rows={4} className="w-full  p-4 focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg bg-neutral-800"/>
        <label className="my-4">Add Photoes</label>
        <div className="w-full  rounded-lg my-4 aspect-square bg-neutral-800"/>
        <label className="my-4">Add location</label>
        <input className="w-full  focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg py-3 px-4 bg-neutral-800" type="text" name="location" />
        <label className="my-4">Add Tags (separated by comma &quot; , &quot;)</label>
        <input className="w-full  focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg py-3 px-4 bg-neutral-800" type="text" name="tags" placeholder="Art, Learn, love"/>
        <div className="flex justify-end gap-4 mt-3">
          <button onClick={(e)=>e.preventDefault()} className="py-2 px-4 rounded-lg bg-neutral-800">Cancel</button>
          <button onClick={(e)=>e.preventDefault()} className="py-2 px-4 rounded-lg bg-blue-500">Create Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
