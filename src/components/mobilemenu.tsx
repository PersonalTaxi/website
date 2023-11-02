import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

interface QueryParams {
  mobileMenuOpened: any;
  setMobileMenuOpened: React.Dispatch<React.SetStateAction<any>>;
}

export default function Mobilemenu({
  setMobileMenuOpened,
  mobileMenuOpened,
}: QueryParams) {
  const handleClosingMenu = () => {
    setMobileMenuOpened(false);
  };

  return (
    <div className="w-screen h-screen bg-white z-50 top-0 left-0">
      <div className="w-full h-[50px] px-[15px] flex items-center justify-between">
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
        <AiOutlineClose
          className="w-[30px] h-[30px]"
          onClick={handleClosingMenu}
        />
      </div>
      <div></div>
      <div
        id="mobile-menu-wrapper"
        className="w-full h-[70vh] mx-auto flex items-center justify-center text-[24px]"
      >
        <div className="w-[80%] h-full flex flex-col items-center justify-center">
          <Link href="/" onClick={handleClosingMenu}>
            Home Page
          </Link>
          <Link href="#" onClick={handleClosingMenu}>
            About Us
          </Link>
          <Link href="faq">FAQ</Link>
          <Link href="policy" onClick={handleClosingMenu}>
            Privacy Police
          </Link>
          <Link href="#" onClick={handleClosingMenu}>
            Terms
          </Link>
          <Link href="#" onClick={handleClosingMenu}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
