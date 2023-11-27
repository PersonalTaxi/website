import React from "react";
import { RiServiceLine } from "react-icons/ri";

export default function Service() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px] flex flex-col justify-center items-center h-[80px]">
        <RiServiceLine className="w-full h-[60%] text-yellow-400 lg:mx-[0px]" />
        <p className="font-bold text-[18px] hidden lg:block">
          Professional service
        </p>
      </div>
      <p className="w-[100%]">
        We want to make our hob weel. If there is any problems we will do
        everything needed to deliver our service. We will try to call you, find
        you in the right place an so on.
      </p>
    </div>
  );
}
