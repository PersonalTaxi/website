import React from "react";
import Claim from "./claim";
import Search from "./Search/search";
import Aboutinmian from "../../components/aboutinmian";
import Orderingprocess from "../../components/orderingprocess";
import Footer from "../Footer/footer";
import Contactform from "@/components/contactform";

export default function Main() {
  return (
    <>
      <div className='w-screen h-[90vh] lg:h-auto bg-[url("/Main_theme.png")] lg:bg-[url("/main_2.jpeg")] bg-top md:bg-center bg-cover bg-no-repeat flex flex-col justify-between pt-[48px]'>
        <div className="h-[100px] bg-gradient-to-b from-black to-transparent border-white"></div>
        <Claim />
        <Search />
        <div className="lg:hidden absolute w-full h-[80vh] lg:h-[500px] top-0 left-0 bg-black/[0.55]"></div>
      </div>
      <Aboutinmian />
      <Orderingprocess />
      <Contactform />
      <Footer />
    </>
  );
}
