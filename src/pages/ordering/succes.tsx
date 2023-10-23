import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../_app";
import { BsCheck2Square } from "react-icons/bs";

export default function Succes() {
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

  const router = useRouter();

  const query = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    queryFrom: queryFrom,
    queryTo: queryTo,
    calculateDistance: calculateDistance,
    price: price,
  });

  useEffect(() => {
    const sendEmail = async () => {
      if (router.asPath.includes("email")) {
        let mail = await fetch("/api/sendnotification", {
          method: "POST",
          body: query,
        });
        const data = await mail;
        router.push("email=true", undefined, { shallow: true });
      }
    };

    sendEmail();
  }, []);

  return (
    <div className="w-screen h-screen bg-[url('/Main_theme.png')] bg-top bg-cover bg-no-repeat flex justify-center items-center">
      <div className="w-[80%] h-[40%] flex flex-col items-center justify-center mx-auto bg-white rounded-[10px]">
        <div className="text-[20px] mb-[20px] text-center px-[10px]">
          <p className="font-bold">Payment successful!</p> We&apos;ve send you
          an email with order details.
        </div>
        <div role="status" className="w-[140px] h-[140px]">
          <BsCheck2Square className="w-full h-full text-green-600" />
        </div>
        <Link
          href="http://ptbeta.vercel.app/"
          className="border font-semibold px-[40px] py-[5px] bg-blue-500 text-white rounded-[20px]"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
}
