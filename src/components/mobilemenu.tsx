import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

interface QueryParams {
  mobileMenuOpened: any;
  setMobileMenuOpened: React.Dispatch<React.SetStateAction<any>>;
}

export default function Mobilemenu({ setMobileMenuOpened, mobileMenuOpened }: QueryParams) {
  const handleClosingMenu = () => {
    setMobileMenuOpened(false);
  };

  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-white z-50 top-0 left-0">
      <div className="w-full h-[50px] px-[15px] flex items-center justify-between bg-black">
        <div>
          <Link href={router.asPath.includes("pl") ? "/pl" : "/"}>
            <Image src="/logo_personal_2.png" width={100} height={100} alt="taxi_krakow"></Image>
          </Link>
        </div>
        <AiOutlineClose className="w-[30px] h-[30px] text-white" onClick={handleClosingMenu} />
      </div>
      <div></div>
      <div
        id="mobile-menu-wrapper"
        className="w-full h-[70vh] mx-auto flex items-center justify-center text-[24px]"
      >
        <div className="w-[80%] h-full flex flex-col items-center justify-center">
          <Link href={router.asPath.includes("pl") ? "/pl" : "/"} onClick={handleClosingMenu}>
            {router.asPath.includes("pl") ? <p>Strona główna</p> : <p>Home Page</p>}
          </Link>
          <Link
            href={router.asPath.includes("pl") ? "/pl/aboutus" : "/aboutus"}
            onClick={handleClosingMenu}
          >
            {router.asPath.includes("pl") ? <p>O Nas</p> : <p>About Us</p>}
          </Link>
          <Link
            href={router.asPath.includes("pl") ? "/faq" : "/pl/faq"}
            onClick={handleClosingMenu}
          >
            FAQ
          </Link>
          <Link href="/travels" className="cursor-pointer hover:text-yellow-500 duration-200">
            Travels
          </Link>
          <Link href="policy" onClick={handleClosingMenu}>
            {router.asPath.includes("pl") ? <p>Polityka Prywatności</p> : <p>Provacy Policy</p>}
          </Link>
          <Link href="terms" onClick={handleClosingMenu}>
            {router.asPath.includes("pl") ? <p>Regulamin usług</p> : <p>Terms</p>}
          </Link>
          <Link
            href={router.asPath.includes("pl") ? "/pl/contact" : "/contact"}
            onClick={handleClosingMenu}
          >
            {router.asPath.includes("pl") ? <p>Kontakt</p> : <p>Contact</p>}
          </Link>
        </div>
      </div>
    </div>
  );
}
