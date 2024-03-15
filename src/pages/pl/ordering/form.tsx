import React, {
  useEffect,
  useLayoutEffect,
  Component,
  useContext,
  useRef,
  useState,
  useCallback,
} from "react";
import { Montserrat } from "next/font/google";
import { Ubuntu } from "next/font/google";
import ChooseparamsPL from "../../../components/chooseparamsPL";
import HeaderPL from "../../../components/Header/headerPL";
import SearchPL from "../../../components/MainPage/Search/searchPL";
import Link from "next/link";
import Head from "next/head";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidMap } from "react-icons/bi";
import FooterPL from "../../../components/Footer/footerPL";
import { AppContext } from "../../_app";

const rubikFonts = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Summary() {
  const {
    latLangFrom,
    setlatLangFrom,
    mapLongitude,
    setMapLongitude,
    mapLatitude,
    setMapLatitude,
    mapUpdated,
    setMapUpdated,
    SearchButtonWasClicked,
    setSearchButtonWasClicked,
  } = useContext(AppContext);

  setSearchButtonWasClicked(true);

  return (
    <div className={`${MontserratFont.className}`}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Twoja najlepsza podróż</title>
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
      <div
        id="search-wrapper-ordering"
        className='pt-[100px] relative h-auto lg:h-auto bg-[url("/Main_theme.png")] bg-top bg-cover bg-no-repeat bg-fixed'
      >
        <div
          className={`w-screen  h-auto lg:h-[1200px] rounded-t-[40px] z-20 bottom-0 border-red-900`}
        >
          <SearchPL />
          <ChooseparamsPL />
        </div>
      </div>
      <FooterPL />
    </div>
  );
}
