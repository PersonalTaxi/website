import React from "react";
import Image from "next/image";
import { BsFillPersonFill, BsFillBagFill } from "react-icons/bs";

export default function Sedancomponent() {
  return (
    <div className="w-screen h-full flex border-blue-900">
      <div
        id="descriptions-wrapper"
        className="w-1/2 flex flex-col justify-between py-[10px] pl-[5px]"
      >
        <div id="car-type" className="text-[18px]">
          Economic Sedan
        </div>
        <div id="description" className="w-[300px] text-[12px] lg:text-[16px]">
          <div className="w-full flex items-center">
            <BsFillPersonFill className="text-yellow-500" />
            <p className="text-center font-semibold pl-[5px]">max 4 people</p>
          </div>
          <div className="w-full flex  items-center">
            <BsFillBagFill className="text-yellow-500" />
            <p className=" text-center font-semibold pl-[5px]">
              max 4 suitcases
            </p>
          </div>
        </div>
        <div
          id="price"
          className="bg-yellow-500 w-1/2 rounded-r-[5px] text-center text-white -ml-[15px]"
        >
          <p className="text-[12px] inline">from</p> 129 zł
        </div>
        <p className="text-[8px]">Switch to van</p>
      </div>
      <div className="relative w-1/2 h-full lg:h-full ">
        <Image
          className="object-contain"
          src="/mercedes.png"
          fill
          alt="sedan"
        ></Image>
      </div>
    </div>
  );
}
