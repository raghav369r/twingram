import React from "react";
import { useState } from "react";

const useIsliked = (userId, postId) => {
  const [liked] = useState({loading:true});
  return liked;
};

export default useIsliked;
