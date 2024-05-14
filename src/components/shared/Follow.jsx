import React from "react";
import { useState } from "react";
import Loading from "./Loading";
import { followAccount, unFollowAccount } from "../../services/user";
const Follow = ({ userId1, userId2, followingu }) => {
  const [following, setFollowing] = useState(followingu);
  const [loading, setLoading] = useState(false);

  const handleFollow = async () => {
    setLoading(true);
    var res;
    if (following) res = await unFollowAccount(userId1, userId2);
    else res = await followAccount(userId1, userId2);
    if (!res?.error) setFollowing(res.following);
    setLoading(false);
  };
  return (
    <button
      onClick={handleFollow}
      className="px-4 py-1.5 bg-blue-500 rounded-lg my-4"
    >
      {loading ? <Loading /> : following ? "unFollow" : "follow"}
    </button>
  );
};

export default Follow;
