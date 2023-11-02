import React from "react";
import Image from "next/image";
import { GiPathDistance } from "react-icons/gi";
import { MdOutlinePayments } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";

export default function Orderingprocess() {
  return (
    <div className="bg-white w-screen lg:h-[600px] h-[900px] -mt-[50px] pt-[100px]">
      <div className="lg:w-[1080px] mx-auto h-auto lg:flex flex-col justify-center relative">
        <p className="text-left w-full lg:text-[40px] text-[30px] my-[20px] px-[15px] lg:px-auto">
          Ordering process
        </p>
        <div className="lg:w-full lg:h-[100px] lg:text-[20px] text-[16px] font-normal px-[15px] lg:px-auto">
          <p>You can easliy make an order by our website in 3 simple steps</p>
        </div>
        <div className="absolute w-[50px] h-[50px] rounded-[10px] bg-yellow-500/[0.3] top-[40px] -left-[20px] rotate-45"></div>
      </div>
      <div
        id="aboutus-wrapper"
        className="lg:w-[1080px] mx-auto flex px-[15px]"
      >
        <div className=" lg:w-full lg:h-5/6 h-full relative rounded-[5px] overflow-hidden flex flex-wrap">
          <div className="lg:w-1/3 w-full h-1/2 flex justify-center items-center lg:text-[20px] text-[16px] my-[10px]">
            <div className="w-[200px] h-1/2 flex flex-col justify-center items-center">
              <GiPathDistance className="w-[100px] h-4/6 text-yellow-500" />
              <p>
                1. Choose localization, number of passengers and pick up date.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full h-1/2 flex justify-center items-center lg:text-[20px] text-[16px] my-[10px]">
            <div className=" w-[200px] h-1/2 flex flex-col justify-center items-center">
              <FaWpforms className="w-[100px] h-4/6 text-yellow-500" />
              <p>
                2. Fill form with your preferences, needs and your personal
                details.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full h-1/2 flex justify-center items-center lg:text-[20px] text-[16px] my-[10px]">
            <div className=" w-[200px] h-1/2 flex flex-col justify-center items-center">
              <MdOutlinePayments className="w-[100px] h-4/6 text-yellow-500" />
              <p>
                3. Pay for you road by online payment system and wait for us at
                the appointed time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
