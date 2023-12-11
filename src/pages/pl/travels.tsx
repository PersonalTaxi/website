import React from "react";
import Head from "next/head";
import HeaderPL from "../Header/headerPL";
import Footer from "../Footer/footer";
import TravelcomponentPL from "@/components/travelscomponents/travelcomponentPL";
import TravelsList from "../../data/travels.json";

export default function TravelsPL() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Personal Taxi - Wycieczki</title>
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
      <HeaderPL />
      <div className='w-screen lg:h-[300px] h-[150px] bg-[url("/travel_bg_top.png")] bg-top bg-cover bg-no-repeat flex items-center justify-center text-white relative'>
        <div className="absolute w-full h-full bg-gray-900/[0.7] z-0"></div>
        <div className="flex items-center justify-center flex-col w-[65%] z-10">
          <p className="lg:text-[60px] text-[30px] font-[300] pt-[40px]">Podróżuj z nami</p>
        </div>
      </div>
      <div id="Faq-wrapper" className="border w-screen min-h-[400px] z-20 relative flex flex-col">
        {TravelsList.map((i) => (
          <TravelcomponentPL
            key={i.name}
            name={i.name}
            namePL={i.namePL}
            type={i.type}
            typePL={i.typePL}
            descriptionEN={i.descriptionEN}
            descriptionPL={i.descriptionPL}
            photo={i.photo}
            price={i.price}
            howEarlierWeHaveToLeave={i.howEarlierWeHaveToLeave}
            timeFromKrakow={i.timeFromKrakow}
            totalLengthDistance={i.totalLengthDistance}
            totalTripLenght={i.totalTripLenght}
            MainTravelTime={i.MainTravelTime}
            languages={i.languages}
            DetailsIncludesPL={i.DetailsIncludesPL}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
