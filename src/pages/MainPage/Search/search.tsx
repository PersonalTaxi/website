import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from "react";
import { AppContext } from "@/pages/_app";
import { useRouter } from "next/router";
import Link from "next/link";
import TomTom from "@/pages/tomtom";
import { BiSolidMap } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { TbClockHour8 } from "react-icons/tb";
import Cities from "../../../data/cities.json";
import Calendar from "react-calendar";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import {
  AiOutlineClose,
  AiOutlineFieldTime,
  AiOutlineCheck,
} from "react-icons/ai";
import Script from "next/script";
import Head from "next/head";

export default function Search() {
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
    SearchButtonWasClicked,
    setSearchButtonWasClicked,
    dateLimit,
    setDateLimit,
  } = useContext(AppContext);

  const router = useRouter();

  let passengersFromQuery: any = 2;

  if (router.query.passengers === undefined) {
    //default value is 2
    passengersFromQuery = 2;
  } else {
    passengersFromQuery = parseInt(router.query.passengers.toString());
  }

  const InfoAboutFillLocations = useRef<any | null>(null);
  const DatePlaceholder: any = useRef();
  const InfoAboutDate: any = useRef();

  const handleHidePlaceholderDivDate = () => {
    // DatePlaceholder.current.style.display = "none"
  };

  const handleDowncreaseNumber = useCallback(() => {
    if (people > 1) {
      return [setPeople(people - 1)];
    }
  }, [people]);

  const handleIncreaseNumber = useCallback(() => {
    if (people < 40) {
      return [setPeople(people + 1)];
    }
  }, [people]);

  const handleDate = (e: any) => {
    setDate(e.target.value);
  };

  const ShowOrHideInfoAboutMissingLocalizations = () => {
    // console.log(latLangFrom, latLangTo, SearchButtonWasClicked)

    if (SearchButtonWasClicked === false) {
      InfoAboutFillLocations.current.style.display = "none";
    }

    if (
      ((latLangFrom === null && latLangTo === null) ||
        (latLangFrom !== null && latLangTo === null) ||
        (latLangFrom === null && latLangTo !== null)) &&
      SearchButtonWasClicked === true
    ) {
      InfoAboutFillLocations.current.style.display = "flex";
    }

    if (
      latLangFrom !== null &&
      latLangTo !== null &&
      SearchButtonWasClicked === true
    ) {
      InfoAboutFillLocations.current.style.display = "none";
    }
  };

  const handleSendForm = (e: any) => {
    e.preventDefault();

    let type;
    if (people < 5 && people > 0) {
      type = "sedan";
    }
    if (people < 9 && people > 4) {
      type = "van";
    }
    if (people > 8) {
      type = "mixed";
    }
    setSearchButtonWasClicked(true);

    if (latLangFrom !== null && latLangTo !== null) {
      router.push(
        {
          pathname: "/ordering/summary",
          query: {
            passengers: people,
            car: type,
          },
        },
        undefined,
        { scroll: false },
      );
    }
  };

  const MissingValuesChecking = useCallback(() => {
    ShowOrHideInfoAboutMissingLocalizations();
  }, [SearchButtonWasClicked, latLangFrom, latLangTo]);

  const CheckIfAllDataIsComplete = () => {
    let CompleteStatus: string = "false";

    const Check = () => {
      if (queryFrom === "") return false;
      if (queryTo === "") return false;
      if (latLangFrom === null) return false;
      if (latLangTo === null) return false;
      if (dateLimit > date) return false;
      if (
        passengersFromQuery !== people &&
        !router.asPath.includes("passengers")
      )
        return false;
      if (
        passengersFromQuery !== people &&
        router.asPath.includes("passengers")
      )
        return false;

      CompleteStatus = "true";
    };

    Check();

    if (CompleteStatus === "true") {
      setIsFromCompleted(CompleteStatus);
    } else {
      setIsFromCompleted(CompleteStatus);
    }
  };

  useEffect(() => {
    MissingValuesChecking();
    CheckIfAllDataIsComplete();
  });

  const handleShowInfoAboutDate = () => {
    InfoAboutDate.current.style.height = "100%";
  };

  const handleHideInfoAboutDate = () => {
    InfoAboutDate.current.style.height = "0px";
  };

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Your best drive</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
      </Head>
      <div
        className="w-screen lg:w-[1180px] z-20 mt-[12px] mx-auto"
        id="specifics"
      >
        <div
          id="search-wraper"
          className="w-full flex flex-col justify-center items-center relative"
        >
          <div id="search-contianer-text" className="w-11/12 px-[30px]">
            <div
              id="correctInfo"
              className="w-[120px] bg-white text-center rounded-t-[10px] "
            >
              Your drive:
            </div>
          </div>
          <div
            id="search-contianer"
            className="bg-white w-11/12 rounded-t-[15px] h-auto border-red-200 -m-[1px] lg:p-[10px] shadow-2xl"
          >
            <form
              onSubmit={handleSendForm}
              className="w-full h-full flex flex-col justify-evenly items-center mx-auto "
            >
              <div
                id="form-elements-wraper"
                className="w-full h-[260px] md:h-auto flex flex-col lg:flex-row justify-evenly items-center mx-auto"
              >
                <div
                  id="from-to"
                  className="rounded-[10px] h-[100px] lg:h-auto w-10/12 lg:border-0 relative"
                >
                  <div
                    id="localizations-input-wraper"
                    className="h-full rounded-[10px] w-full flex items-center relative border lg:border-0"
                  >
                    <TomTom
                      ShowOrHideInfoAboutMissingLocalizations={
                        ShowOrHideInfoAboutMissingLocalizations
                      }
                    />
                  </div>
                  <div
                    ref={InfoAboutFillLocations}
                    className="absolute hidden h-[20px] text-red-800 items-center text-[14px]"
                  >
                    <AiFillInfoCircle />
                    <div className="pl-[5px] cursor-pointer">
                      Please fill a localizations
                    </div>
                  </div>
                </div>
                <div
                  id="wrapper-for-bottom-search"
                  className="w-10/12 lg:w-auto lg:flex items-center justify-center lg:pl-[10px]"
                >
                  {/* Date*/}
                  <div
                    id="calendar-timer-wrapper"
                    className="rounded-[10px] h-[50px] w-full lg:w-[220px] flex xl:flex-row flex-no-wrap mb-[10px] lg:mb-0 relative"
                  >
                    <div className="h-[50px] w-full lg:w-[84%] rounded-[10px] border lg:border-gray-900/[0.4] flex items-center pl-[10px] relative">
                      {date === "" && (
                        <div
                          ref={DatePlaceholder}
                          className="absolute w-10/12 h-[50px] text-left leading-[50px] text-gray-900/[0.5] right-0 pl-[5px]"
                        >
                          Date and time
                        </div>
                      )}
                      <TbCalendarTime
                        locale="en_EN"
                        className="w-[40px] h-[40px] text-yellow-500/[0.4] lg:hidden"
                      />
                      <input
                        onChange={handleDate}
                        id="data"
                        className="w-full h-[45px] text-[15px] pl-[5px] outline-none z-10 rounded-[10px] bg-transparent"
                        type="datetime-local"
                        min={dateLimit}
                        onFocus={handleHidePlaceholderDivDate}
                        value={date}
                        required
                      ></input>
                    </div>
                    <div
                      ref={InfoAboutDate}
                      onClick={handleHideInfoAboutDate}
                      className="absolute w-full lg:w-[84%] h-[0px] bg-white z-[500] text-[12px] flex items-start duration-200 overflow-hidden rounded-[10px] shadow-xl pl-[10px] pr-[4px]"
                    >
                      <div className="flex items-center">
                        <AiFillInfoCircle className="w-[20px] h-[20px] lg:hidden " />
                        <p className="px-[5px] h-full mt-[5px] lg:leading-[14px]">
                          You can order a taxi not eariler that 16 hours from
                          now
                        </p>
                      </div>
                      <AiOutlineClose className="w-[20px] h-[20px] lg:hidden" />
                    </div>
                    <div
                      onMouseEnter={handleShowInfoAboutDate}
                      onMouseLeave={handleHideInfoAboutDate}
                      className="right-0 my-auto h-full flex items-center text-yellow-500 w-[16%] cursor-pointer"
                    >
                      <AiFillInfoCircle className="w-full h-full ml-[15px] lg:mx-[7px]" />
                    </div>
                  </div>
                  {/* Persons do drive */}
                  <div
                    id="person-and-submit-wraper"
                    className="rounded-[10px] h-[50px] w-full lg:w-[220px] flex justify-between"
                  >
                    <div
                      id="person-and-submit-wraper"
                      className="rounded-[10px] h-[50px] w-6/12 xl:w-[270px] border lg:border-gray-900/[0.4] flex justify-center items-center"
                    >
                      <div
                        className="w-[25px] h-[25px] rounded-[50%]"
                        onClick={handleDowncreaseNumber}
                      >
                        <AiOutlineMinus className="w-full h-full" />
                      </div>
                      <div className="w-[30px] h-[30px]">
                        <BsFillPersonFill className="w-full h-full text-yellow-400/[0.4]" />
                      </div>
                      <div className="w-[30px] h-[30px] text-[22px] leading-7 text-center duration-200">
                        {people}
                      </div>
                      <div
                        className=" w-[25px] h-[25px] rounded-[50%]"
                        onClick={handleIncreaseNumber}
                      >
                        <AiOutlinePlus className="w-full h-full" />
                      </div>
                    </div>
                    <button
                      id="person-and-submit-wraper"
                      className=" border-black rounded-[10px] h-[50px] w-[130px] lg:w-[190px] border-2 bg-black text-yellow-400 hover:text-black hover:bg-yellow-500 hover:border-yellow-500 duration-150 lg:ml-[15px]"
                    >
                      {!router.asPath.includes("ordering") ? (
                        <p>See offer</p>
                      ) : (
                        <p>Update road</p>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              {/* Comuniate if data is collected */}
              <div className="flex justify-center items-center -top-[40px] w-screen h-[20px]">
                {isFormCompleted === "true" && (
                  <>
                    <AiOutlineCheck />
                    <p className="text-green-600">Conditions are up to date</p>
                  </>
                )}

                {/* Comuniate if data is NOT collected */}
                {parseInt(passengersFromQuery) !== people && (
                  <>
                    <AiOutlineClose />
                    <p className="text-red-600">
                      You have to update (button above)
                    </p>
                  </>
                )}
              </div>
            </form>
          </div>
          <div className="bg-white w-11/12 mx-auto text-center rounded-b-[10px] text-[12px] h-[20px]">
            {((latLangFrom !== null && latLangTo === null) ||
              (latLangFrom === null && latLangTo !== null)) && (
              <p>Drive distance: wating for localizations ...</p>
            )}
            {latLangFrom !== null && latLangTo !== null && (
              <p className=" bg-white w-11/12 bottom-0 mx-auto text-center rounded-b-[10px]">
                Drive distance {calculateDistance} km
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
