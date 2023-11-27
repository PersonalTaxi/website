import React from "react";
import ClaimPL from "./claimPL";
import SearchPL from "./Search/searchPL";
import AboutinmianPL from "../../components/aboutinmianPL";
import OrderingprocessPL from "../../components/orderingprocessPL";
import FooterPL from "../Footer/footerPL";
import ContactformPL from "@/components/contactformPL";

export default function MainPL() {
  return (
    <>
      <div className='w-screen h-[90vh] lg:h-auto bg-[url("/Main_theme.png")] lg:bg-[url("/main_2.jpeg")] bg-top md:bg-center bg-cover bg-no-repeat flex flex-col justify-between pt-[48px]'>
        <div className="h-[100px] bg-gradient-to-b from-black to-transparent border-white"></div>
        <ClaimPL />
        <SearchPL />
        <div className="lg:hidden absolute w-full h-[80vh] lg:h-[500px] top-0 left-0 bg-black/[0.55]"></div>
      </div>
      <AboutinmianPL />
      <OrderingprocessPL />
      <ContactformPL />
      <FooterPL />
    </>
  );
}
