import { Route, Routes } from "react-router-dom";

import Siginin from "./components/auth/Siginin";
import AuthLayout from "./components/auth/AuthLayout";
import RootLayout from "./components/root/RootLayout";
import Home from "./components/root/pages/home/Home";
import SiginUp from "./components/auth/SignUp";
import Explore from "./components/root/pages/Explore";
import AllPeople from "./components/root/pages/AllPeople";
import Saved from "./components/root/pages/Saved";
import CreatePost from "./components/root/pages/CreatePost";
import User from "./components/root/pages/User";

const App = () => {
  return (
    <main className="font-customFont text-white">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<Siginin />} />
          <Route path="/login" element={<SiginUp />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/people" element={<AllPeople />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/user/:userId" element={<User/>} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
