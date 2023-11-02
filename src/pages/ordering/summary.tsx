import React, {
  useEffect,
  useLayoutEffect,
  Component,
  useContext,
  useRef,
  useState,
  useCallback,
} from "react";
import { Ubuntu } from "next/font/google";
import Chooseparams from "./chooseparams";
import Header from "../Header/header";
import Search from "../MainPage/Search/search";
import Link from "next/link";
import Head from "next/head";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidMap } from "react-icons/bi";
import Footer from "../Footer/footer";
import { AppContext } from "../_app";

const rubikFonts = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
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
    <div className={`${rubikFonts.className}`}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Your best drive</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
        <link
          rel="stylesheet"
          type="text/css"
          href="/cdn.web-sdk-maps/maps.css"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="../assets/ui-library/index.css"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="/cdn.web-sdk-plugin-searchbox/SearchBox.css"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="../assets/ui-library/icons-css/poi.css"
        ></link>
      </Head>
      <Header />
      <div
        id="search-wrapper-ordering"
        className='pt-[100px] relative h-[1600px] bg-[url("/Main_theme.png")] bg-top bg-cover bg-no-repeat bg-fixed'
      >
        <div className={`w-screen  h-[350px] rounded-t-[40px] z-20 bottom-0`}>
          <Search />
          <Chooseparams />
        </div>
      </div>
      <Footer />
    </div>
  );
}
