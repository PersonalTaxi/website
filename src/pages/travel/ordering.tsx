import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../Header/header";
import Faqelement from "../Faq/faqelement";
import Footer from "../Footer/footer";
import { AppContext } from "../_app";
import Orderingtravelspec from "./orderingtravelspec";
import Ordertravelperson from "@/components/travelscomponents/ordertravelpersonaldata";
import { RiErrorWarningFill } from "react-icons/ri";

export default function TravelOrdering() {
  const {
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
  } = useContext(AppContext);

  const router = useRouter();
  const direction = router.query.destination;

  const handleSummary = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: "/travel/travelsummary",
      query: { destination: direction },
    });
  };

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Personal Taxi - FAQ</title>
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
        <div id="ordering-wrapper" className="lg:w-[900px] w-screen mx-auto border flex">
          <form className="w-full flex flex-col" onSubmit={handleSummary}>
            <div className="flex flex-col lg:flex-row">
              <Orderingtravelspec
                travelDate={travelDate}
                setTravelDate={setTravelDate}
                travelTime={travelTime}
                setTravelTime={setTravelTime}
                travelLocalizationFrom={travelLocalizationFrom}
                setTravelLocalizationFrom={setTravelLocalizationFrom}
                travelMassage={travelMassage}
                setTravelMassage={travelMassage}
                travelLocalizationFromLatLang={travelLocalizationFromLatLang}
                setTravelLocalizationFromLatLang={setTravelLocalizationFromLatLang}
                persons={persons}
                setPersons={setPersons}
              />
              <Ordertravelperson />
            </div>
            <div className="w-full flex flex-col justify-center items-center mb-[30px]">
              <div id="info" className="flex justify-center items-center">
                <RiErrorWarningFill className="lg:w-[40px] w-[25px] h-auto text-red-600" />
                <p className="italic pl-[10px] leading-4 text-[11px] lg:text-auto w-[80%]">
                  Befor you will click button please check carefully if all fields are filled
                  correctly, then click button below.
                </p>
              </div>
              <button className="px-[30px] bg-blue-400 text-white w-[250px] py-[10px] rounded-[10px]">
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
