import { Link } from "react-router-dom";
import logo from "/assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { setUser } from "../../config/store/userReducer";

const Siginin = () => {
  const dispatch=useDispatch();

    const handleSignin=(e)=>{
    e.preventDefault();
    dispatch(setUser({name:"Raghav",email:"Raghav@reddy"}));
  }
  return (
      <div className="w-1/2 flex justify-center items-center h-screen overflow-y-scroll">
        <form className="">
          <img src={logo} alt="" className="" />
          <h1 className="text-center text-3xl my-4 font-semibold">
            Create a new account
          </h1>
          <h2 className="text-center text-xl text-gray-600">
            To use twingram, Please enter your details
          </h2>
          <h1 className="text-xl">Name</h1>
          <input name="name" type="text" className="py-4 my-2 bg-neutral-800 w-full " />
          <h1 className="text-xl">UseName</h1>
          <input name="username" type="text" className="py-4 my-2 bg-neutral-800 w-full " />
          <h1 className="text-xl">Email</h1>
          <input name="email" type="email" className="py-4 my-2 bg-neutral-800 w-full " />
          <h1 className="text-xl">Password</h1>
          <input name="password" type="password" className="py-4 my-2 bg-neutral-800 w-full " />
          <button className="py-3 rounded-md my-2 w-full bg-blue-700 text-xl" onClick={handleSignin}>Sigin in</button>
          <p className="text-center">Already have an account? <span className="text-blue-700 cursor-pointer"><Link to="/login">Login</Link></span></p>  
        </form>      
    </div>
  );
};

export default Siginin;
