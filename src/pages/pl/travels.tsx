import React, { useState } from "react";
import Head from "next/head";
import Header from "../Header/headerPL";
import { useRouter } from "next/router";
import Footer from "../Footer/footerPL";
import Travelcomponent from "@/components/travelscomponents/travelcomponent";
import TravelsList from "../../data/travels.json";
import Languages from "../../data/languages.json";

export default function Travels() {
  const router = useRouter();

  const checkActualLanguage = () => {
    if (router.asPath.includes("/pl")) {
      return {
        Languages: Languages.PL,
        Travels: TravelsList.PL,
      };
    } else {
      return {
        Languages: Languages.EN,
        Travels: TravelsList.EN,
      };
    }
  };

  const [actualLanguage, setActualLanguage] = useState(checkActualLanguage());

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Personal Taxi - Podróże</title>
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
      <div className='w-screen lg:h-[300px] h-[150px] bg-[url("/travel_bg_top.png")] bg-top bg-cover bg-no-repeat flex items-center justify-center text-white relative'>
        <div className="absolute w-full h-full bg-gray-900/[0.7] z-0"></div>
        <div className="flex items-center justify-center flex-col w-[65%] z-10">
          <p className="lg:text-[60px] text-[30px] font-[300] pt-[40px]">Podróżuj z nami</p>
        </div>
      </div>
      <div id="Faq-wrapper" className="border w-screen min-h-[400px] z-20 relative flex flex-col">
        {actualLanguage.Travels.map((i: any) => (
          <Travelcomponent
            id={i.id}
            key={i.name}
            name={i.name}
            type={i.type}
            description={i.description}
            photo={i.photo}
            sedan_price_PL={i.sedan_price_PL}
            premium_sedan_price_PL={i.premium_sedan_price_PL}
            van_price_PL={i.van_price_PL}
            sedan_price_EUR={i.sedan_price_EUR}
            premium_sedan_price_EUR={i.premium_sedan_price_EUR}
            van_price_EUR={i.van_price_EUR}
            timeFromKrakow={i.timeFromKrakow}
            totalLengthDistance={i.totalLengthDistance}
            totalTripLenght={i.totalTripLenght}
            MainTravelTime={i.MainTravelTime}
            languages={i.languages}
            DetailsIncludes={i.DetailsIncludes}
            //travels
            Travel_component_from_Cracow={actualLanguage.Languages[0].Travel_component_from_Cracow}
            Travel_component_tour_time_with_transfer={
              actualLanguage.Languages[0].Travel_component_tour_time_with_transfer
            }
            Travel_component_tour_time={actualLanguage.Languages[0].Travel_component_tour_time}
            Travel_component_info_about_drive={
              actualLanguage.Languages[0].Travel_component_info_about_drive
            }
            Travel_component_info_about_tickets={
              actualLanguage.Languages[0].Travel_component_info_about_tickets
            }
            Travel_component_info_about_starting_point={
              actualLanguage.Languages[0].Travel_component_info_about_starting_point
            }
            Travel_component_button_order={
              actualLanguage.Languages[0].Travel_component_button_order
            }
            Travel_component_button_more_details={
              actualLanguage.Languages[0].Travel_component_button_more_details
            }
            Travel_component_button_less_details={
              actualLanguage.Languages[0].Travel_component_button_less_details
            }
            Travel_component_change_currency_to_EUR={
              actualLanguage.Languages[0].Travel_component_change_currency_to_EUR
            }
            Travel_component_change_currency_to_PL={
              actualLanguage.Languages[0].Travel_component_change_currency_to_PL
            }
            Travel_component_more_details_price_includes={
              actualLanguage.Languages[0].Travel_component_more_details_price_includes
            }
            Travel_component_more_details_main_tour_time={
              actualLanguage.Languages[0].Travel_component_more_details_main_tour_time
            }
            Travel_component_more_details_total_tour_time={
              actualLanguage.Languages[0].Travel_component_more_details_total_tour_time
            }
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
