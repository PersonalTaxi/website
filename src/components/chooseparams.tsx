import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Orderspacifications from "./MainPage/Search/orderpersonaldetails";
import { Ubuntu } from "next/font/google";
import Sedan from "@/components/sedancomponent";
import Van from "@/components/vancomponent";
import { BsFillPersonFill, BsFillBagFill } from "react-icons/bs";
import { AppContext } from "../pages/_app";

//icons
import { MdFlightLand } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Carcomponent from "@/components/carcomponent";
import Premiumsedancomponent from "./premiumsedancomponent";

const rubikFonts = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

// function reducer(state: any, action: any) {
//   switch (action.type) {
//     case "increment-sedan":
//       // if(state.sedan >= 0)
//       return { sedan: state.sedan + 1, van: state.van };

//     case "decrement-sedan":
//       if (state.sedan > 0) {
//         3;
//         return { sedan: state.sedan - 1, van: state.van };
//       } else return state;
//     case "increment-van":
//       // if(state.van >= 0)
//       return { van: state.van + 1, sedan: state.sedan };

//     case "decrement-van":
//       if (state.van > 0) {
//         return { van: state.van - 1, sedan: state.sedan };
//       }

//     case "resetCars":
//       if (action.pass.router > 4) {
//         return { van: (state.van = 1), sedan: (state.sedan = 0) };
//       } else {
//         return { van: (state.van = 0), sedan: (state.sedan = 1) };
//       }

//     //   return state;
//   }
// }

