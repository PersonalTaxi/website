import React from "react";
import Head from "next/head";
import Header from "./Header/header";
import Image from "next/image";
import Footer from "./Footer/footer";
import Aboutuscontent from "@/components/aboutuscontent";

export default function Aboutus() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Personal Taxi - About Us</title>
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
      <div className='w-screen h-auto bg-[url("/Main_theme.png")] bg-top bg-cover bg-no-repeat flex items-center justify-center text-white relative'>
        <div className="absolute w-full h-full bg-gray-900/[0.7] z-0"></div>
        <div className="flex items-center justify-center flex-col w-[65%] h-[300px] lg:h-[400px] z-10">
          <p className="lg:text-[70px] text-[30px] text-center font-[300] lg:w-[800px]">
            We promise you to always be in time
          </p>
        </div>
      </div>
      <div className="w-screen bg-white h-auto lg:py-[80px] pb-[50px]">
        {/* OUR MISSION */}
        <div className="lg:w-[1100px] h-[500px] mx-auto lg:y-[50px]">
          <div id="our-mission-container" className="flex h-full">
            <div
              id="mission-photo"
              className="w-1/2 h-[400px] relative object-contain pr-[50px] bg-yellow-400 lg:block hidden"
            >
              <Image
                className="object-cover m-[10px]"
                src="/aboutus_1.png"
                // width={200}
                // height={200}
                fill
                alt="pl
              "
              />
            </div>
            <div
              id="our-mission-desc"
              className="lg:w-1/2 w-full lg:h-[400px] px-[20px] flex flex-col justify-center items-center"
            >
              <div className="h-[70%] flex flex-col justify-evenly">
                <p className="text-[40px]">Our mission</p>
                <div className="w-[80px] h-[4px] bg-yellow-500"></div>
                <p className="text-[24px] leading-6 font-[300]">
                  "<b className="italic">We are going to be there in time".</b>{" "}
                  Our mission is to serve you the best possible taxi service.
                  After thousand courses we know what our customers need and
                  want. We would like to meet your needs as well. <br></br>
                  <br></br>You can surely count on us.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* OUR TEAM */}
        <div className="lg:w-[1100px] h-[500px] mx-auto lg:py-[50px]">
          <div id="our-mission-container" className="flex h-full">
            <div className="lg:w-1/2 w-full h-[400px] px-[20px] flex flex-col justify-center items-center">
              <div className="h-[70%] flex flex-col justify-evenly lg:items-end">
                <p className="text-[40px]">Our team</p>
                <div className="w-[80px] h-[4px] bg-yellow-500"></div>
                <p className="text-[24px] leading-6 font-[300] lg:text-right">
                  "<b className="italic">"We are always ready".</b> In our team
                  we have more than 100 expirienced drivers. If you will decide
                  to takie our cab and go with us we will be always able to
                  serve your order. <br></br>
                  <br></br>There is now doubt about that.
                </p>
              </div>
            </div>
            <div
              id="mission-photo"
              className=" w-1/2 lg:h-[400px] relative object-contain px-[50px] bg-yellow-400 lg:block hidden"
            >
              <Image
                className="object-cover -m-[10px]"
                src="/aboutus_2.png"
                fill
                alt="pl
              "
              />
            </div>
          </div>
          <div id="our-team-container">
            <div id="mission-desc"></div>
          </div>
        </div>
        {/* WHAT WE DO */}
        <div className="lg:w-[1100px] lg:h-[500px] h-[850px] mx-auto lg:py-[50px]">
          <p className="text-[40px] text-center">We will do for you</p>
          <div className="w-full h-full flex items-center">
            <Aboutuscontent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
