import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../../pages/_app";
import Link from "next/link";
import countries from "../../data/countries.json";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Ordertravelspec() {
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
  } = useContext(AppContext);

  const [data, setData] = useState([{ country: "Poland" }, { code: "+48" }, { emoji: "🇵🇱" }]);

  const handleAddingNewData = (e: any) => {
    // setData([{ country: i.name }, { code: i.dial_code }, { emoji: i.emoji }]);
    setTravelPrefixPhone(e.target.value);
    console.log(e.target.value);
  };

  console.log(travelPrice);

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
      <form className="w-[85%] m-[30px]">
        <p className="mb-[25px] font-bold">A few informations about you:</p>
        <div className="flex mb-[25px]">
          <div className="w-[70px] flex items-center">
            <input
              name="title"
              value="Mr."
              type="radio"
              className="mr-[4px] w-[20px] h-[20px] cursor-pointer"
              onChange={handlePersonTitle}
              // required
            ></input>
            <label>Mr.</label>
          </div>
          <div className="w-[70px] flex items-center">
            <input
              name="title"
              value="Mrs."
              type="radio"
              className="mr-[4px] w-[20px] h-[20px] cursor-pointer"
              required
            ></input>
            <label>Mrs.</label>
          </div>
        </div>
        <input
          placeholder="First name"
          className="border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none"
          // required
          onChange={(e) => setTravelFirstName(e.target.value)}
        ></input>
        <input
          placeholder="Last name"
          className="border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none"
          // required
          onChange={(e) => setTravelLastName(e.target.value)}
        ></input>
        <input
          placeholder="Your email"
          className="border border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-[5px] placeholder-gray-400 outline-none"
          // required
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
            placeholder="Your phone (only digists)"
            className="border-r border-t border-b border-gray-400 w-full pl-[10px] h-[40px] mb-[20px] rounded-r-[5px] placeholder-gray-400 outline-none"
            type="phone"
            // required
            onChange={(e) => setTravelPhone(e.target.value)}
          ></input>
        </div>
        <div className="w-full flex items-start p-[5px] mt-[10px]">
          <input
            type="checkbox"
            // required
            className="w-[20px] h-[20px] mr-[5px] cursor-pointer"
          ></input>
          <p className="leading-4 w-full">
            I confirm that I understand I have to buy any tour tickets, meals and else on my own. I
            also confirm that I have tickets or at least confirmed date an hour as allowing me to
            make the tour.
          </p>
        </div>
        <div className="w-full flex items-start p-[5px] mt-[10px]">
          <input
            type="checkbox"
            // required
            className="w-[20px] h-[20px] mr-[5px] cursor-pointer"
          ></input>
          <p className="leading-4 w-full">
            I accept the{" "}
            <Link href="/policy" className="underline">
              {" "}
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline">
              {" "}
              Terms of our service
            </Link>{" "}
            and agree to contact and realize my order.
          </p>
        </div>
        <div className="mt-[30px] text-[24px] font-bold bg-yellow-300/[0.2] text-center">
          Final price: {travelPrice} {currencyTXT}
        </div>
        {/* <div className="w-full flex flex-col justify-center items-center mt-[30px]">
          <div id="info" className="flex justify-center items-center">
            <RiErrorWarningFill className="w-[40px] h-auto" />
            <p className="italic pl-[10px] leading-4 ">
              Carefully check if all fields are filled correctly, then click button below.
            </p>
          </div>
          <button className="px-[30px] bg-blue-400 text-white w-[150px] py-[10px] rounded-[10px] mt-[30px]">
            Pay & Order
          </button>
        </div> */}
      </form>
    </div>
  );
}
