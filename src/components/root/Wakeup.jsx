import React, { useEffect, useState } from "react";
import axios from "axios";
import { Backend, Backend2 } from "../../utils/endPoints";

const Wakeup = () => {
  const [show, setshow] = useState(false);
  useEffect(() => {
    const start = async () => {
      let id;
      try {
        id = setTimeout(() => {
          setshow(true);
        }, 6000);
        await axios.get(Backend);
        await axios.get(Backend2);
        clearTimeout(id);
      } catch (ex) {
        console.log("Error waking up server!!");
      }
      clearTimeout(id);
      setshow(false);
    };
    start();
  }, []);
  return show ? (
    <div className="z-20 absolute bottom-0 py-10">
      <h1 className="text-2xl text-center text-white">
        Loading first time may take some time to wake up server, once loaded no
        need to wait for further requests.
      </h1>
    </div>
  ) : null;
};

export default Wakeup;
