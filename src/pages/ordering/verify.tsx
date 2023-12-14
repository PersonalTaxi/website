import React, { useContext, useState } from "react";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import RegisterInDataBase from "@/components/registerintraveldatabase";
import { getUrlStatus } from "../../components/geturlstatus";
import VerifyTransaction from "@/components/verifyTransaction";
import { AppContext } from "../_app";

export default function Verify() {
  const router = useRouter();

  const {
    // queryFrom,
    // setQueryFrom,
    // queryTo,
    // setQueryTo,
    // date,
    // setDate,
    // time,
    // setTime,
    // people,
    // setPeople,
    // latLangFrom,
    // setlatLangFrom,
    // latLangTo,
    // setlatLangTo,
    // cars,
    // setCars,
    // calculateDistance,
    // setCalculateDistance,
    // isFormCompleted,
    // setIsFromCompleted,
    // SearchButtonWasClicked,
    // setSearchButtonWasClicked,
    // dateLimit,
    // setDateLimit,
    // personTitle,
    // setPersonTitle,
    // firstName,
    // setFirstName,
    // lastName,
    // setLastName,
    // email,
    // setEmail,
    // phone,
    // setPhone,
    // phonePrefix,
    // setPhonePrefix,
    // price,
    // setPrice,
    currencyTXT,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchAnswerVerifyAndRedirect = async () => {
      console.log("render");
      let TypeOfService;
      let Language;
      if (router.asPath.includes("type=travel")) {
        console.log("render");
        TypeOfService = await "travel";
      }
      if (router.asPath.includes("type=taxi")) {
        TypeOfService = await "taxi";
      }
      if (router.asPath.includes("/pl/")) {
        console.log("render");
        Language = "PL";
      }
      if (!router.asPath.includes("/pl/")) {
        Language = "EN";
      }

      //sending first verify and gain urlStatus from p24
      const { status, DataKEY, query } = await getUrlStatus();

      //sending data to verify payment and sending email after
      let ParsedQuery = JSON.parse(query);
      // let sessionsId = ParsedQuery.sessionId;

      const VerifyStatus = await VerifyTransaction(TypeOfService, Language, currencyTXT, query);
      console.log(VerifyStatus);
      if (VerifyStatus === 200) {
        console.log(VerifyStatus);
        // router.replace({
        //   pathname: "https://personaltaxi.pl/ordering/success",
        // });
      } else {
        router.replace({
          pathname: "https://personaltaxi.pl/ordering/failed",
        });
      }
      console.log(VerifyStatus);
    };

    fetchAnswerVerifyAndRedirect();
  }, []);

  return (
    <div className="w-screen h-screen bg-[url('/Main_theme.png')] bg-top bg-cover bg-no-repeat flex justify-center items-center">
      <div className="w-[80%] h-[30%] flex flex-col items-center justify-center mx-auto bg-white rounded-[10px]">
        <div className="text-[20px] mb-[20px]">We are verifing your payment... </div>
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-yellow-600 fill-black"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
