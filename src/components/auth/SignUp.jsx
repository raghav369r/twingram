import { Link } from "react-router-dom";
import logo from "/assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { setUser } from "../../config/store/userReducer";

const SiginUp = () => {
    const dispatch=useDispatch();

    const handleSignin=(e)=>{
    e.preventDefault();
    dispatch(setUser({name:"Raghav",email:"Raghav@reddy"}));

  }
  return (
      <div className="flex w-full h-screen justify-center items-center">
        <form className="">
          <img src={logo} alt="" className="" />
          <h1 className="text-center text-3xl my-4 font-semibold">
          Log in to your account          </h1>
          <h2 className="text-center text-xl text-gray-600">
          Welcome back! Please enter your details.          </h2>
          <h1 className="text-xl">Email</h1>
          <input name="email" type="email" className="py-4 my-2 bg-neutral-800 w-full " />
          <h1 className="text-xl">Password</h1>
          <input name="password" type="password" className="py-4 my-2 bg-neutral-800 w-full " />
          <button className="py-3 rounded-md my-2 w-full bg-blue-700 text-xl" onClick={handleSignin}>Login</button>
          <p className="text-center">Don&apos;t have an account? <span className="text-blue-700 cursor-pointer"><Link to={"/sign-in"}>Sign Up</Link></span></p>  
        </form>      
    </div>
  );
};

export default SiginUp;
