import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Buffer } from "buffer";
import Header from "../Header/header";

import { AppContext } from "../_app";

export default function Payment() {
  const router = useRouter();

  const {
    queryFrom,
    setQueryFrom,
    queryTo,
    setQueryTo,
    date,
    setDate,
    time,
    setTime,
    people,
    setPeople,
    latLangFrom,
    setlatLangFrom,
    latLangTo,
    setlatLangTo,
    cars,
    setCars,
    calculateDistance,
    setCalculateDistance,
    isFormCompleted,
    setIsFromCompleted,
    SearchButtonWasClicked,
    setSearchButtonWasClicked,
    dateLimit,
    setDateLimit,
    personTitle,
    setPersonTitle,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    phonePrefix,
    setPhonePrefix,
    price,
    setPrice,
  } = useContext(AppContext);

  const ID = process.env.P24_ID;
  const PASS = process.env.P24_ID;
  const data_ID = Buffer.from(
    `${process.env.P24_ID}:${process.env.P24_API}`,
  ).toString("base64");

  const [data, setData] = useState();

  const fire = async () => {
    let res = await fetch("/api/p24");
    const token = await res.json();
    console.log(token.msg);

    window.open(
      `https://sandbox.przelewy24.pl/trnRequest/${token.msg.data.token}`,
      "_blank",
    );
  };

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
          onClick={fire}
        >
          Pay & Order
        </div>
      </div>
    </div>
  );
}
