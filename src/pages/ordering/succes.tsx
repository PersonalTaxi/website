import React from "react";
import Link from "next/link";
import { BsCheck2Square } from "react-icons/bs";

export default function Succes() {
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
