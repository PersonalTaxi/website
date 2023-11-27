import React from "react";
import { BsCashCoin } from "react-icons/bs";

export default function PricePL() {
  return (
    <div className="lg:w-1/3 lg:h-1/2 flex lg:flex-col flex-row justify-center items-center lg:px-[40px] px-[5px]">
      <div className="lg:w-full w-[100px] flex flex-col justify-center items-center h-[80px]">
        <BsCashCoin className="w-full h-[60%] text-yellow-400 mr-[10px] lg:mx-[0px]" />
        <p className="font-bold text-[16px] hidden lg:block">Najlepsze ceny</p>
      </div>
      <p className="w-[100%] lg:h-[300px]">
        Mamy jedne z najlepszych cen za transfery na rynku. Bez względu na to
        poziom naszych usług pozostaje bardzo wysoki.
        <br></br>
      </p>
    </div>
  );
}
