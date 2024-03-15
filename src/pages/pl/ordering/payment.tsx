import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import HeaderPL from "../../../components/Header/headerPL";
import FooterPL from "@/components/Footer/footerPL";
import RegisterInDataBase from "@/components/registerintraveldatabase";
import { sha384 } from "crypto-hash";
import { AppContext } from "../../_app";

export default function Payment() {
  const router = useRouter();

  const {
    queryFrom,
    queryTo,
    date,
    cars,
    calculateDistance,
    personTitle,
    firstName,
    lastName,
    email,
    phone,
    phonePrefix,
    price,
    isFormCompleted,
    sessionIdContext,
    setSessionIdContext,
    currencyTXT,
    setCurrencyTXT,
    flightNumber,
    unusualItems,
    infoForDriver,
    combi,
    setCombi,
  } = useContext(AppContext);

  const CheckCarsOnLoad = () => {
    if (cars.sedan === 1 && combi === false) {
      return "Eco Sedan";
    }
    if (cars.sedan === 1 && combi === true) {
      return "Eco Sedan, combi";
    } else {
      return "Mini Van";
    }
  };

  const [carType, setCarType] = useState(CheckCarsOnLoad());

  const [data, setData] = useState();
  const [redirecting, setRedirecting] = useState(false);

  const handleRedirectToPayments = async () => {
    let merchantId = 27407;
    const UniqeNumber = Date.now().toString();
    let sessionId = UniqeNumber;
    let amount = price * 100;
    let currency = "PLN";
    let crc = await fetch("/api/getcrc").then((res) => res.json());

    // console.log(await crc.data);

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
      currency: "PLN",
      description: "ordering taxi",
      email: email,
      country: "PL",
      language: "pl",
      urlReturn: "https://personaltaxi.pl/pl/ordering/verify",
      urlStatus: "https://ptbackend.vercel.app/",
      sign: sign,
    });

    //register order details in MongoDB
    const DataForDatabase = JSON.stringify({
      From: queryFrom,
      To: queryTo,
      distance: calculateDistance,
      firstName: firstName,
      lastName: lastName,
      email: email,
      description: "ordering taxi",
      country: "PL",
      price: price,
      currency: "PLN",
      infoForDriver: infoForDriver,
      unusualItems: unusualItems,
      merchantId: 27407,
      posId: 27407,
      sessionId: sessionId,
      sign: sign,
    });

    await RegisterInDataBase(DataForDatabase);

    setRedirecting(true);

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
      <HeaderPL />
      <div className="w-screen flex flex-wrap">{data}</div>
      {isFormCompleted === false && (
        <>
          <div className="w-screen h-[180px] bg-[url('/Main_theme.png')] py-[30px] bg-center bg-cover bg-no-repeat flex items-center justify-center text-white relative">
            <div className="flex items-center justify-center flex-col w-[90%] z-10 mt-[30px]">
              <p className="text-[35px] font-semibold">Podsumowanie i płatność</p>
            </div>
          </div>
          <div className="h-[70vh] flex justify-center items-center flex-col">
            <div className="w-[80%] mx-auto text-[20px] text-center mb-[15px]">
              Przepraszamy, sesj wygasła
            </div>
            <Link
              href="/"
              className="mx-auto px-[40px] py-[5px] bg-blue-500 text-white text-[20px] rounded-[10px]"
            >
              Spróbuj ponownie
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
                <p className="text-[35px] font-semibold text-center">Podsumowanie i płatność</p>
              </div>
            </div>
            <div className="lg:w-[40vw] w-[90vw] flex justify-center items-center flex-col bg-white mx-auto rounded-t-[10px]">
              <div className="w-[90%] mx-auto">
                <p className="font-semibold my-[15px] text-[20px] bg-yellow-500 text-white pl-[10px] rounded-[5px]">
                  Trasa i data kursu
                </p>
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="lg:w-[140px] w-[80px] font-semibold">Początek:</p>
                    <p className="w-[230px]">{queryFrom}</p>
                  </div>
                  <div className="flex">
                    <p className="lg:w-[140px] w-[80px] font-semibold">Koniec:</p>
                    <p className="w-[230px]">{queryTo}</p>
                  </div>
                  <div className="flex mt-[15px]">
                    <p className="w-[140px] font-semibold">Data i godzina: </p>
                    <p className="">{date.replaceAll("T", " at ")}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-semibold">Dystans trasy:</p>
                    <p className="">{calculateDistance} km</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-semibold pr-[5px]">Rodzaj pojazdu: </p>
                    <p className="">{carType}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-semibold pr-[5px]">Combi: </p>
                    <p className="">{combi == true ? "Tak" : "Nie"}</p>
                  </div>
                </div>
              </div>
              <div className="w-[90%] mx-auto">
                <p className="font-semibold my-[15px] text-[20px] bg-yellow-500 text-white pl-[10px] rounded-[5px]">
                  Dane personalne
                </p>
                <div className="flex flex-col">
                  <div className="flex">
                    <p className="w-[140px] font-bold">Tytuł:</p>
                    <p className="">{personTitle}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-bold">Imię:</p>
                    <p className="">{firstName}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-bold">Nazwisko:</p>
                    <p className="">{lastName}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-bold">E-mail:</p>
                    <p className="">{email}</p>
                  </div>
                  <div className="flex">
                    <p className="w-[140px] font-bold">Telefo :</p>
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
                  : "w-[80%] md:w-[20%] mx-auto rounded-[25px] border-gray-900 text-center py-[10px] mt-[20px] text-black text-[20px] duration-200 hover:text-black cursor-pointer"
              }
              onClick={handleRedirectToPayments}
            >
              {redirecting === false && <p>Pay & Order</p>}
              {redirecting === true && <p>Redirecting to payment...</p>}
            </div>
          </div>
        </>
      )}
      <FooterPL />
    </div>
  );
}
