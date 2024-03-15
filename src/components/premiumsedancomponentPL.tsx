import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import { BsFillPersonFill, BsFillBagFill, BsClockHistory } from "react-icons/bs";
import { AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import { MdMoneyOffCsred } from "react-icons/md";
import { BiTimer } from "react-icons/bi";
import { FaSuitcaseRolling } from "react-icons/fa";
import { RiSuitcase3Fill, RiPriceTag3Fill } from "react-icons/ri";
import { AppContext } from "@/pages/_app";
import { useRouter } from "next/router";

export default function Premiumsedancomponent() {
  const { calculateDistance, cars, currencyTXT, setCurrencyTXT, price, setPrice } =
    useContext(AppContext);

  const router = useRouter();

  const servies: any = useRef();
  const aboutCar: any = useRef();

  const handleChosingCar = () => {
    setPrice(FinalPrice);
    router.query.cartype = "premium";
    router.push(router, undefined, { scroll: false });
  };

  const handleShowInfoAboutCar = () => {
    servies.current.style.display = "block";
    // aboutCar.current.style.visibility = "hidden";
  };

  const handleHideInfoAboutCar = () => {
    servies.current.style.display = "none";
    // aboutCar.current.style.visibility = "visible";
  };

  let distanceAboveMin = 0;

  if (calculateDistance > 20) {
    distanceAboveMin = calculateDistance - 20;
  }

  const pricePLN = 169;
  const priceEUR = 40;

  let CountPrice = calculateDistance;
  let FinalPrice: any;
  if (currencyTXT === "EUR") {
    FinalPrice = Math.round(priceEUR + distanceAboveMin * 1.62);
    // setFinalPrice(FinalPrice);
  } else {
    FinalPrice = pricePLN + distanceAboveMin * 7;
    // setFinalPrice(FinalPrice);
  }

  const handleChangeToPLN = () => {
    setCurrencyTXT("PLN");
  };
  const handleChangeToEUR = () => {
    setCurrencyTXT("EUR");
  };

  const handleCombiCheckBox = () => {
    if (router.query.combi === "premiumcombi") {
      router.query.combi = undefined;
      router.push(router, undefined, { scroll: false });
    } else {
      router.query.combi = "premiumcombi";
      router.push(router, undefined, { scroll: false });
    }
  };

  return (
    <div className="w-full h-full flex border-blue-900">
      <div className="relative flex flex-col justify-end lg:w-5/12 w-1/2 h-full">
        <div className="relative w-full h-full">
          <Image className="object-contain" src="/mercedes.png" fill alt="sedan"></Image>
        </div>
        <div className="w-[92vw] lg:w-full h-[30px] mx-auto flex items-center">
          <input
            id="combi-type"
            type="checkbox"
            checked={router.query.combi === "premiumcombi" ? true : false}
            onChange={handleCombiCheckBox}
            className="w-[17px] h-[17px] accent-yellow-500 bg-white cursor-pointer"
          ></input>
          <label id="combi-type" className="ml-[4px] font-semibold text-[10px]">
            Potrzebuję wersji combi
          </label>
        </div>
      </div>
      <div id="info-wrapper" className="lg:w-7/12 w-1/2">
        <div className="text-[15px] lg:text-[20px] font-[500] flex items-center">
          <p>Premium Sedan</p>
          <AiFillInfoCircle
            className="lg:hidden ml-[5px]"
            onMouseEnter={handleShowInfoAboutCar}
            onMouseLeave={handleHideInfoAboutCar}
          />
        </div>
        <div id="info-container" className="flex w-full">
          <div
            ref={servies}
            id="descriptions-wrapper"
            className="absolute lg:sticky shadow-md lg:shadow-[0px] lg:w-1/2 w-[150px] lg:flex flex-col justify-between py-[10px] pl-[5px] lg:h-[150px] hidden z-10 bg-white"
          >
            <AiOutlineClose className="absolute right-0 top-0 lg:hidden" />
            <div id="description-about-service" className="w-[300px] text-[12px] lg:text-[16px]">
              <div className="w-full flex items-center">
                <BsClockHistory className="text-yellow-500" />
                <p className="text-center pl-[5px]">Bezpłatny czas oczekiwania</p>
              </div>
              <div className="w-full flex  items-center">
                <MdMoneyOffCsred className="text-yellow-500" />
                <p className=" text-center pl-[5px]">Brak ukrytych kosztów</p>
              </div>
              <div className="w-full flex  items-center">
                <RiPriceTag3Fill className="text-yellow-500" />
                <p className=" text-center pl-[5px]">Najlepsza cena</p>
              </div>
            </div>
            <div
              id="price"
              className="bg-yellow-500 w-1/2 rounded-r-[5px] text-center text-white -ml-[15px]"
            ></div>
          </div>
          <div
            id="descriptions-wrapper"
            className="lg:w-1/2 w-full flex flex-col justify-between py-[10px] pl-[5px] lg:h-[150px]"
          >
            <div
              ref={aboutCar}
              id="description-about-car"
              className="w-[300px] text-[12px] lg:text-[16px]"
            >
              <div className="w-full flex items-center">
                <BsFillPersonFill className="text-yellow-500" />
                <p className="text-center font-normal pl-[5px]">transfer do 4 osób</p>
              </div>
              <div className="w-full flex  items-center">
                <FaSuitcaseRolling className="text-yellow-500" />
                <p className=" text-center pl-[5px]">do 4 średnich walizek</p>
              </div>
              <div className="w-full flex  items-center">
                <RiSuitcase3Fill className="text-yellow-500" />
                <p className=" text-center pl-[5px]">do 4 dużych walizek</p>
              </div>
            </div>
            <div
              id="price"
              className="bg-yellow-500 rounded-r-[5px] text-center text-white -ml-[15px] w-full"
            >
              <p className="text-[12px] lg:text-[16px] block">
                final price {FinalPrice} {currencyTXT}
              </p>
              {currencyTXT === "EUR" && (
                <p
                  className="text-[12px] bg-white text-black cursor-pointer"
                  onClick={handleChangeToPLN}
                >
                  Switch to PLN
                </p>
              )}
              {currencyTXT === "PLN" && (
                <p
                  className="text-[12px] bg-white text-black cursor-pointer"
                  onClick={handleChangeToEUR}
                >
                  Switch to EUR
                </p>
              )}
              <div className="bg-white w-full flex justify-end">
                <div
                  // ref={eco}
                  onClick={handleChosingCar}
                  className={`cursor-pointer bg-blue-400 w-[200px] text-white rounded-[10px] text-center py-[3px] mt-[5px] ${
                    router.query.cartype === "premium" && "bg-yellow-500"
                  }`}
                >
                  {router.query.cartype !== "premium" && <p>Wybierz ten model</p>}
                  {router.query.cartype === "premium" && <p>Wybrany model</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
