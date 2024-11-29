import React, { useState } from "react";
import ExploreBig from "../root/pages/ExploreBig";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const AbsolutePost = ({ data, setShow, show }) => {
    return (
    <div>
      {show != -1 && (
        <div className="absolute w-screen h-screen top-0 left-0 z-10 flex items-center">
          <div className="flex items-center">
            <button
              disabled={show === 0}
              className="disabled:cursor-not-allowed bg-white rounded-full mx-2 transition hover:-translate-x-2"
              onClick={() => setShow(show - 1)}
            >
              <GrFormPrevious style={{ color: "black" }} className="size-10" />
            </button>
          </div>
          <div className="w-full bg-black h-fit md:h-[90%]">
            <ExploreBig post={data?.[show]} handleClose={() => setShow(-1)} />
          </div>
          <div className="flex items-center">
            <button
              disabled={show+1 === data.length}
              className="disabled:cursor-not-allowed bg-white rounded-full mx-2 transition hover:translate-x-2"
              onClick={() => setShow(show + 1)}
            >
              <MdNavigateNext style={{ color: "black" }} className="size-10" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AbsolutePost;
