import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <div className="fixed z-40 h-[50px] w-screen bg-black  border-gray-900 px-[20px] flex items-center justify-center ">
      <div className="w-[1100px] flex items-center justify-between ">
        <div>
          <Link href="/">
            <Image
              src="/Logo.png"
              width={100}
              height={100}
              alt="taxi_krakow"
            ></Image>
          </Link>
        </div>
        <RxHamburgerMenu className="lg:hidden text-yellow-500 w-[30px] h-[30px]" />
        <div className="lg:visible  lg:flex hidden text-white w-[400px] justify-evenly">
          <p className="cursor-pointer hover:text-yellow-500 duration-200">
            Home Page
          </p>
          <p className="cursor-pointer hover:text-yellow-500 duration-200">
            About Us
          </p>
          <p className="cursor-pointer hover:text-yellow-500 duration-200">
            FAQ
          </p>
          <p className="cursor-pointer hover:text-yellow-500 duration-200">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
}
