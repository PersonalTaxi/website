import React from "react";
import { BsCalendar3Week } from "react-icons/bs";

export default function Time() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px] flex flex-col justify-center items-center h-[80px]">
        <BsCalendar3Week className="w-full h-[60%] text-yellow-400 mr-[10px] lg:mx-[0px]" />
        <p className="font-bold text-[18px] hidden lg:block">
          Our Avalibility 24/7
        </p>
      </div>
      <p className="w-[100%]">
        We provide 24/7 services. All we need is you to reserve your course not
        earlier that 16 h from now. So order your transfer as soon as posible.
      </p>
    </div>
  );
}
