import { Link } from "react-router-dom";
import logo from "/assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { setUser } from "../../config/store/userReducer";
import { useRef, useState } from "react";
import Loading from "../shared/Loading";
import { register } from "../../services/auth";

const Siginin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nameref = useRef(null);
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const handleSignin = async (e) => {
    e.preventDefault();
    const name = nameref?.current?.value;
    const email = emailref?.current?.value;
    const password = passwordref?.current?.value;
    if (!name || name == "") return nameref.current.focus();
    if (!email || email == "") return emailref.current.focus();
    if (!password || password == "") return passwordref.current.focus();
    setError("");
    setLoading(true);
    const data = {
      email: email,
      name: name,
      password: password,
    };
    
    const res = await register(data);
    if (res?.error) setError(res.error);
    else dispatch(setUser(res));
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-y-scroll">
      <form className="">
        <img src={logo} alt="" className="" />
        <h1 className="text-center text-3xl my-4 font-semibold">
          Create a new account
        </h1>
        <h2 className="text-center text-xl text-gray-600">
          To use twingram, Please enter your details
        </h2>
        <h1 className="text-xl">Name</h1>
        <input
          ref={nameref}
          name="name"
          type="text"
          className="p-4 my-2 bg-neutral-800 w-full "
        />
        {/* <h1 className="text-xl">UserName</h1>
        <input
          name="username"
          type="text"
          className="p-4 my-2 bg-neutral-800 w-full "
        /> */}
        <h1 className="text-xl">Email</h1>
        <input
          ref={emailref}
          name="email"
          type="email"
          className="p-4 my-2 bg-neutral-800 w-full "
        />
        <h1 className="text-xl">Password</h1>
        <input
          ref={passwordref}
          name="password"
          type="password"
          className="p-4 my-2 bg-neutral-800 w-full "
        />
        <p className="text-center text-red-800">{error}</p>
        <button
          disabled={loading}
          className="py-3 rounded-md my-2 w-full bg-blue-700 text-xl disabled:bg-blue-300 disabled:cursor-not-allowed flex justify-center"
          onClick={handleSignin}
        >
          {loading ? <Loading /> : "Sigin in"}
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <span className="text-blue-700 cursor-pointer" disabled={loading}>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Siginin;
