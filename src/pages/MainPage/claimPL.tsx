import React from "react";

export default function ClaimPL() {
  return (
    <div className="w-screen lg:w-[1100px] mx-auto h-[25vh] lg:h-[220px] border-red-900 flex flex-col px-[20px] z-10 justify-start font-[500]">
      <div className="text-white leading-4 lg:leading-[50px] text-[16px] lg:text-[30px]">
        <b className="text-[30px] lg:text-[40px]">Bezpieczny</b> transport z |
        na
      </div>
      <div className="text-[38px] lg:text-[56px] leading-10 font-bold text-yellow-500">
        Lotnisko Kraków
      </div>
      <div className="text-white leading-6 lg:leading-[50px] text-[16px] lg:text-[30px]">
        z | do <b className="text-[28px] lg:text-[40px]">dowolnego miejsca</b>
      </div>
    </div>
  );
}
