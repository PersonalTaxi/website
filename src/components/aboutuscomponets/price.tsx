import React from "react";
import { BsCashCoin } from "react-icons/bs";

export default function Price() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px] flex flex-col justify-center items-center h-[80px]">
        <BsCashCoin className="w-full h-[60%] text-yellow-400 mr-[10px] lg:mx-[0px]" />
        <p className="font-bold text-[18px] hidden lg:block">Best prices</p>
      </div>
      <p className="w-[100%]">
        Our prices are among the best on the market. Despite this we can also
        provide one of the best service for our customers.
      </p>
    </div>
  );
}
