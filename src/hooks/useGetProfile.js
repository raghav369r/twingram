import React, { useEffect, useState } from "react";
import { getUserProfile } from "../services/user";

const useGetProfile = (ownerId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await getUserProfile(ownerId);
      setUser(res);
    };
    if (!ownerId) setUser({ error: "error getting user!!" });
    getUser();
  }, [ownerId]);
  return user;
};

export default useGetProfile;
