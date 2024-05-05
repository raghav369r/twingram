import React from "react";
import { useState } from "react";

const useIsliked = (userId, postId) => {
  const [liked] = useState(false);
  return liked;
};

export default useIsliked;
