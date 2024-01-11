import React, { useContext, useRef, useState } from "react";
import { AppContext } from "@/pages/_app";
import Image from "next/image";
import { FaCar, FaTicketAlt } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { useRouter } from "next/router";

interface Props {
  id: any;
  name: any;
  type: any;
  description: any;
  photo: any;
  sedan_price_PL: any;
  premium_sedan_price_PL: any;
  van_price_PL: any;
  sedan_price_EUR: any;
  premium_sedan_price_EUR: any;
  van_price_EUR: any;
  timeFromKrakow: any;
  totalLengthDistance: any;
  totalTripLenght: any;
  MainTravelTime: any;
  languages: any;
  DetailsIncludes: any;
  //travels
  Travel_component_from_Cracow: any;
  Travel_component_tour_time_with_transfer: any;
  Travel_component_tour_time: any;
  Travel_component_info_about_drive: any;
  Travel_component_info_about_tickets: any;
  Travel_component_info_about_starting_point: any;

  Travel_component_button_order: any;
  Travel_component_button_more_details: any;
  Travel_component_button_less_details: any;

  Travel_component_change_currency_to_EUR: any;
  Travel_component_change_currency_to_PL: any;
  Travel_component_more_details_price_includes: any;
  Travel_component_more_details_main_tour_time: any;
  Travel_component_more_details_total_tour_time: any;
}

