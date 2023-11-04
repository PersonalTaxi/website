import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Buffer } from "buffer";
import bcrypt from "bcrypt";
import Header from "../Header/header";
import RegisterInDataBase from "@/components/registerindatabase";
import { sha384 } from "crypto-hash";
import { AppContext } from "../_app";

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
  } = useContext(AppContext);

  const [data, setData] = useState();

  const handleRedirectTpPayments = async () => {
    let merchantId = 27407;
    const UniqeNumber = Date.now().toString();
    let sessionId = UniqeNumber;
    let amount = price * 100;
    let currency = "PLN";
    let crc = "fccb3ef343fe113a";

    const querySign = async () => {
      const DatCRC = `{"sessionId":"${sessionId}","merchantId":${merchantId},"amount":${amount},"currency":"${currency}","crc":"${crc}"}`;
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
      urlReturn: "https://ptbeta.vercel.app/ordering/verify",
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
      email: "test@test.pl",
      description: "tax beta",
      country: "PL",
      amount: amount,
      currency: "PLN",
      merchantId: 27407,
      posId: 27407,
      sessionId: sessionId,
      sign: sign,
    });

    await RegisterInDataBase(DataForDatabase);

    let res = await fetch("/api/p24", {
      method: "POST",
      body: query,
    });
    const token = await res.json();
    console.log(token.msg);

    router.replace(
      `https://sandbox.przelewy24.pl/trnRequest/${token.msg.data.token}`,
    );
  };

  console.log(isFormCompleted)

  return (
    <div>
      <Header />
      <div className="w-screen flex flex-wrap">{data}</div>
      <div className='w-screen h-[180px] bg-[url("/Main_theme.png")] bg-top bg-cover bg-no-repeat flex items-center justify-center text-white relative'>
        <div className="absolute w-full h-full bg-gray-900/[0.7] z-0"></div>
        <div className="flex items-center justify-center flex-col w-[90%] z-10 mt-[30px]">
          <p className="text-[25px] font-semibold">Summary & Payment</p>
        </div>
      </div>
      {isFormCompleted === false && (
        <div className="h-[70vh] flex justify-center items-center flex-col">
          <div className="w-[80%] mx-auto text-[20px] text-center mb-[15px]">
            Sorry, your has session expired
          </div>
          <Link
            href="/"
            className="mx-auto px-[40px] py-[5px] bg-blue-500 text-white text-[20px] rounded-[10px]"
          >
            Try Again
          </Link>
        </div>
      )}
      {isFormCompleted !== false && (
        <div className="w-screen flex justify-center items-center flex-col pt-[20px]">
          <div className="w-[90%] mx-auto">
            {/* <p className="font-semibold mb-[5px]">Your route</p> */}
            <div className="flex flex-col">
              <div className="flex">
                <p className="w-[65px] font-semibold">From:</p>
                <p className="">{queryFrom}</p>
              </div>
              <div className="flex">
                <p className="w-[65px] font-semibold">To:</p>
                <p className="">{queryTo}</p>
              </div>
              <div className="flex mt-[15px]">
                <p className="w-[135px] font-semibold">Date and time: </p>
                <p className="">{date.replaceAll("T", " at ")}</p>
              </div>
              <div className="flex">
                <p className="w-[135px] font-semibold">Drive distance:</p>
                <p className="">{calculateDistance} km</p>
              </div>
              <div className="flex">
                <p className="w-[135px] font-semibold pr-[5px]">Car(s): </p>
                <p className="">
                  Eco Sedan: {cars.sedan}, Van: {cars.van}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            <p className="font-semibold my-[5px]">About You</p>
            <div className="flex flex-col">
              <div className="flex">
                <p className="w-[100px]">Title</p>
                <p className="">{personTitle}</p>
              </div>
              <div className="flex">
                <p className="w-[100px]">First name:</p>
                <p className="">{firstName}</p>
              </div>
              <div className="flex">
                <p className="w-[100px]">Last Name</p>
                <p className="">{lastName}</p>
              </div>
              <div className="flex">
                <p className="w-[100px]">E-mail</p>
                <p className="">{email}</p>
              </div>
              <div className="flex">
                <p className="w-[100px]">Phone</p>
                <p className="">
                  {phonePrefix} {phone}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto flex mt-[10px] text-[20px] font-bold">
            <p className="w-[100px]">Full price</p>
            <p className="">{price} zł</p>
          </div>
          <div
            className="w-[80%] mx-auto rounded-[25px] bg-yellow-500 text-center py-[10px] mt-[20px] text-white text-[20px]"
            onClick={handleRedirectTpPayments}
          >
            Pay & Order
          </div>
        </div>
      )}
    </div>
  );
}
