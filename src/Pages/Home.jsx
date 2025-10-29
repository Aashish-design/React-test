import React, { useState } from "react";
import Header from "../Components/Header";

const Home = () => {
  let [num, setNum] = useState(0);
  function Increasechng() {
    setNum(num+1);
  }
  function Decreasechng() {
    setNum(num-1);
  }
  return (
    <div className="w-[100vw] h-screen bg-amber-700">
      <Header />
      <div className=" flex flex-col justify-center items-center"></div>
      <h1>{num}</h1>
      <button onClick={Increasechng}>Increase</button>
      <button className="ml-[2vw]" onClick={Decreasechng}>Decrease</button>
    </div>
  );
};

export default Home;
