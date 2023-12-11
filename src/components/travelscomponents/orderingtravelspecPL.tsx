import React, { useContext, useRef, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import TomTomTravels from "./tomtomTravels";
import { AppContext } from "../../pages/_app";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

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
export default function OrderingtravelspecificsPL({
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
  const infoAboutLocalization: any = useRef();

  const handleDontKnowingAddress = () => {
    setLocalizationIsUnknow(!localizationIsUnknow);
    if (localizationIsUnknow === false) {
      setTravelLocalizationFrom("idk");
    } else {
      setTravelLocalizationFrom("empty");
    }
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

  const showInfoAboutLocalization = () => {
    infoAboutLocalization.current.style.display = "block";
  };

  const hideInfoAboutLocalization = () => {
    infoAboutLocalization.current.style.display = "none";
  };

  return (
    <div className="lg:w-1/2 w-screen">
      <div id="conditions-container" className="m-[30px]">
        <div id="data-time-wrapper" className="flex flex-col">
          <label className="text-[14px] mb-[3px]">
            <b className="text-[16px]">Kiedy musisz być na miejscu?</b>
            <br></br> (lub kiedy zaczyna się wycieczka?)
          </label>
          <div className="flex justify-between">
            <div className="w-[55%] h-[45px] relative">
              <input
                type="date"
                value={travelDate}
                onChange={handleDate}
                className="border border-gray-900/[0.4] w-full h-[45px] text-[15px] pl-[5px] outline-none z-10 rounded-[10px] bg-transparent"
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
              Punktem startowym (miejscem z którego będziemy mogli Cię odebrać) może być wyłącznie
              lokalizacja w gminie Kraków lub gminie Zabierzów.
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <label className="text-[14px] mb-[3px]">
              <b>Lokalizacja z której mamy Cię odebrać:</b>
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
                Wyślesz nam lokalizację na office@personaltaxi.pl najszybciej jak będzie to możliwe.
              </div>
            )}
            <div id="input-continer" className="flex items-start justify-normal mt-[4px]">
              <input
                type="checkbox"
                onChange={handleDontKnowingAddress}
                className="cursor-pointer"
              ></input>
              <p className="leading-[10px] text-[10px] pl-[5px]">
                Zaznacz jeśli nie znasz jeszcze lokalizacji. Jednocześnie deklarujesz, że będzie ona
                w gminie Kraków lub Zabierzów i przekażesz nam ją mailowo lub telefonicznie tak
                szybko jak ją poznasz.
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
                  Wycieczkę możesz zamówić dla maksymalnie 8 osób. Od libczy osób zależy typ
                  samochodu. Dla maksymalnie 4 osób będzie to <b>Eco Sedan</b>, natomiast jeśli
                  rezerwacja będzie dotyczyć od 5 - 8 osób będzie to <b>Mini Van</b> cena będzie
                  nieco wyższa. Jeśli chciałbyś złożyć zamówienie dla większej liczby osób niż 8 -
                  złóż kolejne zamówienie.
                </p>
              </div>
              <label className="text-[14px] mb-[3px] w-[150px] leading-4 pl-[10px]">
                <b>Ile osób będzie transferowanych?</b>
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
                className="border-gray-900/[0.4] border h-[200px] w-full leading-5 p-[8px] rounded-[10px]"
                placeholder="Tutaj możesz dodać tutaj wszelkie informacje o swoich potrzebach, prefernacjach, nietypowych przedmiotach (jeśli takie przewozisz)."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
