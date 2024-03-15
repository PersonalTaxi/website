import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import RegisterInTaxiDataBase from "@/components/registerintaxidatabase";
import { sha384 } from "crypto-hash";
import { AppContext } from "../_app";

export default function Payment() {
  const router = useRouter();

  const {
    serviceType,
    queryFrom,
    queryTo,
    latLangFrom,
    latLangTo,
    date,
    cars,
    calculateDistance,
    personTitle,
    firstName,
    lastName,
    email,
    phone,
    phonePrefix,
    isFormCompleted,
    whatIsOrdering,
    setWhatIsOrdering,
    sessionIdContext,
    setSessionIdContext,
    flightNumber,
    unusualItems,
    infoForDriver,
    currencyTXT,
    setCurrencyTXT,
    price,
    setPrice,

    //travel
    travelDate,
    travelTime,
    travelDestination,
    travelLocalizationFrom,
    travelFirstName,
    travelLastName,
    travelEmail,
    travelPrefixPhone,
    travelPhone,
    combi,
    setCombi,
  } = useContext(AppContext);

  // const CheckCarsOnLoad = () => {
  //   if (cars.sedan === 1 && combi === false) {
  //     return "Eco Sedan";
  //   }
  //   if (cars.sedan === 1 && combi === true) {
  //     return "Eco Sedan, combi";
  //   } else {
  //     return "Mini Van";
  //   }
  // };

  // const [carType, setCarType] = useState(CheckCarsOnLoad());

  const [data, setData] = useState();
  const [redirecting, setRedirecting] = useState(false);

  const handleRedirectToPayments = async () => {
    let merchantId = 27407;
    const UniqeNumber = Date.now().toString();
    let sessionId = UniqeNumber;
    let amount = price * 100;
    let currency = currencyTXT;
    let crc = await fetch("/api/getcrc").then((res) => res.json());

    setRedirecting(true);

    // console.log(await crc.data);

    const querySign = async () => {
      const DatCRC = `{"sessionId":"${sessionId}","merchantId":${merchantId},"amount":${amount},"currency":"${currency}","crc":"${crc.data}"}`;
      return await sha384(DatCRC);
    };

    const sign = await querySign();

    let CountryISO = "PL";
    if (router.asPath.includes("pl")) {
      CountryISO = "PL";
    } else {
      CountryISO = "EN";
    }

    let type;

    if (serviceType === "travel") {
      type = "travel";
    } else {
      type = "taxi";
    }

    let query = JSON.stringify({
      merchantId: 27407,
      posId: 27407,
      sessionId: sessionId,
      amount: amount,
      currency: currencyTXT,
      description: "ordering taxi",
      email: email,
      country: CountryISO,
      language: "en",
      urlReturn: `https://personaltaxi.pl/ordering/verify?type=taxi`,
      urlStatus: "https://ptbackend.vercel.app/",
      sign: sign,
    });

    //register order details in MongoDB

    const DataForDatabaseTaxi = JSON.stringify({
      id: sessionIdContext,
      From: queryFrom,
      To: queryTo,
      distance: calculateDistance,
      dateAndTime: date,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: `${phonePrefix} ${phone}`,
      description: "Taxi order",
      country: "PL",
      price: price,
      currency: "PLN",
      flightNumber: flightNumber,
      infoForDriver: infoForDriver,
      unusualItems: unusualItems,
      merchantId: 27407,
      posId: 27407,
      sessionId: sessionId,
      orderId: "working...",
      sign: sign,
      startFromGeo: latLangFrom,
      directionGeo: latLangTo,
    });

    await RegisterInTaxiDataBase(DataForDatabaseTaxi);

    let res = await fetch("/api/p24", {
      method: "POST",
      body: query,
    });

    const token = await res.json();
    console.log(token.msg);

    router.replace(`https://secure.przelewy24.pl/trnRequest/${token.msg.data.token}`);
  };

  return (
    <div>
      <Header />
      <div className="w-screen flex flex-wrap">{data}</div>
      {isFormCompleted === false && (
        <>
          <div className="w-screen h-[180px] bg-[url('/Main_theme.png')] py-[30px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-white relative">
            <div className="flex items-center justify-center flex-col w-[90%] z-10 mt-[30px]">
              <p className="text-[35px] font-semibold">Summary & Payment</p>
            </div>
          </div>
          <div className="h-[70vh] flex justify-center items-center flex-col">
            <div className="w-[80%] mx-auto text-[20px] text-center mb-[15px]">
              Sorry, your session has expired
            </div>
            <Link
              href="/"
              className="mx-auto px-[40px] py-[5px] bg-blue-500 text-white text-[20px] rounded-[10px]"
            >
              Try Again
            </Link>
          </div>
        </>
      )}
      {isFormCompleted !== false && (
        <>
          <div
            id="container"
            className="w-screen flex flex-col justify-center items-start mx-auto px-[15px] bg-[url('/Main_theme.png')] py-[30px] bg-center bg-cover bg-no-repeat"
          >
            <div className="w-full h-[180px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-white relative">
              <div className="flex items-center justify-center flex-col w-[90%] z-10 mt-[30px] mx-auto">
                <p className="text-[35px] font-semibold text-center">Summary & Payment</p>
              </div>
            </div>
            <div className="lg:w-[40vw] w-[90vw] flex justify-center items-center flex-col bg-white mx-auto rounded-t-[10px]">
              <div className="w-[90%] mx-auto">
                <p className="font-semibold my-[15px] text-[20px] bg-yellow-500 text-white pl-[10px] rounded-[5px]">
                  About route and course date
                </p>
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="lg:w-[140px] w-[80px] font-semibold">From:</p>
                    <p className="w-[230px]">{queryFrom}</p>
                  </div>
                  <div className="flex">
                    <p className="lg:w-[140px] w-[80px] font-semibold">To:</p>
                    <p className="w-[230px]">{queryTo}</p>
                  </div>
                  <div className="flex mt-[15px]">
                    <p className="w-[140px] font-semibold">Date and time: </p>
                    <p className="">{date.replaceAll("T", " at ")}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-semibold">Drive distance:</p>
                    <p className="">{calculateDistance} km</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-semibold pr-[5px]">Car type: </p>
                    <p className="">{cars}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-semibold pr-[5px]">Combi: </p>
                    <p className="">{combi == true ? "Yes" : "No"}</p>
                  </div>
                </div>
              </div>
              <div className="w-[90%] mx-auto">
                <p className="font-semibold my-[15px] text-[20px] bg-yellow-500 text-white pl-[10px] rounded-[5px]">
                  About You
                </p>
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="w-[140px] font-bold">Title:</p>
                    <p className="">{personTitle}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-bold">First name:</p>
                    <p className="">{firstName}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-bold">Last Name:</p>
                    <p className="">{lastName}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-bold">E-mail:</p>
                    <p className="">{email}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-bold">Phone:</p>
                    <p className="">
                      {phonePrefix} {phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[90%] mx-auto flex mt-[10px] text-[20px] font-bold bg-yellow-500 text-white pl-[10px] rounded-[5px]">
                <p className="w-[140px]">Full price:</p>
                <p className="">
                  {price} {currencyTXT}
                </p>
              </div>
            </div>
            <div className="lg:w-[40vw] w-[90vw] flex justify-center items-center flex-col py-[20px] mx-auto bg-white rounded-b-[10px]">
              <div className="w-[90%] mx-auto">
                {/* <p className="font-semibold mb-[5px]">Your route</p> */}
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="w-[235px] font-semibold">Flight number:</p>
                    <p className="w-full">{flightNumber}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="w-[235px] font-semibold">Massege to driver:</p>
                    <p className="w-full">{infoForDriver}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="w-[235px] font-semibold">About unusual items: </p>
                    <p className="">{unusualItems}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                redirecting === false
                  ? "w-[80%] md:w-[20%] mx-auto rounded-[25px] bg-yellow-500 border-2 border-yellow-500 text-center py-[10px] mt-[20px] text-white text-[20px] duration-200 hover:text-black hover:bg-white hover:border-gray-900 cursor-pointer"
                  : "w-[80%] md:w-[20%] mx-auto rounded-[25px] bg-white text-center py-[10px] mt-[20px] text-black text-[20px] duration-200 hover:text-black cursor-pointer"
              }
              onClick={handleRedirectToPayments}
            >
              {redirecting === false && <p>Pay & Order</p>}
              {redirecting === true && <p>Redirecting to payment...</p>}
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
