import React, { useContext, useState, useRef } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../pages/_app";
import Link from "next/link";
import countries from "../../data/countries.json";
import Languages from "../../data/languages.json";
import Travels from "../../data/travels.json";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";

export default function OrderingTravelPersonalData() {
  const {
    time,
    setTime,
    people,
    setPeople,
    //client's data
    personTitle,
    setPersonTitle,
    travelFirstName,
    setTravelFirstName,
    travelLastName,
    setTravelLastName,
    travelPrefixPhone,
    setTravelPrefixPhone,
    travelPhone,
    setTravelPhone,
    travelPersonTitle,
    setTravelPersonTitle,
    travelEmail,
    setTravelEmail,
    travelPrice,
    currencyTXT,
    setCurrencyTXT,
    finalTravelPrice,
    setFinalTravelPrice,
  } = useContext(AppContext);

  const router = useRouter();

  const { id } = router.query;

  const getDataAboutTravel = () => {
    let data: any = "";
    Travels.PL.map((i) => {
      if (data === "" && i.id === id) {
        data = {
          sedan_PL: i.sedan_price_PL,
          premium_PL: i.premium_sedan_price_PL,
          van_PL: i.van_price_PL,
          sedan_EUR: i.sedan_price_EUR,
          premium_EUR: i.premium_sedan_price_EUR,
          van_EUR: i.van_price_EUR,
        };
      }
    });

    return data;
  };

  const setActualLocalization = () => {
    if (router.asPath.includes("/pl")) {
      return Languages.PL;
    } else {
      return Languages.EN;
    }
  };

  const [data, setData] = useState([{ country: "Poland" }, { code: "+48" }, { emoji: "🇵🇱" }]);
  const [actualLanguage, setActualLanguage] = useState(setActualLocalization());
  const [detailsAboutTravel, setDetailsAboutTravel] = useState(getDataAboutTravel());

  const handleAddingNewData = (e: any) => {
    setTravelPrefixPhone(e.target.value);
    console.log(e.target.value);
  };

  const countriesData = countries.sort((a, b) =>
    parseInt(a.dial_code.slice(1)) > parseInt(b.dial_code.slice(1)) ? 1 : -1,
  );

  const countriesMap = countriesData.map((i) => {
    return (
      <option key={i.name} className="flex w-full justify-center" value={i.dial_code}>
        <div className="w-[30px]">{i.emoji}</div>
        <div className="mx-[8px]"> {i.dial_code}</div>
      </option>
    );
  });

  const handlePersonTitle = (e: any) => {
    setTravelPersonTitle(e.target.value);
  };

  return (
    // As form element
    <div className="bg-white w-full lg:w-1/2 mx-auto pt-[15px] lg:p-[0px]">
      <div className="w-[85%] m-[30px]">
        <p className="mb-[25px] font-bold">
          {actualLanguage[0].Travel_order_personal_deatails_header}
        </p>
        <div className="flex mb-[25px]">
          <div className="w-[70px] flex items-center">
            <input
              name="title"
              value="Mr."
              type="radio"
              className="mr-[4px] w-[20px] h-[20px] cursor-pointer"
              onChange={handlePersonTitle}
              required
            ></input>
            <label>{actualLanguage[0].Travel_order_personal_title_Mr}</label>
          </div>
          <div className="w-[70px] flex items-center">
            <input
              name="title"
              value="Mrs."
              type="radio"
              className="mr-[4px] w-[20px] h-[20px] cursor-pointer"
              required
            ></input>
            <label>{actualLanguage[0].Travel_order_personal_title_Mrs}</label>
          </div>
        </div>
        <input
          placeholder={actualLanguage[0].Travel_order_personal_placeholder_title_firstname}
          className="border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none"
          required
          onChange={(e) => setTravelFirstName(e.target.value)}
        ></input>
        <input
          placeholder={actualLanguage[0].Travel_order_personal_placeholder_title_lastname}
          className="border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none"
          required
          onChange={(e) => setTravelLastName(e.target.value)}
        ></input>
        <input
          placeholder={actualLanguage[0].Travel_order_personal_placeholder_title_email}
          className="border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none"
          required
          onChange={(e) => setTravelEmail(e.target.value)}
        ></input>
        <div className="flex h-[40px] w-full relative">
          <select
            onChange={handleAddingNewData}
            className="border h-[40px] w-[120px] flex items-center justify-center rounded-l-[5px] bg-gray-100 border-gray-400"
          >
            {countriesMap}
            <MdOutlineKeyboardArrowDown />
          </select>
          <input
            placeholder={actualLanguage[0].Travel_order_personal_placeholder_title_phone}
            className="border-r border-t border-b border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-r-[5px] placeholder-gray-400 outline-none"
            type="phone"
            required
            onChange={(e) => setTravelPhone(e.target.value)}
          ></input>
        </div>
        <div className="w-full flex items-start p-[5px] mt-[10px]">
          <input
            type="checkbox"
            required
            className="w-[20px] h-[20px] mr-[5px] cursor-pointer"
          ></input>
          <p className="leading-4 w-full">{actualLanguage[0].Travel_order_personal_checkbox_1}</p>
        </div>
        <div className="w-full flex items-start p-[5px] mt-[10px]">
          <input
            type="checkbox"
            required
            className="w-[20px] h-[20px] mr-[5px] cursor-pointer"
          ></input>
          <p className="leading-4 w-full">{actualLanguage[0].Travel_order_personal_checkbox_2}</p>
        </div>
        <div className="mt-[30px] text-[24px] font-bold bg-yellow-300/[0.2] text-center">
          {actualLanguage[0].Travel_order_final_price} {finalTravelPrice} {currencyTXT}
        </div>
      </div>
    </div>
  );
}