export default function Chooseparams() {
  const router = useRouter();

  const {
    queryFrom,
    setQueryFrom,
    queryTo,
    setQueryTo,
    date,
    setDate,
    time,
    setTime,
    people,
    setPeople,
    whatIsOrdering,
    setWhatIsOrdering,
    latLangFrom,
    setlatLangFrom,
    latLangTo,
    setlatLangTo,
    cars,
    setCars,
    calculateDistance,
    setCalculateDistance,
    isFormCompleted,
    price,
    setPrice,
    setIsFromCompleted,
    infoForDriver,
    setInfoForDriver,
    unusualItems,
    setUnusualItems,
    flightNumber,
    setFlightNumber,
    currencyTXT,
    setCurrencyTXT,
    combi,
    setCombi,
  } = useContext(AppContext);

  const InfoAbout: any = useRef();
  const handleFlightinfo: any = useRef();

  // const [prices, setPrices] = useState([
  //   { name: "sedan", price: 129 },
  //   { name: "van", price: 149 },
  // ]);

  const passengersFromQuery: any = router.query.passengers;

  const { passengers } = router.query;
  let passenger: any = "";

  if (people !== undefined) {
    passenger = people;
  } else {
    passenger = 1;
  }

  // let PersonsLeft = passenger - (cars.sedan * 4 + cars.van * 8);

  const handleShowInfoAboutFlight = () => {
    handleFlightinfo.current.style.display = "block";
  };
  const handleHideInfoAboutFlight = () => {
    handleFlightinfo.current.style.display = "none";
  };

  const handleOrdering = (e: any) => {
    if (router.query.cartype === router.query.combi) {
      setCombi(true);
    }

    setWhatIsOrdering("Taxi transfer");
    e.preventDefault();
    // setCars(state);
    // setPrice(FinalPrice);
    router.replace({
      pathname: "/ordering/payment",
      query: { type: "taxi" },
    });
  };

  const handleHidingingInfoAboutCorrectFromsBeforeOrdering = () => {
    InfoAbout.current.style.display = "none";
  };

  const handleCombiCheckBox = () => {
    setCombi(!combi);
  };

  const handleAddingFlightNumber = (e: any) => {
    if (e.target.value === "") setFlightNumber("");
    else setFlightNumber(e.target.value);
  };

  const handleAddingUnusualItems = (e: any) => {
    if (e.target.value === "") setUnusualItems("");
    setUnusualItems(e.target.value);
  };

  const handleAddingInfoForDriver = (e: any) => {
    if (e.target.value === "") setInfoForDriver("");
    else setInfoForDriver(e.target.value);
  };

  useEffect(() => {
    let settingCars;
    if (parseInt(passengersFromQuery) < 5) {
      settingCars = { sedan: 1, van: 0 };
      setCars(settingCars);
    }
    if (parseInt(passengersFromQuery) > 4) {
      settingCars = { sedan: 0, van: 1 };
      setCars(settingCars);
    }
  }, [router.query.passengers]);

  //calculating final price
  let distanceAboveMin = 0;

  if (calculateDistance > 20) {
    distanceAboveMin = calculateDistance - 20;
  }

  const priceSedanPL = 129;
  const priceSedanEUR = 30;
  const pricePremiumPL = 169;
  const pricePremiumEUR = 40;
  const priceVanPL = 149;
  const priceVanEUR = 35;

  let FinalPrice = 0;

  if (currencyTXT === "EUR") {
    if (router.query.cartype === "ecosedan") {
      FinalPrice = Math.round(priceSedanEUR + distanceAboveMin * 1.62);
    }
    if (router.query.cartype === "premium") {
      FinalPrice = Math.round(pricePremiumEUR + distanceAboveMin * 1.62);
    }
    if (router.query.cartype === "van") {
      FinalPrice = Math.round(priceVanEUR + distanceAboveMin * 1.62);
    }
  } else {
    if (router.query.cartype === "ecosedan") {
      FinalPrice = priceSedanPL + distanceAboveMin * 7;
    }
    if (router.query.cartype === "premium") {
      FinalPrice = pricePremiumPL + distanceAboveMin * 7;
    }
    if (router.query.cartype === "van") {
      FinalPrice = priceVanPL + distanceAboveMin * 7;
    }
  }

  // END OF CALCULATING

  const handleChangeToPLN = () => {
    setCurrencyTXT("PLN");
  };
  const handleChangeToEUR = () => {
    setCurrencyTXT("EUR");
  };

  return (
    <div className="relative bg-white mt-[90px] w-[95vw] lg:w-[1080px] mx-auto rounded-[10px] h-auto lg:h-auto shadow-xl">
      <div className="w-[80%] h-[60px] flex items-end flex-col mx-auto">
        <p className="text-[12px]"> Step 2 of 3</p>
        <div className="bg-gradient-to-r from-yellow-500 from-0% via-white via-70% to-white to-100% w-full border border-yellow-500/[0.5] h-[20px] rounded-[5px] bg-"></div>
      </div>
      {/* {latLangFrom !== null &&
        latLangTo !== null &&
        PersonsLeft > 0 &&
        parseInt(passengersFromQuery) === people && (
          <div className="absolute bg-red-600 text-white w-[92vw] lg:w-[1080px] -top-[60px] left-0 right-0 mx-auto px-[4px] rounded-[3px] flex justify-center items-center h-[40px]">
            <AiFillInfoCircle />
            <p className="pl-[4px]">Find a seat(s) for {PersonsLeft} person(s) yet.</p>
          </div>
        )} */}
      <div
        id="choose-cars-wrapper"
        className=" rounded-[10px] flex w-[90vw] lg:w-[80%] mx-auto justify-between duration-200 mb-[12px] bg-white"
      >
        {/* Bloking to configure offer before chosing correct params */}
        {isFormCompleted !== "true" && (
          <div className="bg-white/[0.85] absolute lg:left-0 w-[96%] lg:w-[1080px] h-[1510px] lg:h-[1180px] z-20"></div>
        )}

        <div className="flex flex-col rounded-[10px] h-auto lg:h-auto w-full bg-white lg:justify-center ">
          <Sedan />
          <div className="bg-gray-400 h-[1px] my-[20px]"></div>
          <Premiumsedancomponent />
          <div className="bg-gray-400 h-[1px] my-[20px]"></div>
          <Van />
          <div className="bg-gray-400 h-[1px] my-[20px]"></div>
        </div>
        {/* <div className="w-[1px] h-[100px] bg-gray-200 my-[10px]"></div> */}
      </div>
      {/* {router.query.car === "mixed" && (
        <div className="w-[90vw] lg:w-[80%] mx-auto py-[20px] border-t border-b">
          <p className={`${rubikFonts.className} text-[20px]`}>Choosed car(s) summary have:</p>
          <div>
            <div id="seats-summary-wrapper" className=" flex items-center">
              <BsFillPersonFill className="text-yellow-500 w-[30px] h-[20px]" />
              <p> {cars.van * 8 + cars.sedan * 4} seats</p>
            </div>
            <div id="seats-summary-wrapper" className=" flex items-center">
              <BsFillBagFill className="text-yellow-500 w-[30px] h-[20px]" />
              <p>{cars.van * 7 + cars.sedan * 3} places for suitcase</p>
            </div>
          </div>
        </div>
      )} */}
      <form onSubmit={handleOrdering} className="w-[90vw] lg:w-[75%] h-auto mx-auto">
        <p className="font-[700] text-[20px]">Order details:</p>
        <div id="form-wrapper" className="flex flex-col lg:flex-row">
          <div id="flight-messege-container" className="lg:w-1/2 lg:mt-[5px]">
            <div className=" border-blue-900 w-full flex justify-between items-center mt-[20px] lg:pr-[25px]">
              <div className=" border-blue-900 w-full h-[40px] flex items-center">
                <MdFlightLand className="h-[40px] w-[40px] px-[4px] text-yellow-500" />
                <input
                  className="border border-gray-400 w-full h-[40px] pl-[10px] rounded-[5px] outline-none"
                  value={flightNumber}
                  placeholder="Flight number e.g FR9847"
                  onChange={handleAddingFlightNumber}
                ></input>
              </div>
              <div
                ref={handleFlightinfo}
                className="hidden top-[260px] p-[9px] w-[85%] left-0 absolute bg-white border rounded-[10px] shadow-xl"
              >
                <AiOutlineClose className="w-[20px] h-[20px] float-right" />
                <p>
                  By writing down number of your flight we will be able to monitoring departures
                  time and get your from the airport at right time. After departure our waiting time
                  is up to 60 mins.
                </p>
              </div>
              <div
                id="info-icon"
                onMouseEnter={handleShowInfoAboutFlight}
                onMouseLeave={handleHideInfoAboutFlight}
              >
                <AiFillInfoCircle className="h-[30px] w-[30px] px-[4px] text-yellow-500" />
              </div>
            </div>
            <div className=" border-blue-900 w-full h-[120px] flex items-start flex-col mt-[20px] px-[7px] lg:pr-[25px]">
              <div className="text-[16px]">FIll if you have any non-standard bags:</div>
              <textarea
                value={unusualItems}
                onChange={handleAddingUnusualItems}
                className="border border-gray-300 h-[100px] w-full rounded-[5px] outline-none"
                placeholder=" Like bikes, ski, wheelchair and so on"
              ></textarea>
            </div>
            <div className=" border-blue-900 w-full h-[120px] flex items-start flex-col mt-[20px] px-[7px] lg:pr-[25px]">
              <div className="text-[16px]">Information for your driver:</div>
              <textarea
                value={infoForDriver}
                onChange={handleAddingInfoForDriver}
                className="border border-gray-300 h-[100px] w-full rounded-[5px] outline-none"
                placeholder=" Your massage here"
              ></textarea>
            </div>
          </div>
          <Orderspacifications />
        </div>
        <div className="w-[90vw] mx-auto my-[20px] relative">
          <div
            ref={InfoAbout}
            onClick={handleHidingingInfoAboutCorrectFromsBeforeOrdering}
            className="text-[20px] hidden absolute bg-white h-[60px] w-full z-10 right-0 -top-[60px] border pl-[4px] shadow-xl justify-between items-center"
          >
            <p>Correct all conditins before order</p>
            <AiOutlineClose />
          </div>
        </div>
        <div className="">
          {/* {latLangFrom !== null &&
            latLangTo !== null &&
            PersonsLeft > 0 &&
            parseInt(passengersFromQuery) === people && (
              <Link href="#correctInfo">
                <div
                  className="absolute bg-white/[0.5] h-[50px] w-full z-40 right-0 border-green-900"
                  // onMouseEnter={handleShowingInfoAboutCorrectFromsBeforeOrdering}
                  // onMouseLeave={handleHidingingInfoAboutCorrectFromsBeforeOrdering}
                ></div>
              </Link>
            )} */}
          <div className="flex flex-col w-full justify-center items-center">
            <button
              disabled={
                (router.query.cartype === "ecosedan" ||
                  router.query.cartype === "premium" ||
                  router.query.cartype === "van") &&
                queryFrom !== "" &&
                queryTo !== ""
                  ? false
                  : true
              }
              className="float-right flex h-[50px] px-[10px] py-[5px] bg-yellow-500 text-white items-center justify-center rounded-[10px] border duration-200  border-yellow-500 hover:bg-white hover:text-yellow-500"
            >
              <p>
                Start ordering for {FinalPrice} {currencyTXT}
              </p>
            </button>
            <div
              id="price"
              className="bg-yellow-500 rounded-r-[5px] text-center text-white -ml-[15px] w-full"
            >
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
