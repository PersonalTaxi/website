import React from "react";
import { MdOutlineMoreTime } from "react-icons/md";

export default function Watingtime() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px]  flex flex-col justify-center items-center h-[80px]">
        <MdOutlineMoreTime className="w-full h-[60%] text-yellow-400 mr-[10px] lg:mx-[0px]" />
        <p className="font-bold text-[18px] hidden lg:block">
          Wating time on airport
        </p>
      </div>
      <p className="w-[100%]">
        If you arrive by plane we will monitor departures time and we will be
        for you on time. We will also waiting for you after arrival up to 60
        mins.
      </p>
    </div>
  );
}
