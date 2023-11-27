import React from "react";
import { MdOutlineMoreTime } from "react-icons/md";

export default function Watingtimehotel() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px] flex flex-col justify-center items-center h-[80px]">
        <MdOutlineMoreTime className="w-full h-[60%] text-yellow-400 mr-[10px] lg:mx-[0px]" />
        <p className="font-bold text-[18px] hidden lg:block">
          Wating time outside the airport
        </p>
      </div>
      <p className="w-[100%]">
        If you want to be pick up from e.g. hotel we will be for you on time. We
        will also waiting for you up to 15 mins. If problems w going to call
        you.
      </p>
    </div>
  );
}
