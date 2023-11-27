import React from "react";
import { RiServiceLine } from "react-icons/ri";

export default function ServicePL() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px] flex flex-col justify-center items-center h-[80px]">
        <RiServiceLine className="w-full h-[60%] text-yellow-400 lg:mx-[0px]" />
        <p className="font-bold text-[16px] hidden lg:block">
          Profesjonalna obsługa
        </p>
      </div>
      <p className="w-[100%] lg:h-[300px]">
        Wykonujemy dobrze swoją pracę. W przypadku jakichkolwiek problemów
        zrobimy wszystko aby zrealizować zlecenie. Skontaktujemy się z Tobą,
        znajdziemy Cię w odpowiednim miejscu itd.
      </p>
    </div>
  );
}
