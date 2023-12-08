import React, { useContext, useRef, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import TomTomTravels from "./tomtomTravels";
import { AppContext } from "../../pages/_app";

interface Props {
  travelDate: any;
  setTravelDate: React.Dispatch<React.SetStateAction<any>>;
  travelTime: any;
  setTravelTime: React.Dispatch<React.SetStateAction<any>>;
  travelLocalizationFrom: any;
  setTravelLocalizationFrom: React.Dispatch<React.SetStateAction<any>>;
  travelMassage: any;
  setTravelMassage: React.Dispatch<React.SetStateAction<any>>;
  travelLocalizationFromLatLang: any;
  setTravelLocalizationFromLatLang: React.Dispatch<React.SetStateAction<any>>;
  persons: any;
  setPersons: React.Dispatch<React.SetStateAction<any>>;
}
export default function Orderingtravelspecifics({
  travelDate,
  setTravelDate,
  travelTime,
  setTravelTime,
  travelLocalizationFrom,
  setTravelLocalizationFrom,
  travelMassage,
  setTravelMassage,
  travelLocalizationFromLatLang,
  setTravelLocalizationFromLatLang,
  persons,
  setPersons,
}: Props) {
  const { travelPrice, setTravelPrice, currencyTXT, finalTravelPrice, setFinalTravelPrice } =
    useContext(AppContext);

  const [localizationIsUnknow, setLocalizationIsUnknow] = useState(false);
  const infoAboutCars: any = useRef();

  const handleDontKnowingAddress = () => {
    setLocalizationIsUnknow(!localizationIsUnknow);
    setTravelLocalizationFrom("");
  };

  const handleIncrisingPersons = () => {
    if (persons > 0 && persons < 8) {
      setPersons(persons + 1);
    }

    if (persons > 3) {
      setFinalTravelPrice(Math.round(travelPrice * 1.3333));
    } else {
      setFinalTravelPrice(travelPrice);
    }
  };

  const handleDecrisingPersons = () => {
    if (persons > 1 && persons <= 8) {
      setPersons(persons - 1);
    }
    if (persons <= 5) {
      setFinalTravelPrice(travelPrice);
    } else {
      setFinalTravelPrice(Math.round(travelPrice * 1.3333));
    }
  };

  const handleDate = (e: any) => {
    setTravelDate(e.target.value);
  };

  const handleTime = (e: any) => {
    setTravelTime(e.target.value);
  };
  const handlePuttingMassege = (e: any) => {
    setTravelMassage(e.target.value);
  };

  const showInfoAboutCars = () => {
    infoAboutCars.current.style.display = "block";
  };

  const hideInfoAboutCars = () => {
    infoAboutCars.current.style.display = "none";
  };

  return (
    <div className="lg:w-1/2 w-screen">
      <div id="conditions-container" className="m-[30px]">
        <div id="data-time-wrapper" className="flex flex-col">
          <label className="text-[14px] mb-[3px]">
            <b>When you have to be in the place?</b>
            <br></br> (or when does your tour start?)
          </label>
          <div className="flex justify-between">
            <input
              type="date"
              value={travelDate}
              onChange={handleDate}
              className="border border-gray-900/[0.4] w-[55%] h-[45px] text-[15px] pl-[5px] outline-none z-10 rounded-[10px] bg-transparent"
            ></input>
            <input
              type="time"
              value={travelTime}
              onChange={handleTime}
              className="border border-gray-900/[0.4] w-[37%] h-[45px] text-[15px] pl-[5px] outline-none z-10 rounded-[10px] bg-transparent"
            ></input>
          </div>
        </div>
        <div id="localization-wrapper" className="mt-[30px] w-full">
          <div className="flex flex-col items-start w-full">
            <label className="text-[14px] mb-[3px]">
              <b>From where you want to us pick you up?</b>
            </label>
            {localizationIsUnknow === false ? (
              <div id="Localization-search" className="flex justify-start items-center w-full">
                <TomTomTravels
                  localizationIsUnknow={localizationIsUnknow}
                  setLocalizationIsUnknow={setLocalizationIsUnknow}
                  travelLocalizationFrom={travelLocalizationFrom}
                  setTravelLocalizationFrom={setTravelLocalizationFrom}
                />
                <div className="mx-[5px] w-[25px] h-full cursor-pointer">
                  <AiFillInfoCircle className="w-full h-full text-yellow-300" />
                </div>
              </div>
            ) : (
              <div className="italic bg-yellow-300">
                You will send us localization to office@personaltaxi.pl as soon as possible
              </div>
            )}
            <div id="input-continer" className="flex items-start justify-normal mt-[4px]">
              <input
                type="checkbox"
                onChange={handleDontKnowingAddress}
                className="cursor-pointer"
              ></input>
              <p className="leading-[10px] text-[10px] pl-[5px]">
                Check this box if you don&lsquo;t know localization yet. You also declare that it
                will be in Cracow commune and you will send this localization via mail or phone as
                soon as I know it.
              </p>
            </div>
            <div
              id="how-many-peaple-container"
              className="w-full flex mt-[30px] items-center justify-end flex-row-reverse relative"
            >
              <div
                ref={infoAboutCars}
                className="hidden p-[12px] absolute lg:w-[350px] w-[270px] h-auto left-[30px] bg-white shadow-[0px_0px_15px_2px_rgba(0,0,0,0.3)] rounded-[10px] leading-5"
              >
                <p>
                  You can choose up to 8 people. Number of people determines which car will be
                  chosen for this trip. For max 4 people you will go by <b>Eco Sedan</b>. By if you
                  choose number of people between 5 and 8 you will go by <b>Mini Van</b> and price
                  will be little higher. If you want to go with more than 8 people - please make an
                  next order.
                </p>
              </div>
              <label className="text-[14px] mb-[3px] w-[150px] leading-4 pl-[10px]">
                <b>How many people are going?</b>
              </label>

              <div
                id="person-and-submit-wraper"
                className="border-gray-900/[0.4] rounded-[10px] h-[50px] w-6/12 xl:w-[150px] border lg:border-gray-900/[0.4] flex justify-center items-center "
              >
                <div className="w-[25px] h-[25px] rounded-[50%]" onClick={handleDecrisingPersons}>
                  <AiOutlineMinus className="w-full h-full cursor-pointer" />
                </div>
                <div className="w-[30px] h-[30px]">
                  <BsFillPersonFill className="w-full h-full text-yellow-400/[0.4]" />
                </div>
                <div className="w-[30px] h-[30px] text-[22px] leading-7 text-center duration-200">
                  {persons}
                </div>
                <div className=" w-[25px] h-[25px] rounded-[50%]" onClick={handleIncrisingPersons}>
                  <AiOutlinePlus className="w-full h-full cursor-pointer" />
                </div>
              </div>
              <AiFillInfoCircle
                className="w-[25px] h-[25px] mr-[10px] cursor-pointer text-yellow-300"
                onMouseEnter={showInfoAboutCars}
                onMouseLeave={hideInfoAboutCars}
              />
            </div>
            <div id="info-fro-driver-container" className="w-full h-auto mt-[30px]">
              <label className="text-[14px] mb-[3px]">
                <b>Your massage:</b>
              </label>
              <textarea
                value={travelMassage}
                onChange={handlePuttingMassege}
                className="border-gray-900/[0.4] border h-[200px] w-full leading-5 p-[3px] rounded-[10px]"
                placeholder="You can add here some important information about your needs, prefences or uncommon items which you want to take up. "
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
