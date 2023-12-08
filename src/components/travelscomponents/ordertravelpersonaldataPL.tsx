import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../pages/_app";
import Link from "next/link";
import countries from "../../data/countries.json";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";

export default function OrdertravelspecPL() {
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

  const [data, setData] = useState([{ country: "Poland" }, { code: "+48" }, { emoji: "🇵🇱" }]);

  const handleAddingNewData = (e: any) => {
    // setData([{ country: i.name }, { code: i.dial_code }, { emoji: i.emoji }]);
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
        {/* <div>{i.name}</div> */}
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
        <p className="mb-[25px] font-bold">Dane personalne:</p>
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
            <label>Pan</label>
          </div>
          <div className="w-[70px] flex items-center">
            <input
              name="title"
              value="Mrs."
              type="radio"
              className="mr-[4px] w-[20px] h-[20px] cursor-pointer"
              required
            ></input>
            <label>Pani</label>
          </div>
        </div>
        <input
          placeholder="Imię"
          className="border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none"
          required
          onChange={(e) => setTravelFirstName(e.target.value)}
        ></input>
        <input
          placeholder="Nazwisko"
          className="border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none"
          required
          onChange={(e) => setTravelLastName(e.target.value)}
        ></input>
        <input
          placeholder="Adres e-mail"
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
            placeholder="Numer telefonu"
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
          <p className="leading-4 w-full">
            Potwierdzam, że rozumiem, że muszę zakupić wszystkie bilety wycieczkowe, posiłki itp
            rzeczy we własnym zakresie. Również potwierdzam, że mam zakupione bilety lub
            przynajmniej potwierdzoną możliwość odbycia planowanej podróży o wskazanej dacie i
            godzinie.
          </p>
        </div>
        <div className="w-full flex items-start p-[5px] mt-[10px]">
          <input
            type="checkbox"
            required
            className="w-[20px] h-[20px] mr-[5px] cursor-pointer"
          ></input>
          <p className="leading-4 w-full">
            Akcpetuję
            <Link href="/policy" className="underline">
              {" "}
              Politykę prywatności
            </Link>{" "}
            oraz
            <Link href="/terms" className="underline">
              {" "}
              Regulamin usług
            </Link>{" "}
            oraz wyrażam zogodę na kontakt i realizację zamówienia.
          </p>
        </div>
        <div className="mt-[30px] text-[24px] font-bold bg-yellow-300/[0.2] text-center">
          Cena końcowa: {finalTravelPrice} {currencyTXT}
        </div>
      </div>
    </div>
  );
}
