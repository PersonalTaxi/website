import React from "react";
import Image from "next/image";

export default function Aboutinmian() {
  return (
    <div className="bg-white w-screen lg:h-[600px] -mt-[50px] pt-[70px] flex">
      <div id="aboutus-wrapper" className="lg:w-[1080px] mx-auto flex">
        <div className="lg:w-2/3 mx-auto h-5/6 lg:flex flex-col relative">
          <p className="text-left w-full lg:text-[40px] text-[30px] my-[20px] z-10 px-[15px] lg:px-auto">
            Who we are
          </p>
          <div className="absolute w-[50px] h-[50px] rounded-[10px] bg-yellow-500/[0.3] top-[40px] -left-[20px] rotate-45"></div>
          <div className="lg:w-full h-6/6 lg:text-[20px] text-[16px] lg:pr-[150px] px-[15px] font-[400]">
            <p>
              We are a company with 10 years of experience. We have about 100
              cars and the same number of expirienced drivers and we made more
              than 1000 courses for our clients. Our mission is to be always
              ready to meet our customers needs and we are available 24/7. We
              create this page to provide more efficent way to ordering a taxi.
              With a simple few clicks you can order a taxi with course from
              start point to finish point. <br></br>You can count on us.
            </p>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3 h-5/6 relative rounded-[5px] overflow-hidden">
          <Image
            src="/aboutus.png"
            alt="about-main"
            fill
            className="object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
}
