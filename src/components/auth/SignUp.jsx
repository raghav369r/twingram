import { Link } from "react-router-dom";
import logo from "/assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { setUser } from "../../config/store/userReducer";
import { useRef, useState } from "react";
import Loading from "../shared/Loading";
import { login } from "../../services/auth";

const SiginUp = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError]=useState("");
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const handleSignin = async(e) => {
    e.preventDefault();
    const email = emailref?.current?.value;
    const password = passwordref?.current?.value;
    if (!email || email == "") return emailref.current.focus();
    if (!password || password == "") return passwordref.current.focus();
    setError("");
    setLoading(true);
    const data = {
      email: email,
      password: password,
    };
    // setTimeout(() => {
    //   setLoading(false);
    //   dispatch(setUser({ name: "Raghav", email: "Raghav@reddy" }));
    // }, 2000);
    const res = await login(data);
    if (res?.error) setError(res.error);
    else dispatch(setUser(res));
    setLoading(false);
  };
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <form className="">
        <img src={logo} alt="" className="" />
        <h1 className="text-center text-3xl my-4 font-semibold">
          Log in to your account
        </h1>
        <h2 className="text-center text-xl text-gray-600">
          Welcome back! Please enter your details.
        </h2>
        <h1 className="text-xl">Email</h1>
        <input
          ref={emailref}
          name="email"
          type="email"
          className="p-4 my-2 bg-neutral-800 w-full"
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
          className="py-3 rounded-md my-2 w-full bg-blue-700 text-xl flex justify-center disabled:cursor-not-allowed disabled:bg-blue-300"
          onClick={handleSignin}
          disabled={loading}
        >
          {loading ? <Loading /> : "Login"}
        </button>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <span className="text-blue-700 cursor-pointer">
            <Link to={"/sign-in"}>Sign Up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SiginUp;
