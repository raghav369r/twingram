import { Route, Routes } from "react-router-dom";

import Siginin from "./components/auth/Siginin";
import AuthLayout from "./components/auth/AuthLayout";
import RootLayout from "./components/root/RootLayout";
import Home from "./components/root/pages/Home";
import SiginUp from "./components/auth/SignUp";
import FeedCard from "./components/root/pages/FeedCard";

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
          <Route path="/" element={<FeedCard />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
