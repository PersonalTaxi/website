import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Travels from "../../data/travels.json";
import Languages from "../../data/languages.json";
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
  travelMunicipality: any;
  setTravelMunicipality: React.Dispatch<React.SetStateAction<any>>;
}
export default function OrderingTravelParams({
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
  const {
    travelId,
    setTravelId,
    travelPrice,
    setTravelPrice,
    currencyTXT,
    finalTravelPrice,
    setFinalTravelPrice,
    latLangFrom,
    setlatLangFrom,
    latLangTo,
    setlatLangTo,
    queryFrom,
    setQueryFrom,
    queryTo,
    setQueryTo,
    lookingForLocalization,
    setLookingForLocalization,
    foundedLocalization,
    setFoundedLocalization,
    foundedLocalizationLatLang,
    setFoundedLocalizationLatLang,
    setMunicipalityFrom,
    travelMunicipality,
    setTravelMunicipality,
  } = useContext(AppContext);

  const router = useRouter();

  const { id } = router.query;

  const getDataAboutTravel = () => {
    let data: any = "";
    Travels.PL.map((i) => {
      if (data === "" && i.id === id) {
        data = {
          sedan_PL: i.sedan_price_PL,
          premium_PL: i.premium_sedan_price_PL,
          van_PL: i.van_price_PL,
          sedan_EUR: i.sedan_price_EUR,
          premium_EUR: i.premium_sedan_price_EUR,
          van_EUR: i.van_price_EUR,
        };
      }
    });

    return data;
  };

  const setActualLocalization = () => {
    if (router.asPath.includes("/pl")) {
      return Languages.PL;
    } else {
      return Languages.EN;
    }
  };

  const [localizationIsUnknow, setLocalizationIsUnknow] = useState(false);
  const [actualLanguage, setActualLanguage] = useState(setActualLocalization());
  const [detailsAboutTravel, setDetailsAboutTravel] = useState(getDataAboutTravel());
  const infoAboutCars: any = useRef();
  const infoAboutLocalization: any = useRef();

  const handleDontKnowingAddress = () => {
    setLocalizationIsUnknow(!localizationIsUnknow);
    if (localizationIsUnknow === true) {
      setTravelLocalizationFrom("");
    } else {
      setTravelLocalizationFrom("idk");
    }
  };

  //checking if number of people calculating pric corectly

  const checkPriceAndPersonsOnLoad = () => {
    if (persons > 3) {
      if (currencyTXT === "EUR") {
        setFinalTravelPrice(detailsAboutTravel.van_EUR);
      }
      if (currencyTXT === "PLN") {
        setFinalTravelPrice(detailsAboutTravel.van_PL);
      }
    }

    if (persons <= 4) {
      if (currencyTXT === "EUR") {
        setFinalTravelPrice(detailsAboutTravel.sedan_EUR);
      }
      if (currencyTXT === "PLN") {
        setFinalTravelPrice(detailsAboutTravel.sedan_PL);
      }
    }
  };

  checkPriceAndPersonsOnLoad();

  const handleIncrisingPersons = () => {
    if (persons > 0 && persons < 8) {
      setPersons(persons + 1);
    }
  };

  const handleDecrisingPersons = () => {
    if (persons > 1 && persons <= 8) {
      setPersons(persons - 1);
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

  const showInfoAboutLocalization = () => {
    infoAboutLocalization.current.style.display = "block";
  };

  const hideInfoAboutLocalization = () => {
    infoAboutLocalization.current.style.display = "none";
  };

  const FindMe = () => {
    setLookingForLocalization(true);

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    console.log("doopa");

    const success = async (pos: any) => {
      const crd = pos.coords;

      console.log("Your current position is:");
      let Localization = await fetch(
        `https://api.tomtom.com/search/2/search/${crd.latitude},${crd.longitude}.json?key=cjmuWSfVTrJfOGj7AcXvMLU8R8i1Q9cF&countrySet=PL,DE&limit=10&language=en-US`,
      );
      const data = await Localization.json();
      let finalAdress = "";
      data?.results.map((i: any) => {
        if (i.type === "Point Address" && finalAdress === "") {
          finalAdress = i.address.freeformAddress;
          setTravelMunicipality(i.address.municipality);
        }
      });
      setFoundedLocalization(finalAdress);
      setFoundedLocalizationLatLang([crd.longitude, crd.latitude]);
      console.log(finalAdress);
    };

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      alert(
        "You did not give permission to use your localization. Please change your browser settings, or choose localization from search filed",
      );
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return (
    <div className="lg:w-1/2 w-screen">
      <div id="conditions-container" className="m-[30px]">
        <div id="data-time-wrapper" className="flex flex-col">
          <label className="text-[14px] mb-[3px]">
            <b className="text-[16px]">{actualLanguage[0].Travel_order_datetime_desc_top}</b>
            <br></br> {actualLanguage[0].Travel_order_datetime_desc_bottom}
          </label>
          <div className="flex justify-between">
            <div className="w-[55%] h-[45px] relative">
              <input
                type="date"
                value={travelDate}
                onChange={handleDate}
                className="border border-gray-900/[0.4] w-full h-[45px] text-[15px] pl-[5px] outline-none z-10 rounded-[10px] text-red-900"
              ></input>
              <FaRegCalendarAlt className="absolute top-0 right-2 h-[45px] text-yellow-400 lg:hidden" />
            </div>
            <div className="w-[37%] h-[45px] relative">
              <input
                type="time"
                value={travelTime}
                onChange={handleTime}
                className="border border-gray-900/[0.4] w-full h-[45px] text-[15px] pl-[5px] outline-none z-10 rounded-[10px] bg-transparent"
              ></input>
              <MdOutlineAccessTimeFilled className="absolute top-0 right-2 h-[45px] text-yellow-400 lg:hidden" />
            </div>
          </div>
        </div>
        <div id="localization-wrapper" className="mt-[30px] w-full">
          <div
            ref={infoAboutLocalization}
            className="absolute hidden lg:w-[360px] w-[280px] h-auto shadow-[0px_0px_15px_2px_rgba(0,0,0,0.3)] bg-white z-10 rounded-[10px] p-[12px]"
          >
            <p className="leading-5">
              {actualLanguage[0].Travel_component_info_about_starting_point}
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="text-[14px] mb-[3px]">
              <b>{actualLanguage[0].Travel_order_localization}</b>
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
                  <AiFillInfoCircle
                    className="w-full h-full text-yellow-300"
                    onMouseEnter={showInfoAboutLocalization}
                    onMouseLeave={hideInfoAboutLocalization}
                  />
                </div>
              </div>
            ) : (
              <div className="italic bg-yellow-300">
                {actualLanguage[0].Travel_order_idk_localization}
              </div>
            )}
            <div
              onClick={FindMe}
              className="border border-yellow-500 bg-yellow-500 px-[10px] text-white rounded-[5px] duration-200 mt-[2px] cursor-pointer hover:bg-white hover:text-black"
            >
              {actualLanguage[0].Travel_order_find_me}
            </div>
            <div id="input-continer" className="flex items-start justify-normal mt-[4px]">
              <input
                type="checkbox"
                onChange={handleDontKnowingAddress}
                className="cursor-pointer"
              ></input>
              <p className="leading-[10px] text-[10px] pl-[5px]">
                {actualLanguage[0].Travel_order_checkbox_idk_localization_desc}
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
                <p>{actualLanguage[0].Travel_order_people_info}</p>
              </div>
              <label className="text-[14px] mb-[3px] w-[150px] leading-4 pl-[10px]">
                <b>{actualLanguage[0].Travel_order_people}</b>
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
              <label className="text-[16px] mb-[3px]">
                <b>{actualLanguage[0].Travel_order_teaxtarea_header}</b>
              </label>
              <textarea
                value={travelMassage}
                onChange={handlePuttingMassege}
                className="border-gray-900/[0.4] border h-[200px] w-full leading-5 p-[8px] rounded-[10px]"
                placeholder={actualLanguage[0].Travel_order_textarea_placeholder}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
