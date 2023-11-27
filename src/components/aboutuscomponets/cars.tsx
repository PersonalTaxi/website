import React from "react";
import { IoCarSport } from "react-icons/io5";

export default function Cars() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px] flex flex-col justify-center items-center h-[80px]">
        <IoCarSport className="w-full h-[60%] text-yellow-400 mr-[10px] lg:mx-[0px]" />
        <p className="font-bold text-[18px] hidden lg:block">Our cars</p>
      </div>
      <p className="w-[100%]">
        Our company has about 100 cars for both individuals or larger groups.
        You can chose from sedans, combi and even a minivans.
      </p>
    </div>
  );
}