export default function Travelcomponent({
  id,
  name,
  type,
  description,
  photo,
  sedan_price_PL,
  premium_sedan_price_PL,
  van_price_PL,
  sedan_price_EUR,
  premium_sedan_price_EUR,
  van_price_EUR,
  timeFromKrakow,
  totalLengthDistance,
  totalTripLenght,
  MainTravelTime,
  languages,
  DetailsIncludes,
  Travel_component_from_Cracow,
  Travel_component_tour_time_with_transfer,
  Travel_component_tour_time,
  Travel_component_info_about_drive,
  Travel_component_info_about_tickets,
  Travel_component_info_about_starting_point,
  Travel_component_button_order,
  Travel_component_button_more_details,
  Travel_component_button_less_details,
  Travel_component_change_currency_to_EUR,
  Travel_component_change_currency_to_PL,
  Travel_component_more_details_price_includes,
  Travel_component_more_details_main_tour_time,
  Travel_component_more_details_total_tour_time,
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
    finalTravelPrice,
    setFinalTravelPrice,
    travelId,
    setTravelId,
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
      return sedan_price_EUR;
    }
    if (currencyTXT === "PLN") {
      return sedan_price_PL;
    }
  };

  let FinaPrice = ActualPrice();

  const handleChangingCurrency = () => {
    if (currencyTXT === "EUR") {
      setFinalTravelPrice(sedan_price_PL);
      setCurrencyTXT("PLN");
    }
    if (currencyTXT === "PLN") {
      setFinalTravelPrice(sedan_price_EUR);
      setCurrencyTXT("EUR");
    }
  };

  const handleChosingTravel = (e: any) => {
    if (currencyTXT === "EUR") {
      setTravelId(e.target.id);
      setTravelPrice(sedan_price_EUR);
      setFinalTravelPrice(sedan_price_EUR);
    }
    if (currencyTXT === "PLN") {
      setTravelId(e.target.id);
      setTravelPrice(sedan_price_PL);
      setFinalTravelPrice(sedan_price_PL);
    }
    const direction = e.target.getAttribute("data-name");
    setTravelDestination(direction);
    if (router.asPath.includes("/pl")) {
      router.push({ pathname: "/pl/travel/ordering", query: { destination: direction, id: id } });
    } else {
      router.push({ pathname: "/travel/ordering", query: { destination: direction, id: id } });
    }
  };

  return (
    <div
      id="travel-component-container"
      className="lg:w-[1100px] w-screen mx-auto lg:h-[450px] h-auto flex items-center justify-center py-[20px] lg:py-[0px] border-b-2 lg:border-0"
    >
      <div id="travels-wrapper-components relative" className="flex flex-col w-[90%] h-[80%]">
        <div
          ref={MoreInfo}
          id="more-details-container"
          className={
            moreInfoIsShowed
              ? "absolute lg:w-[1000px] w-screen lg:h-[273px] h-[690px] bg-white z-10 duration-200 overflow-hidden lg:pt-[0px] pt-[300px] border-b"
              : "absolute  lg:w-[900px] h-[0px] bg-white z-10 duration-200 overflow-hidden"
          }
        >
          <div className="p-[20px]">
            <p className="text-[20px] font-semibold">
              {Travel_component_more_details_price_includes}
            </p>
            {DetailsIncludes}
            <p className="text-[18px] mt-[8px] font-semibold">
              {" "}
              {Travel_component_more_details_main_tour_time} {MainTravelTime}
            </p>
            <p className="text-[18px] my-[2px] font-semibold">
              {" "}
              {Travel_component_more_details_total_tour_time} {totalTripLenght}
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
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[30%] flex justify-between ">
          <div className="w-full h-full flex justify-between flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row">
              <div className="flex">
                <div className="lg:w-[120px] w-1/2 lg:h-[90%] h-[100px] border-r-2 border-yellow-500 flex flex-col justify-evenly my-[5px]">
                  <p className="leading-4">{Travel_component_from_Cracow}</p>
                  <p className="text-[30px] font-bold leading-7">{totalLengthDistance}</p>
                  <p className="leading-4">{timeFromKrakow}</p>
                </div>
                <div className="lg:w-[174px] w-1/2 lg:h-[90%] h-[100px]   border-r-2 flex flex-col justify-evenly border-yellow-500 my-[5px] px-[10px]">
                  <p className="leading-4">{Travel_component_tour_time}</p>
                  <p className="text-[30px] font-bold leading-7">{MainTravelTime}</p>
                  <p className="leading-4">
                    {totalTripLenght} {Travel_component_tour_time_with_transfer}
                  </p>
                </div>
              </div>
              <div className="lg:w-[390px] w-full lg:h-[90%] h-[70px]  flex flex-col justify-evenly border-yellow-500 my-[5px] px-[10px]">
                <div className="flex">
                  <FaCar />
                  <p className="text-[12px] ml-[5px]">{Travel_component_info_about_drive}</p>
                </div>
                <div className="flex">
                  <FaTicketAlt />
                  <p className="text-[12px] ml-[5px]">{Travel_component_info_about_tickets}</p>
                </div>
                <div className="flex">
                  <IoMdPin />
                  <p className="text-[12px] ml-[5px]">
                    {Travel_component_info_about_starting_point}
                  </p>
                </div>
              </div>
            </div>
            <div id="button" className="lg:w-[220px] h-full flex justify-evenly flex-col">
              <div
                onClick={handleMoreDetails}
                className="border-gray-900 bg-white rounded-[10px] px-[10px] py-[2px] text-center text-[20px] cursor-pointer text-black border-2 mb-[2px] z-10 hover:text-white hover:bg-[#E1AD58] duration-200 hover:border-[#E1AD58]"
              >
                {moreInfoIsShowed === true ? (
                  <p>{Travel_component_button_less_details}</p>
                ) : (
                  <p className="">{Travel_component_button_more_details}</p>
                )}
              </div>
              <div
                id={id}
                data-name={name}
                className=" border-blue-600 bg-[#E1AD58] text-white rounded-[10px] py-[2px] text-center text-[20px] cursor-pointer duration-200   hover:bg-blue-400"
                onClick={handleChosingTravel}
              >
                {Travel_component_button_order} {FinaPrice} {currencyTXT}
              </div>
              {currencyTXT === "EUR" && (
                <p
                  className="text-[12px] italic bg-white text-black w-full text-center cursor-pointer"
                  onClick={handleChangingCurrency}
                >
                  {Travel_component_change_currency_to_PL}
                </p>
              )}
              {currencyTXT === "PLN" && (
                <p
                  className="text-[12px] italic bg-white text-black w-full text-center cursor-pointer"
                  onClick={handleChangingCurrency}
                >
                  {Travel_component_change_currency_to_EUR}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
