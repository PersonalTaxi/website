import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cars from "../../data/cars.json";
import Orderspacifications from "../MainPage/Search/orderspecifications";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import { BsFillPersonFill, BsFillBagFill } from "react-icons/bs";
import { AppContext } from "../_app";

//icons
import { MdFlightLand } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import {
  AiOutlineClose,
  AiOutlineFieldTime,
  AiOutlineCheck,
  AiFillDollarCircle,
} from "react-icons/ai";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const rubikFonts = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment-sedan":
      // if(state.sedan >= 0)
      return { sedan: state.sedan + 1, van: state.van };

    case "decrement-sedan":
      if (state.sedan > 0) {
        3;
        return { sedan: state.sedan - 1, van: state.van };
      } else return state;
    case "increment-van":
      // if(state.van >= 0)
      return { van: state.van + 1, sedan: state.sedan };

    case "decrement-van":
      if (state.van > 0) {
        return { van: state.van - 1, sedan: state.sedan };
      }

    case "resetCars":
      console.log(action.pass.router);
      if (action.pass.router > 4) {
        return { van: (state.van = 1), sedan: (state.sedan = 0) };
      } else {
        return { van: (state.van = 0), sedan: (state.sedan = 1) };
      }

    //   return state;
  }
}

let CarsData = { sedan: 0, van: 1 };

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
    latLangFrom,
    setlatLangFrom,
    latLangTo,
    setlatLangTo,
    calculateDistance,
    setCalculateDistance,
    isFormCompleted,
    setIsFromCompleted,
  } = useContext(AppContext);

  const [state, dispatch] = useReducer(reducer, CarsData);
  const [combi, setCombi] = useState(false);

  const InfoAbout: any = useRef();
  const handleFlightinfo: any = useRef();

  const [prices, setPrices] = useState([
    { name: "sedan", price: 129 },
    { name: "van", price: 149 },
  ]);

  const passengersFromQuery: any = router.query.passengers;

  function incrementSedan() {
    dispatch({ type: "increment-sedan" });
  }

  function decrementSedan() {
    dispatch({ type: "decrement-sedan" });
  }

  function incrementVan() {
    dispatch({ type: "increment-van" });
  }

  function decrementVan() {
    dispatch({ type: "decrement-van" });
  }

  function resetCars() {
    dispatch({ type: "resetCars", pass: { router: router.query.passengers } });
  }

  const { passengers } = router.query;
  let passenger: any = "";

  if (people !== undefined) {
    passenger = people;
  } else {
    passenger = 1;
  }

  let PersonsLeft = passenger - (state?.sedan * 4 + state?.van * 8);

  const handleShowInfoAboutFlight = () => {
    handleFlightinfo.current.style.display = "block";
  };
  const handleHideInfoAboutFlight = () => {
    handleFlightinfo.current.style.display = "none";
  };

  const handleOrdering = (e: any) => {
    e.preventDefault();
    router.replace("/ordering/ordered");
  };

  const handleShowingInfoAboutCorrectFromsBeforeOrdering = () => {
    InfoAbout.current.style.display = "flex";
  };

  const handleHidingingInfoAboutCorrectFromsBeforeOrdering = () => {
    InfoAbout.current.style.display = "none";
  };

  const handleCombiCheckBox = () => {
    setCombi(!combi);
  };

  useEffect(() => {
    resetCars();
  }, [router.query.passengers]);

  useEffect(() => {
    if (state.sedan === 0) {
      setCombi(false);
    }
  }, [state]);

  let FinalPrice =
    state.van * 149 +
    state.van * (calculateDistance - 20) * 7 +
    (state.sedan * 129 + state.sedan * (calculateDistance - 20) * 7);

  return (
    <div className="relative bg-white mt-[90px] w-[95vw] mx-auto rounded-[10px] h-[1080px] border">
      <div className="w-[80vw] h-[60px] flex items-end flex-col mx-auto">
        <p className="text-[12px]"> Step 2 of 3</p>
        <div className="bg-gradient-to-r from-yellow-500 from-0% via-white via-70% to-white to-100% w-full border border-yellow-500/[0.5] h-[20px] rounded-[5px] bg-"></div>
      </div>
      {latLangFrom !== null &&
        latLangTo !== null &&
        PersonsLeft > 0 &&
        parseInt(passengersFromQuery) === people && (
          <div className="absolute bg-red-600 text-white w-[92vw] -top-[60px] left-0 right-0 mx-auto px-[4px] rounded-[3px] flex justify-center items-center h-[40px]">
            <AiFillInfoCircle />
            <p className="pl-[4px]">
              Find a seat(s) for {PersonsLeft} person(s) yet.
            </p>
          </div>
        )}
      <div
        id="choose-cars-wrapper"
        className=" rounded-[10px] flex w-[90vw] mx-auto justify-between duration-200 mb-[12px] bg-white relative"
      >
        {/* Bloking to configure offer before chosing correct params */}
        {isFormCompleted !== "true" && (
          <div className="bg-white/[0.85] absolute w-[90vw] h-[1000px] z-20 "></div>
        )}

        <div className="rounded-[10px] h-[129px] w-[170px] bg-white flex">
          <div id="left-wrapper" className="w-[120px]">
            <div className="w-full">
              <p className=" text-center font-semibold pt-[4px]">Eco Sedan</p>
            </div>
            <div className="relative w-full h-[60px]">
              <Image
                className="object-contain"
                src="/mercedes.png"
                fill
                alt="sedan"
              ></Image>
            </div>
            <div className="w-full flex pl-[5px]">
              <BsFillPersonFill className="text-yellow-500" />
              <p className=" text-center font-semibold text-[10px] pl-[5px]">
                max 4 people
              </p>
            </div>
            <div className="w-full flex pl-[5px]">
              <BsFillBagFill className="text-yellow-500" />
              <p className=" text-center font-semibold text-[10px] pl-[5px]">
                max 4 suitcases
              </p>
            </div>
            <div className="w-full flex pl-[5px] mt-[1px]">
              {/* <AiFillDollarCircle className="text-yellow-500"/> */}
              <p className=" text-center font-normal text-[10px] pl-[1px] font">
                {" "}
                from <b>129 zł</b>
              </p>
            </div>
          </div>
          <div id="left-wrapper" className="w-[50px]">
            <div className="relative w-full h-[125px] flex items-center justify-around ">
              <div>
                <IoIosArrowUp
                  className="w-[30px] text-[40px]"
                  onClick={incrementSedan}
                />
                <div className="w-[30px] h-[20px] text-[20px] text-center leading-5">
                  {state?.sedan}
                </div>
                <IoIosArrowDown
                  className="w-[30px] text-[40px]"
                  onClick={decrementSedan}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1px] h-[100px] bg-gray-200 my-[10px]"></div>
        <div className="rounded-[10px] h-[125px] w-[170px] bg-white flex pt-[4px]">
          <div id="left-wrapper" className="w-[120px]">
            <div className="w-full">
              <p className=" text-center font-bold">Mini Van</p>
            </div>
            <div className="relative w-full h-[60px]">
              <Image
                className="object-contain"
                src="/Van.webp"
                fill
                alt="sedan"
              ></Image>
            </div>
            <div className="w-full flex pl-[5px]">
              <BsFillPersonFill className="text-yellow-500" />
              <p className="text-center font-semibold text-[10px] pl-[5px]">
                max 8 people
              </p>
            </div>
            <div className="w-full flex pl-[5px]">
              <BsFillBagFill className="text-yellow-500" />
              <p className=" text-center font-semibold text-[10px] pl-[5px]">
                max 7 suitcases
              </p>
            </div>
            <div className="w-full flex pl-[5px] mt-[1px]">
              {/* <div className="text-yellow-500 w-[20px]"></div> */}
              {/* <AiFillDollarCircle className="text-yellow-500"/> */}
              <p className=" text-center font-normal text-[10px] pl-[1px]">
                from 149 zł
              </p>
            </div>
          </div>
          <div id="left-wrapper" className="w-[50px]">
            <div className="relative w-full h-[125px] flex items-center justify-around ">
              <div>
                <IoIosArrowUp
                  className="w-[30px] text-[40px]"
                  onClick={incrementVan}
                />
                <div className="w-[30px] h-[20px] text-[20px] text-center leading-5">
                  {state?.van}
                </div>
                <IoIosArrowDown
                  className="w-[30px] text-[40px]"
                  onClick={decrementVan}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          state.sedan > 0
            ? "w-screen duration-200 h-[20px] mb-[10px]"
            : "w-screen h-[0px] overflow-hidden duration-200 "
        }
      >
        {/* COMBI CAR CHECKBOX */}
        <div className="w-[92vw] h-[20px] mx-auto flex items-center">
          <input
            id="combi-type"
            type="checkbox"
            checked={combi}
            onChange={handleCombiCheckBox}
            className="w-[20px] h-[20px] accent-yellow-500 bg-white"
          ></input>
          <label id="combi-type" className="ml-[4px] font-semibold ">
            I need a combi car
          </label>
        </div>
      </div>
      <div className="w-[90vw] mx-auto py-[20px] border-t border-b">
        <p className={`${rubikFonts.className} text-[20px]`}>
          Choosed car(s) summary have:
        </p>
        <div>
          <div id="seats-summary-wrapper" className=" flex items-center">
            <BsFillPersonFill className="text-yellow-500 w-[30px] h-[20px]" />
            <p> {state.van * 8 + state.sedan * 4} seats</p>
          </div>
          <div id="seats-summary-wrapper" className=" flex items-center">
            <BsFillBagFill className="text-yellow-500 w-[30px] h-[20px]" />
            <p>{state.van * 7 + state.sedan * 3} places for suitcase</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleOrdering}
        className="w-[90vw] h-[300px] mx-auto my-[10px]"
      >
        <p className="font-[700] text-[20px]">Order details:</p>
        <div className=" border-blue-900 w-full flex justify-between items-center mt-[20px]">
          <div className=" border-blue-900 w-full h-[40px] flex items-center">
            <MdFlightLand className="h-[40px] w-[40px] px-[4px] text-yellow-500" />
            <input
              className="border border-gray-400 w-full h-[40px] pl-[10px] rounded-[5px] outline-none"
              placeholder="Flight number e.g FR9847"
            ></input>
          </div>
          <div
            ref={handleFlightinfo}
            className="hidden top-[260px] p-[9px] w-[85%] left-0 absolute bg-white border rounded-[10px] shadow-xl"
          >
            <AiOutlineClose className="w-[20px] h-[20px] float-right" />
            <p>
              By writing down number of your flight we will be able to
              monitoring departures time and get your from the airport at right
              time. After departure our waiting time is up to 60 mins.
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
        <div className=" border-blue-900 w-full h-[120px] flex items-start flex-col mt-[20px] px-[4px]">
          <div className="text-[16px]">Information for your driver:</div>
          <textarea
            className="border border-gray-300 h-[100px] w-full rounded-[5px] outline-none"
            placeholder=" Your massage here"
          ></textarea>
        </div>
        <Orderspacifications />
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
          {latLangFrom !== null &&
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
            )}
          <button className="float-right flex border-green-900 h-[50px] px-[10px] py-[5px] bg-yellow-500 text-white items-center justify-center rounded-[10px]">
            <p>Start ordering for {FinalPrice} zł </p>
          </button>
        </div>
      </form>
    </div>
  );
}
