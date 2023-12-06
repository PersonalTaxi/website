import React, { useContext, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Mobilemenu from "@/components/mobilemenu";
import { AppContext } from "../_app";

export default function Header() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const { currencyTXT, setCurrencyTXT } = useContext(AppContext);

  const MobileMenu: any = useRef();

  const handleShowingMenu = () => {
    setMobileMenuOpened(true);
  };

  const changeToPlnCurrency = () => {
    setCurrencyTXT("PLN");
  };

  const changeToEurCurrency = () => {
    setCurrencyTXT("EUR");
  };

  return (
    <div className="fixed z-40 h-[50px] w-screen bg-black  border-gray-900 px-[20px] flex items-center justify-center ">
      <div className="w-[1100px] flex items-center justify-between">
        <div className="border-white h-full">
          <Link href="/">
            <Image src="/Logo_personal_2.png" width={170} height={150} alt="taxi_krakow"></Image>
          </Link>
        </div>
        <div className="lg:hidden flex w-full justify-end items-center">
          <div className="flex border-white w-[80px] justify-evenly">
            <Link href="/pl/" className="cursor-pointer hover:text-yellow-500 duration-200">
              <Image src="/PLflag.jpg" width={30} height={30} alt="pl"></Image>
            </Link>
            <Link href="/" className="cursor-pointer hover:text-yellow-500 duration-200">
              <Image src="/ENflag.jpg" width={30} height={30} alt="pl"></Image>
            </Link>
          </div>
          <RxHamburgerMenu
            className="lg:hidden text-yellow-500 w-[30px] h-[30px]"
            onClick={handleShowingMenu}
          />
        </div>
        <div
          ref={MobileMenu}
          className={
            mobileMenuOpened === false
              ? "absolute top-0 -right-[100%] duration-200"
              : "absolute top-0 right-0 duration-200"
          }
        >
          <Mobilemenu
            setMobileMenuOpened={setMobileMenuOpened}
            mobileMenuOpened={mobileMenuOpened}
          />
        </div>
        <div className="lg:visible  lg:flex hidden text-white w-[600px] justify-evenly items-center">
          <Link href="/" className="cursor-pointer hover:text-yellow-500 duration-200">
            Home Page
          </Link>
          <Link href="/" className="cursor-pointer hover:text-yellow-500 duration-200">
            About Us
          </Link>
          <Link href="/aboutus" className="cursor-pointer hover:text-yellow-500 duration-200">
            FAQ
          </Link>
          <Link href="/travels" className="cursor-pointer hover:text-yellow-500 duration-200">
            Travels
          </Link>
          <Link href="/policy" className="cursor-pointer hover:text-yellow-500 duration-200">
            Privacy
          </Link>
          <Link href="/terms" className="cursor-pointer hover:text-yellow-500 duration-200">
            Terms
          </Link>
          <Link href="/contact" className="cursor-pointer hover:text-yellow-500 duration-200">
            Contact
          </Link>
          <Link
            href="/pl/"
            className="cursor-pointer hover:text-yellow-500 duration-200"
            onClick={changeToPlnCurrency}
          >
            <Image src="/PLflag.jpg" width={30} height={30} alt="pl"></Image>
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:text-yellow-500 duration-200"
            onClick={changeToEurCurrency}
          >
            <Image src="/ENflag.jpg" width={30} height={30} alt="pl"></Image>
          </Link>
        </div>
      </div>
    </div>
  );
}
