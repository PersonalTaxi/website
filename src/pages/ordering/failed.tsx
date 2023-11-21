import React from "react";
import Link from "next/link";
import { MdReportProblem } from "react-icons/md";

export default function Succes() {
  return (
    <div className="w-screen h-screen bg-[url('/Main_theme.png')] bg-top bg-cover bg-no-repeat flex justify-center items-center">
      <div className="w-[80%] lg:w-[360px] h-[35%] flex flex-col items-center justify-center mx-auto bg-white rounded-[10px]">
        <div className="text-[20px] mb-[20px]">Something went wrong...</div>
        <div role="status" className="w-[140px] h-[140px]">
          <MdReportProblem className="w-full h-full text-red-600" />
        </div>
        <Link
          href="https://ptbeta.vercel.app/"
          className="border font-semibold px-[40px] py-[5px] bg-blue-500 text-white rounded-[20px]"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
