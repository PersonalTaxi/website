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

export default function Sedancomponent() {
  const { calculateDistance, cars, currencyTXT, setCurrencyTXT, price, setPrice, setCars } =
    useContext(AppContext);

  const router = useRouter();

  const servies: any = useRef();
  const aboutCar: any = useRef();

  const handleChosingCar = () => {
    setCars("van");
    setPrice(FinalPrice);
    router.query.cartype = "van";
    router.push(router, undefined, { scroll: false });
  };

  const handleShowInfoAboutCar = () => {
    servies.current.style.display = "block";
  };

  const handleHideInfoAboutCar = () => {
    servies.current.style.display = "none";
  };

  let distanceAboveMin = 0;

  if (calculateDistance > 20) {
    distanceAboveMin = calculateDistance - 20;
  }

  const pricePLN = 149;
  const priceEUR = 35;

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

  return (
    <div className="w-full h-full flex border-blue-900">
      <div className="relative lg:w-5/12 w-1/2 h-full ">
        <Image className="object-contain" src="/Van.webp" fill alt="sedan"></Image>
      </div>
      <div id="info-wrapper" className="lg:w-7/12 w-1/2">
        <div className="text-[15px] lg:text-[20px] font-[500] flex items-center">
          <p>Mini Van</p>
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
                <p className="text-center pl-[5px]">Free waiting time</p>
              </div>
              <div className="w-full flex  items-center">
                <MdMoneyOffCsred className="text-yellow-500" />
                <p className=" text-center pl-[5px]">No hidden costs</p>
              </div>
              <div className="w-full flex  items-center">
                <RiPriceTag3Fill className="text-yellow-500" />
                <p className=" text-center pl-[5px]">Best price</p>
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
                <p className="text-center font-normal pl-[5px]">Seats for up to 8 people</p>
              </div>
              <div className="w-full flex  items-center">
                <FaSuitcaseRolling className="text-yellow-500" />
                <p className=" text-center pl-[5px]">Up to 7 medium suitcases</p>
              </div>
              <div className="w-full flex  items-center">
                <RiSuitcase3Fill className="text-yellow-500" />
                <p className=" text-center pl-[5px]">Up to 4 big suitcases</p>
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
                    router.query.cartype === "van" && "bg-yellow-500"
                  }`}
                >
                  {router.query.cartype !== "van" && <p>Choose this car</p>}
                  {router.query.cartype === "van" && <p>Choosed car</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
