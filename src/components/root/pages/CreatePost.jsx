import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { addPost } from "../../../services/posts/post";
import { useDropzone } from "react-dropzone";

const CreatePost = () => {
  const user = useSelector((store) => store.user);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const captionref = useRef(null);
  const tagsref = useRef(null);
  const locationref = useRef(null);

  const handleCancel = (e) => {
    e?.preventDefault();
    captionref.current.value = "";
    tagsref.current.value = "";
    locationref.current.value = "";
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setError("");
    const caption = captionref?.current?.value;
    const tags = tagsref?.current?.value;
    const location = locationref?.current?.value;
    const data = {
      ownerId: user._id,
      caption: caption,
      tags: tags.split(","),
      location: location,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("image", image);
    console.log(formData);
    const res = await addPost(formData);
    // console.log(res);
    setUploadError(res?.success || "Error Creating post Try again!!");
    // else handleCancel();
  };
  const fileSizeLimit = 5 * 1024 * 1024; // 5 MB size limit

  const onDrop = (acceptedFiles, rejectedFiles) => {
    setError("");
    setImageUrl(null);
    if (
      rejectedFiles.length > 0 ||
      !acceptedFiles?.[0].type.startsWith("image/")
    ) {
      setError("Please upload a valid image file.");
      return;
    }
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    setImage(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: fileSizeLimit,
    multiple: false,
  });

  return (
    <div className="h-[100dvh] overflow-y-scroll">
      <h1 className="text-3xl font-semibold">Create Post</h1>
      <form className="felx flex-row gap-4 p-2 md:p-10">
        <label className="my-4">Caption</label>
        <textarea
          ref={captionref}
          rows={4}
          className="w-full  p-4 focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg bg-neutral-800"
        />
        <label className="my-4">Add Photo URL</label>
        <div
          {...getRootProps()}
          className="relative w-full h-72 p-2 rounded-lg text-center flex items-center bg-neutral-800"
        >
          <input {...getInputProps()} />
          {!image && (
            <p className="text-center w-full">
              Drag 'n' drop an image here, or click to select one
            </p>
          )}
          {image && (
            <img
              src={imageUrl}
              className="absolute top-0 left-0 object-contain -z-0 size-full"
            />
          )}
          {error && <p className="text-red-700 text-center w-full">{error}</p>}
        </div>
        <label className="my-4">Add location</label>
        <input
          ref={locationref}
          className="w-full  focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg py-3 px-4 bg-neutral-800"
          type="text"
          name="location"
        />
        <label className="my-4">
          Add Tags (separated by comma &quot; , &quot;)
        </label>
        <input
          ref={tagsref}
          className="w-full  focus:outline-none focus:border-[1px] border-blue-500 my-4 rounded-lg py-3 px-4 bg-neutral-800"
          type="text"
          name="tags"
          placeholder="Art, Learn, love"
        />
        {uploadError == "uploaded successfully" ? (
          <p className="text-center text-green-700">{uploadError}</p>
        ) : (
          <p className="text-center text-red-700">{uploadError}</p>
        )}
        <div className="flex justify-end gap-4 mt-3">
          <button
            onClick={handleCancel}
            className="py-2 px-4 rounded-lg bg-neutral-800"
          >
            Cancel
          </button>
          <button
            onClick={handlePost}
            className="py-2 px-4 rounded-lg bg-blue-500"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
