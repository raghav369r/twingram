import { useSelector } from "react-redux";

const useGetCuttentUser = () => {
  const user = useSelector((store) => store.user);
  return user;
};

export default useGetCuttentUser;
