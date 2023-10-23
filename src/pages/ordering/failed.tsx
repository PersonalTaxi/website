import React from "react";
import Link from "next/link";
import { MdReportProblem } from "react-icons/md";

export default function Succes() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
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
  );
}
