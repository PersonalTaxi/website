import React from "react";
import Image from "next/image";
import { BsFillPersonFill, BsFillBagFill } from "react-icons/bs";

export default function Vancomponent() {
  return (
    <div className="w-screen h-full flex border-blue-900 px-[10px]">
      <div
        id="descriptions-wrapper"
        className="w-5/12 flex flex-col justify-between py-[10px] pl-[5px]"
      >
        <div id="car-type" className="text-[18px]">
          Mini Van
        </div>
        <div id="description" className="w-[300px] text-[12px] lg:text-[16px]">
          <div className="w-full flex items-center">
            <BsFillPersonFill className="text-yellow-500" />
            <p className="text-center font-semibold pl-[5px]">max 8 people</p>
          </div>
          <div className="w-full flex  items-center">
            <BsFillBagFill className="text-yellow-500" />
            <p className=" text-center font-semibold pl-[5px]">
              max 7 suitcases
            </p>
          </div>
        </div>
        <div
          id="price"
          className="bg-yellow-500 w-8/12 rounded-r-[5px] text-center text-white -ml-[25px]"
        >
          <p className="text-[12px] inline">from</p> 149 zł
        </div>
        <p className="text-[8px]">Switch to sedan</p>
      </div>
      <div className="relative w-7/12 h-full lg:h-full ">
        <Image
          className="object-contain"
          src="/Van.webp"
          fill
          alt="sedan"
        ></Image>
      </div>
    </div>
  );
}
