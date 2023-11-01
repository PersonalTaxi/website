import React from "react";

export default function Claim() {
  return (
    <div className="w-screen lg:w-[1100px] mx-auto h-[25vh] lg:h-[220px] border-red-900 flex flex-col px-[20px] z-10 justify-start">
      <div className="text-white leading-4 text-[20px]">
        <b className="text-[30px]">Safety</b> transport from | to
      </div>
      <div className="text-[36px] leading-10 font-bold text-yellow-500">
        Krakow Airport
      </div>
      <div className="text-white leading-6 text-[20px]">
        from | to your <b className="text-[32px]">destianation</b>
      </div>
    </div>
  );
}
