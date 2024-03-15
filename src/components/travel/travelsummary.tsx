import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../pages/Header/header";
import Footer from "../Footer/footer";
import { AppContext } from "../../pages/_app";
import RegisterInTravelDataBase from "@/components/registerintraveldatabase";
import Travels from "../../data/travels.json";
import { IoIosWarning } from "react-icons/io";
import Link from "next/link";
import { sha384 } from "crypto-hash";

export default function TravelSummary() {
  const {
    travelId,
    travelDestination,
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
    travelCar,
    setTravelCar,
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
    whatIsOrdering,
    travelPrice,
    serviceType,
    currencyTXT,
    finalTravelPrice,
    howEarly,
  } = useContext(AppContext);

  const router = useRouter();

  const checkHowMuchEarlierWeNeedToLeaveOnLoad = () => {
    let HowMuchEarlier = 0;
    Travels.PL.map((i) => {
      if (i.id === travelId) {
        HowMuchEarlier = i.earlier_by_mins;
      }
    });
    return HowMuchEarlier;
  };

  const [isDataCompleted, setIsDataCompleted] = useState(false);
  const time = travelTime.split(":");
  const ToMinutes: number = time[0] * 60 + parseInt(time[1]);
  const PickupTime = ToMinutes - checkHowMuchEarlierWeNeedToLeaveOnLoad();
  const PickupHour = Math.floor(PickupTime / 60);
  const PickupMins = () => {
    if (PickupTime % 60 < 10) {
      return `0${PickupTime % 60}`;
    } else {
      return PickupTime % 60;
    }
  };

  const CeckIfAllDataIsCollected = () => {
    if (router.query.destination === "") return false;
    if (travelLocalizationFrom === undefined || travelLocalizationFrom === "") return false;
    if (travelDate === undefined) return false;
    if (travelTime === undefined) return false;
    if (travelFirstName === undefined) return false;
    if (travelLastName === undefined) return false;
    if (travelEmail === undefined) return false;
    if (travelPrefixPhone === undefined) return false;
    if (travelPhone === undefined) return false;
    if (travelPrice === undefined) return false;
    if (travelLocalizationFrom === "empty") return false;

    if (isDataCompleted === false) {
      setIsDataCompleted(true);
    }
  };

  CeckIfAllDataIsCollected();

  console.log(travelId);

  let Localization;

  if (travelLocalizationFrom === "idk") {
    Localization =
      "(localization will be sent by mail to office@personaltaxi.pl as soon as possible)";
  } else {
    Localization = travelLocalizationFrom;
  }

  const handleStartPayment = async () => {
    let merchantId = 27407;
    const UniqeNumber = Date.now().toString();
    let sessionId = UniqeNumber;
    let amount = finalTravelPrice * 100;
    let currency = currencyTXT;
    let crc = await fetch("/api/getcrc").then((res) => res.json());

    const querySign = async () => {
      const DatCRC = `{"sessionId":"${sessionId}","merchantId":${merchantId},"amount":${amount},"currency":"${currency}","crc":"${crc.data}"}`;
      return await sha384(DatCRC);
    };

    const sign = await querySign();

    let query = JSON.stringify({
      merchantId: 27407,
      posId: 27407,
      sessionId: sessionId,
      amount: amount,
      currency: currencyTXT,
      description: "ordering taxi",
      email: travelEmail,
      country: "PL",
      language: "pl",
      urlReturn: `https://personaltaxi.pl/ordering/verify?type=travel`,
      urlStatus: "https://ptbackend.vercel.app/",
      sign: sign,
    });

    const DataForDatabaseTravel = JSON.stringify({
      Travel_to: travelDestination,
      Travel_date: travelDate,
      Tour_start_at: travelTime,
      Pick_up_from_localization: travelLocalizationFrom,
      Pick_up_at_hour: `${PickupHour}:${PickupMins()}`,
      Tour_only_time: "working...",
      Travel_all_time: "working...",
      Drive_time_one_way: "working...",
      First_name: travelFirstName,
      Last_name: travelLastName,
      Email: travelEmail,
      Phone_prefix: travelPrefixPhone,
      Phone: travelPhone,
      Description: "travel to " + travelDestination,
      Launguage: "working...",
      People: persons,
      Price: finalTravelPrice,
      Currency: currency,
      Info_for_driver: travelMassage,
      merchantId: 27407,
      Car_type: travelCar,
      posId: 27407,
      sessionId: sessionId,
      orderId: "working...",
      sign: sign,
    });

    await RegisterInTravelDataBase(DataForDatabaseTravel);

    let res = await fetch("/api/p24", {
      method: "POST",
      body: query,
    });

    const token = await res.json();
    console.log(token.msg);

    router.replace(`https://secure.przelewy24.pl/trnRequest/${token.msg.data.token}`);
  };

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Personal Taxi - Travel Summary</title>
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
          <p className="lg:text-[40px] text-[30px] mt-[40px] font-semibold">Your travel Summary</p>
        </div>
      </div>
      {isDataCompleted === true && (
        <div id="summary-wrapper" className="w-screen min-h-[400px] z-20 relative my-[20px]">
          <div id="ordering-wrapper" className="lg:w-[700px] w-[90%] mx-auto flex flex-col">
            <div>
              <p className="text-[24px] text-center w-full font-bold">Dear {travelFirstName}!</p>
              <p className="mt-[10px]">
                You are about to go to <b>{router.query.destination}</b> with us!
              </p>
              <p className="mt-[10px] font-semibold">How it will looks like?</p>
              <p className="mt-[5px]">
                <p>1. We will drive you two-ways. </p>
                <p>
                  2. We will be waiting for your through your main-travel.
                  {/* This tour should take aprox 3:50 h. */}
                </p>
                <p>
                  3. You choosed that on this trip will go summary <b>{persons} </b>people. So we
                  are going to drive by {travelCar}
                </p>
                <p>4. You have to buy all the tickets on your own.</p>
                <p>
                  5. If you want to be in <b>{router.query.destination}</b> on <b>{travelDate}</b>{" "}
                  at <b>{travelTime} hour</b> we have to leave earlier enought so we will pick you
                  up from <b>{Localization}</b> on at{" "}
                  <b>
                    {PickupHour}:{PickupMins()} hour.
                  </b>
                </p>
              </p>
            </div>
            <div id="personal-data-travel" className="mt-[20px]">
              <p className="font-bold mb-[10px]">Check if your personal data is correct:</p>
              <div id="name-and-forname">
                <p>
                  <b>Full name: </b>
                  {travelFirstName} {travelLastName}
                </p>
              </div>
              <div id="name-and-forname" className="">
                <p>
                  <b>E-mail: </b> {travelEmail}
                </p>
              </div>
              <div id="name-and-forname">
                <p>
                  <b>Phone: </b>
                  {travelPrefixPhone} {travelPhone}
                </p>
              </div>
              <div>
                <div className="mt-[30px]">
                  <b>Final Price</b> {finalTravelPrice} {currencyTXT}
                </div>
                <p className="italic text-[12px] mt-[20px]">
                  You&lsquo;ve also confirmed Privacy Policy and Terms. By clicking button below you
                  will confirm all above information and start making an order with payment.{" "}
                </p>
              </div>
              <button
                className="bg-blue-300 px-[30px] py-[5px] rounded-[10px] text-[20px] mt-[30px]"
                onClick={handleStartPayment}
              >
                Pay & Order for {finalTravelPrice} {currencyTXT}
              </button>
            </div>
          </div>
        </div>
      )}
      {isDataCompleted === false && (
        <div className="w-screen h-auto flex justify-center items-center py-[60px]">
          <div className="flex flex-col items-center p-[40px]">
            <IoIosWarning className="text-red-600 w-[90px] h-[90px] mb-[20px]" />
            <div className="text-[20px]">Something went wrong :(</div>
            <Link
              href="/travels"
              className="bg-blue-400 text-white text-[20px] px-[10px] py-[3px] rounded-[10px] mt-[10px]"
            >
              Try again
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
