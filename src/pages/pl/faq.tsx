import React from "react";
import Head from "next/head";
import HeaderPL from "../../components/Header/headerPL";
import Faqelement from "../../components/Faq/faqelement";
import Footer from "../../components/Footer/footer";

export default function FaqPL() {
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
      <HeaderPL />
      <div className='w-screen h-[300px] bg-[url("/Main_theme.png")] bg-top bg-cover bg-no-repeat flex items-center justify-center text-white relative'>
        <div className="absolute w-full h-full bg-gray-900/[0.7] z-0"></div>
        <div className="flex items-center justify-center flex-col w-[65%] z-10">
          <p className="text-[40px] font-semibold">Znajdź odpowiedzi</p>
          <p className="text-[20px]">Na najczęściej zadawane pytania</p>
        </div>
      </div>
      <div id="Faq-wrapper" className=" border w-screen min-h-[400px] z-20 relative">
        <Faqelement />
      </div>
      <Footer />
    </>
  );
}
