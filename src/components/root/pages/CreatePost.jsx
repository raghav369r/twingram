import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../../../services/posts/post";

const CreatePost = () => {
  const user=useSelector(store=>store.user);
  const [error, setError]=useState("");
  const captionref=useRef(null);
  const URLref=useRef(null);
  const tagsref=useRef(null);
  const locationref=useRef(null);

  const handleCancel=(e)=>{
    e?.preventDefault();
    captionref.current.value="";
    URLref.current.value="";
    tagsref.current.value="";
    locationref.current.value="";
  }

  const handlePost=async (e)=>{
    e.preventDefault();
    setError("");
    const caption=captionref?.current?.value;
    const tags=tagsref?.current?.value;
    const imageUrl=URLref?.current?.value;
    const location=locationref?.current?.value;
    const data={
      ownerId:user._id,
      caption:caption,
      tags:tags.split(","),
      imageUrl:imageUrl,
      location:location
    }
    // console.log(data);
    const res=await addPost(data);
    if(res.error) setError(res.error);
    else handleCancel();
  }

  return (
    <div className="h-screen overflow-y-scroll">
      <h1 className="text-3xl font-semibold">Create Post</h1>
      <form className="felx flex-row gap-4 p-2 md:p-10">
        <label className="my-4">Caption</label>
        <textarea ref={captionref} rows={4} className="w-full  p-4 focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg bg-neutral-800"/>
        <label className="my-4">Add Photo URL</label>
        <input ref={URLref} name="URL" type="text" className="w-full  focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg py-3 px-4 bg-neutral-800"/>
        {/* <div className="w-full  rounded-lg my-4 aspect-square bg-neutral-800"/> */}
        <label className="my-4">Add location</label>
        <input ref={locationref} className="w-full  focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg py-3 px-4 bg-neutral-800" type="text" name="location" />
        <label className="my-4">Add Tags (separated by comma &quot; , &quot;)</label>
        <input ref={tagsref} className="w-full  focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg py-3 px-4 bg-neutral-800" type="text" name="tags" placeholder="Art, Learn, love"/>
        <p className="text-center text-red-700">{error}</p>
        <div className="flex justify-end gap-4 mt-3">
          <button onClick={handleCancel} className="py-2 px-4 rounded-lg bg-neutral-800">Cancel</button>
          <button onClick={handlePost} className="py-2 px-4 rounded-lg bg-blue-500">Create Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
