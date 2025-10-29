import React, { useState } from "react";
import Header from "../Components/Header";

const About = () => {
  const [title, setTitle] = useState("");
  const formsubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className="w-[100vw] h-screen bg-amber-200">
      <Header />
      <form
        onSubmit={(e) => {
          formsubmit(e);
        }}
        className="p-[3vw] flex flex-col gap-[3vw]"
      >
        <input
          className="w-fit border-[1px] text-black p-3 border-amber-700"
          type="text"
          placeholder="Enter Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="w-fit">Submit</button>
      </form>
    </div>
  );
};

export default About;
