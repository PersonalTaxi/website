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

    setSearchButtonWasClicked(true);

    if (latLangFrom !== null && latLangTo !== null) {
      router.push(
        {
          pathname: "/ordering/summary",
          query: {
            passengers: people,
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

  console.log(date);
  console.log(dateLimit);

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
      <div className="w-screen z-20 mb-[12px]" id="specifics">
        <div
          id="search-wraper"
          className="w-full flex flex-col justify-center items-center relative"
        >
          <div id="search-contianer-text" className="w-11/12 px-[30px]">
            <div
              id="correctInfo"
              className="w-[120px] bg-white text-center rounded-t-[10px]"
            >
              Your drive:
            </div>
          </div>
          <div
            id="search-contianer"
            className="bg-white w-11/12 rounded-t-[15px] h-auto border-red-200 -m-[1px]"
          >
            <form
              onSubmit={handleSendForm}
              className="w-full h-full flex flex-col justify-evenly items-center mx-auto border-red-900"
            >
              <div
                id="form-inputs-wraper"
                className="w-full h-[260px] flex flex-col justify-evenly items-center mx-auto"
              >
                <div
                  id="from-to"
                  className="rounded-[10px] h-[100px] w-10/12 border relative"
                >
                  <div
                    id="icon-input-wraper"
                    className="h-full rounded-[10px] w-full flex items-center relative"
                  >
                    <TomTom
                      ShowOrHideInfoAboutMissingLocalizations={
                        ShowOrHideInfoAboutMissingLocalizations
                      }
                    />
                  </div>
                  <div
                    ref={InfoAboutFillLocations}
                    className="hidden h-[20px] text-red-800 items-center text-[14px]"
                  >
                    <AiFillInfoCircle />
                    <div className="pl-[5px]">Please fill a localizations</div>
                  </div>
                </div>
                <div id="wrapper-for-bottom-search" className="w-10/12">
                  {/* Date*/}
                  <div
                    id="calendar-timer-wrapper"
                    className="rounded-[10px] h-[50px] w-full border flex flex-no-wrap mb-[10px] relative"
                  >
                    <div className="h-[50px] w-full rounded-[10px] flex items-center pl-[10px] relative">
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
                        className="w-[40px] h-[40px] text-yellow-500/[0.4]"
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
                      className="absolute w-full h-[0px] bg-white z-[500] text-[12px] flex items-start duration-200 overflow-hidden rounded-[10px] shadow-xl pl-[10px] pr-[4px]"
                    >
                      <div className="flex items-center">
                        <AiFillInfoCircle className="w-[20px] h-[20px]" />
                        <p className="px-[5px] h-full mt-[5px]">
                          You can order a taxi not eariler that 16 hours from
                          now
                        </p>
                      </div>
                      <AiOutlineClose className="w-[20px] h-[20px]" />
                    </div>
                    <div
                      onMouseEnter={handleShowInfoAboutDate}
                      onMouseLeave={handleHideInfoAboutDate}
                      className="absolute -right-6 my-auto z-40  h-full flex items-center text-yellow-500 w-[25px]"
                    >
                      <AiFillInfoCircle className="w-full h-full ml-[5px]" />
                    </div>
                  </div>
                  {/* Persons do drive */}
                  <div
                    id="person-and-submit-wraper"
                    className="rounded-[10px] h-[50px] w-full flex justify-between"
                  >
                    <div
                      id="person-and-submit-wraper"
                      className="rounded-[10px] h-[50px] w-6/12 border flex justify-center items-center"
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
                      className=" border-black rounded-[10px] h-[50px] w-[130px] border-2 bg-black text-yellow-400 hover:text-black hover:bg-yellow-500 hover:border-yellow-500 duration-150"
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
              <div className="flex justify-center items-center  -top-[40px] w-screen h-[20px]">
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
          {latLangFrom !== null && latLangTo !== null && (
            <div className=" bg-white w-11/12 bottom-0 mx-auto text-center rounded-b-[10px]">
              Drive distance {calculateDistance} km
            </div>
          )}
          {((latLangFrom !== null && latLangTo === null) ||
            (latLangFrom === null && latLangTo !== null)) && (
            <div className="bg-white w-11/12 mx-auto text-center rounded-b-[10px] text-[12px]">
              Drive distance: wating for localizations ...
            </div>
          )}
        </div>
      </div>
    </>
  );
}
