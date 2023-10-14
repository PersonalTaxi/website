import React, { useContext } from "react";
import Head from "next/head";
import Header from "../Header/header";

import { AppContext } from "../_app";

export default function Payment() {
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

  <div className='w-screen h-[300px] bg-[url("/Main_theme.png")] bg-top bg-cover bg-no-repeat flex items-center justify-center text-white relative'>
    <div className="absolute w-full h-full bg-gray-900/[0.7] z-0"></div>
    <div className="flex items-center justify-center flex-col w-[65%] z-10">
      <p className="text-[40px] font-semibold">Find Answers</p>
      <p>For the most important and commons questions</p>
    </div>
  </div>;

  return (
    <div>
      <Header />
      <div className='w-screen h-[180px] bg-[url("/Main_theme.png")] bg-top bg-cover bg-no-repeat flex items-center justify-center text-white relative'>
        <div className="absolute w-full h-full bg-gray-900/[0.7] z-0"></div>
        <div className="flex items-center justify-center flex-col w-[90%] z-10 mt-[30px]">
          <p className="text-[25px] font-semibold">Summary & Payment</p>
          {/* <p>For the most important and commons questions</p> */}
        </div>
      </div>
      <div className="w-screen flex justify-center items-center flex-col pt-[20px]">
        <div className="w-[90%] mx-auto">
          <p className="font-semibold mb-[5px]">Your route</p>
          <div className="flex flex-col">
            <div className="flex">
              <p className="w-[100px]">From</p>
              <p className="border-l">{queryFrom}</p>
            </div>
            <div className="flex">
              <p className="w-[100px]">To</p>
              <p className="border-l">{queryTo}</p>
            </div>
            <div className="flex">
              <p className="w-[100px]">Date and time </p>
              <p className="border-l">{date.replaceAll("T", " at ")}</p>
            </div>
            <div className="flex">
              <p className="w-[100px]">Drive distance</p>
              <p className="border-l">{calculateDistance}</p>
            </div>
            <div className="flex">
              <p className="w-[100px]">Car(s)</p>
              <p className="border-l">
                {/* Eco Sedan: {cars.sedan}, Van: {cars.van} */}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <p className="font-semibold my-[5px]">About You</p>
          <div className="flex flex-col">
            <div className="flex">
              <p className="w-[100px]">Title</p>
              <p className="border-l">{personTitle}</p>
            </div>
            <div className="flex">
              <p className="w-[100px]">First name:</p>
              <p className="border-l">{firstName}</p>
            </div>
            <div className="flex">
              <p className="w-[100px]">Last Name</p>
              <p className="border-l">{lastName}</p>
            </div>
            <div className="flex">
              <p className="w-[100px]">E-mail</p>
              <p className="border-l">{email}</p>
            </div>
            <div className="flex">
              <p className="w-[100px]">Phone</p>
              <p className="border-l">
                {phonePrefix} {phone}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto flex mt-[10px] text-[20px] font-bold">
          <p className="w-[100px]">Full price</p>
          <p className="border-l">{price} zł</p>
        </div>
        <div className="w-[80%] mx-auto rounded-[25px] bg-yellow-500 text-center py-[10px] mt-[50px] text-white text-[20px]">
          Pay & Order
        </div>
      </div>
    </div>
  );
}
