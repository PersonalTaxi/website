import React from "react";
import { BsCheck2Square } from "react-icons/bs";

export default function Succes() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="text-[20px] mb-[20px]">Payment successful </div>
      <div role="status" className="w-[140px] h-[140px]">
        <BsCheck2Square className="w-full h-full text-green-600" />
      </div>
    </div>
  );
}
