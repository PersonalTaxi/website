import React, { useContext, useRef, useState } from "react";
import { AppContext } from "@/pages/_app";
import Image from "next/image";
import { FaCar, FaTicketAlt } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { useRouter } from "next/router";

interface Props {
  name: any;
  type: any;
  descriptionEN: any;
  photo: any;
  price: any;
  timeFromKrakow: any;
  totalLengthDistance: any;
  totalTripLenght: any;
  MainTravelTime: any;
  languages: any;
  DetailsIncludesEN: any;
}

export default function Travelcomponent({
  name,
  type,
  descriptionEN,
  photo,
  price,
  timeFromKrakow,
  totalLengthDistance,
  totalTripLenght,
  MainTravelTime,
  languages,
  DetailsIncludesEN,
}: Props) {
  const MoreInfo: any = useRef();
  const [moreInfoIsShowed, setMoreInfoIsShowed] = useState(false);

  const router = useRouter();

  const {
    travelDestination,
    setTravelDestination,
    currencyTXT,
    setCurrencyTXT,
    travelPrice,
    setTravelPrice,
  } = useContext(AppContext);

  const handleMoreDetails = () => {
    if (moreInfoIsShowed === false) {
      setMoreInfoIsShowed(true);
    } else {
      setMoreInfoIsShowed(false);
    }
  };

  const ActualPrice = () => {
    if (currencyTXT === "EUR") {
      setTravelPrice(Math.round(price / 4.4));
      return Math.round(price / 4.4);
    }
    if (currencyTXT === "PLN") {
      setTravelPrice(price);
      return price;
    }
  };

  const FinaPrice = ActualPrice();

  const handleChangingCurrency = () => {
    if (currencyTXT === "EUR") {
      setCurrencyTXT("PLN");
    }
    if (currencyTXT === "PLN") {
      setCurrencyTXT("EUR");
    }
  };

  const handleChosingTravel = (e: any) => {
    setTravelPrice(price);
    const direction = e.target.getAttribute("id");
    setTravelDestination(direction);
    router.push({ pathname: "/travel/ordering", query: { destination: direction } });
  };

  return (
    <div
      id="travel-component-container"
      className="lg:w-[1000px] w-screen mx-auto lg:h-[450px] h-auto flex items-center justify-center py-[20px] lg:py-[0px] border-b-2 lg:border-0"
    >
      <div id="travels-wrapper-components relative" className="flex flex-col w-[90%] h-[80%]">
        <div
          ref={MoreInfo}
          id="more-details-container"
          className={
            moreInfoIsShowed
              ? "absolute  lg:w-[900px] w-screen lg:h-[273px] h-[690px] bg-white z-10 duration-200 overflow-hidden lg:pt-[0px] pt-[300px] border-b"
              : "absolute  lg:w-[900px] h-[0px] bg-white z-10 duration-200 overflow-hidden"
          }
        >
          <div className="p-[20px]">
            <p className="text-[20px] font-semibold">Price includes:</p>
            {DetailsIncludesEN}
            <p className="text-[18px] mt-[8px] font-semibold">
              {" "}
              Main tour time up to: {MainTravelTime}
            </p>
            <p className="text-[18px] my-[2px] font-semibold">
              {" "}
              Approximately total tour time: {totalTripLenght}
            </p>
          </div>
        </div>
        <div
          id="travels-wrapper-content"
          className="lg:w-full lg:h-full w-full h-[500px] flex flex-col lg:flex-row"
        >
          <div
            id="travel-image"
            className="relative mx-auto lg:w-[40%] lg:h-[100%] w-[300px] h-[300px] rounded-[10px] overflow-hidden"
          >
            <Image className="object-cover" src={photo} fill alt=""></Image>
          </div>
          <div id="travel-desc" className="lg:w-[60%] lg:h-[60%]">
            <div className=" border-gray-900 text-[30px] lg:text-right py-[2px] text-center text-[#E1AD58]">
              {name}
              <br></br>
              <div className="flex flex-row-reverse justify-center lg:justify-start">
                <p className="text-[14px] font-bold">{type}</p>
                <div id="languages" className="h-[20px] lg:w-[200px] flex justify-end mx-[4px]">
                  {languages?.includes("PL") && (
                    <Image
                      className="ml-[8px]"
                      src="/poland_circle.png"
                      width={20}
                      height={20}
                      alt="pl"
                    />
                  )}
                  {languages?.includes("EN") && (
                    <Image
                      className="ml-[8px]"
                      src="/england_circle.png"
                      width={20}
                      height={20}
                      alt="pl"
                    />
                  )}
                  {languages?.includes("RU") && (
                    <Image
                      className="ml-[8px]"
                      src="/russian_circle.png"
                      width={20}
                      height={20}
                      alt="pl"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="lg:pl-[40px] py-[8px] flex flex-col items-end">
              <p>{descriptionEN}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[30%] flex justify-between ">
          <div className="w-full h-full flex justify-between flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row">
              <div className="flex">
                <div className="lg:w-[120px] w-1/2 lg:h-[90%] h-[100px] border-r-2 border-yellow-500 flex flex-col justify-evenly my-[5px]">
                  <p className="leading-4">From Kraków</p>
                  <p className="text-[30px] font-bold leading-7">{totalLengthDistance}</p>
                  <p className="leading-4">{timeFromKrakow}</p>
                </div>
                <div className="lg:w-[174px] w-1/2 lg:h-[90%] h-[100px]   border-r-2 flex flex-col justify-evenly border-yellow-500 my-[5px] px-[10px]">
                  <p className="leading-4">Tour time</p>
                  <p className="text-[30px] font-bold leading-7">{MainTravelTime}</p>
                  <p className="leading-4">{totalTripLenght} with transfer</p>
                </div>
              </div>
              <div className="lg:w-[390px] w-full lg:h-[90%] h-[70px]  flex flex-col justify-evenly border-yellow-500 my-[5px] px-[10px]">
                <div className="flex">
                  <FaCar />
                  <p className="text-[12px] ml-[5px]">
                    We&apos;ll drive you to the place then wait for you.
                  </p>
                </div>
                <div className="flex">
                  <FaTicketAlt />
                  <p className="text-[12px] ml-[5px]">You must have already purchased a ticket.</p>
                </div>
                <div className="flex">
                  <IoMdPin />
                  <p className="text-[12px] ml-[5px]">
                    The starting point of travel must be in Cracow commune.
                  </p>
                </div>
              </div>
            </div>
            <div id="button" className="lg:w-[180px] h-full flex justify-evenly flex-col">
              <div
                onClick={handleMoreDetails}
                className="border-gray-900 bg-white rounded-[10px] px-[10px] py-[2px] text-center text-[20px] cursor-pointer text-black border-2 mb-[2px] z-10 hover:text-white hover:bg-[#E1AD58] duration-200 hover:border-[#E1AD58]"
              >
                {moreInfoIsShowed === true ? <p>Less details</p> : <p className="">More details</p>}
              </div>
              <div
                id={name}
                className=" border-blue-600 bg-[#E1AD58] text-white rounded-[10px] py-[2px] text-center text-[20px] cursor-pointer duration-200   hover:bg-blue-400"
                onClick={handleChosingTravel}
              >
                Order for {FinaPrice} {currencyTXT}
              </div>
              {currencyTXT === "EUR" && (
                <p
                  className="text-[12px] italic bg-white text-black w-full text-center cursor-pointer"
                  onClick={handleChangingCurrency}
                >
                  Change to PLN
                </p>
              )}
              {currencyTXT === "PLN" && (
                <p
                  className="text-[12px] italic bg-white text-black w-full text-center cursor-pointer"
                  onClick={handleChangingCurrency}
                >
                  Change to EUR
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
