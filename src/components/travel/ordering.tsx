import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header/header";
import Footer from "../Footer/footer";
import { AppContext } from "../../pages/_app";
import LocalizationLoader from "../localizationLoader";
import OrderingTravelParams from "../travelscomponents/orderingtravelparams";
import OrderingTravelPersonalData from "@/components/travelscomponents/orderingtravelpersonaldata";
import { RiErrorWarningFill } from "react-icons/ri";

export default function TravelOrdering() {
  const {
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
    travelId,
    travelDestination,
    setTravelDestination,
    travelLocalizationFrom,
    setTravelLocalizationFrom,
    travelLocalizationFromLatLang,
    setTravelLocalizationFromLatLang,
    travelDate,
    setTravelDate,
    travelTime,
    setTravelTime,
    persons,
    setPersons,
    travelMassage,
    setTravelMassage,
    travelFirstName,
    setTravelFirstName,
    travelLastName,
    setTravelLastName,
    travelEmail,
    setTravelEmail,
    travelPrefixPhone,
    setTravelPrefixPhone,
    travelPhone,
    setTravelPhone,
    finalTravelPrice,
  } = useContext(AppContext);

  const router = useRouter();
  const direction = router.query.destination;

  console.log(travelId);

  const handleSummary = (e: any) => {
    e.preventDefault();
    console.log(travelLocalizationFrom);
    if (travelDate === undefined) {
      alert("Not all fields are filled propertly");
      return false;
    }
    if (travelTime === undefined) {
      alert("Not all fields are filled propertly");
      return false;
    }
    if (travelLocalizationFrom === "empty") {
      alert("Not all fields are filled propertly");
      return false;
    }
    router.push({
      pathname: "/travel/travelsummary",
      query: { destination: direction },
    });
  };

  const checkValuesAndRedirect = () => {
    if (finalTravelPrice === undefined) {
      router.push({ pathname: "/travels" });
    }
  };

  useEffect(() => {
    // setTravelLocalizationFrom("");
    checkValuesAndRedirect();
  }, []);

  return (
    <>
      {lookingForLocalization === true && (
        <LocalizationLoader
          latLangFrom={latLangFrom}
          setlatLangFrom={setlatLangFrom}
          latLangTo={latLangTo}
          setlatLangTo={setlatLangTo}
          queryFrom={queryFrom}
          setQueryFrom={setQueryFrom}
          queryTo={queryTo}
          setQueryTo={setQueryTo}
          lookingForLocalization={lookingForLocalization}
          setLookingForLocalization={setLookingForLocalization}
          foundedLocalization={foundedLocalization}
          setFoundedLocalization={setFoundedLocalization}
          foundedLocalizationLatLang={foundedLocalizationLatLang}
          setFoundedLocalizationLatLang={setFoundedLocalizationLatLang}
        />
      )}
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Personal Taxi - Travel ordering</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
        <link rel="stylesheet" type="text/css" href="/cdn.web-sdk-maps/maps.css"></link>
        <link rel="stylesheet" type="text/css" href="../assets/ui-library/index.css"></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="/cdn.web-sdk-plugin-searchbox/SearchBox.css"
        ></link>
        <link rel="stylesheet" type="text/css" href="../assets/ui-library/icons-css/poi.css"></link>
      </Head>
      <Header />
      <div className='w-screen h-[200px] bg-[url("/travel_bg_top.png")] bg-top bg-cover bg-no-repeat flex items-center justify-center text-white relative'>
        <div className="absolute w-full h-full bg-gray-900/[0.7] z-0"></div>
        <div className="flex items-center justify-center flex-col lg:w-[65%] z-10">
          <p className="lg:text-[40px] text-[30px] mt-[40px] lg:font-semibold text-center">
            Your travel to <br></br> {router.query.destination}
          </p>
        </div>
      </div>
      <div id="Faq-wrapper" className=" border w-screen min-h-[400px] z-20 relative">
        <div
          id="ordering-wrapper"
          className="lg:w-[900px] w-screen mx-auto lg:shadow-2xl lg:my-[25px] rounded-[10px] flex"
        >
          <form className="w-full flex flex-col" onSubmit={handleSummary}>
            <div className="flex flex-col lg:flex-row">
              <OrderingTravelParams
                travelDate={travelDate}
                setTravelDate={setTravelDate}
                travelTime={travelTime}
                setTravelTime={setTravelTime}
                travelLocalizationFrom={travelLocalizationFrom}
                setTravelLocalizationFrom={setTravelLocalizationFrom}
                travelMassage={travelMassage}
                setTravelMassage={setTravelMassage}
                travelLocalizationFromLatLang={travelLocalizationFromLatLang}
                setTravelLocalizationFromLatLang={setTravelLocalizationFromLatLang}
                persons={persons}
                setPersons={setPersons}
              />
              <OrderingTravelPersonalData />
            </div>
            <div className="w-full flex flex-col justify-center items-center mb-[30px]">
              <div id="info" className="flex justify-center items-center">
                <RiErrorWarningFill className="lg:w-[30px] w-[25px] h-auto text-red-600" />
                <p className="italic pl-[10px] leading-4 text-[11px] lg:text-[12px] md:w-[100%] w-[80%]">
                  Befor clicking please check carefully if all fields are completed correctly.
                </p>
              </div>
              <button className="px-[30px] bg-blue-400 text-white w-[250px] py-[10px] rounded-[10px] duration-200 border-2 border-blue-400 hover:bg-white hover:text-black hover:border-black">
                Order Summary
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}