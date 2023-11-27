import React from "react";
import { BsCalendar3Week } from "react-icons/bs";

export default function Time() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px] flex flex-col justify-center items-center h-[80px]">
        <BsCalendar3Week className="w-full h-[60%] text-yellow-400 mr-[10px] lg:mx-[0px]" />
        <p className="font-bold text-[16px] hidden lg:block">Dostepność 24/7</p>
      </div>
      <p className="w-[100%] lg:h-[300px]">
        Nasze usługi są realizowane 24/7. Wszystko czego potrzebujemy to abyś
        złożył zamówienie z terminem nie wcześniej niż 16 h od teraz. Złóż je
        zatem najszybciej jak to możliwe.
      </p>
    </div>
  );
}
