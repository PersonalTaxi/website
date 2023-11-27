import React from "react";
import { MdOutlineMoreTime } from "react-icons/md";

export default function WatingtimehotelPL() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px] flex flex-col justify-center items-center h-[80px]">
        <MdOutlineMoreTime className="w-full h-[60%] text-yellow-400 mr-[10px] lg:mx-[0px]" />
        <p className="font-bold text-[16px] hidden lg:block">
          Czes oczekiwania poza lotniskiem
        </p>
      </div>
      <p className="w-[100%] lg:h-[300px]">
        Jeśli mamy odebrać Cię z np. hotelu. Będziemy czekać na Ciebie do 15
        minut. W razie problemów będziemy się z Tobą kontaktować.
      </p>
    </div>
  );
}
