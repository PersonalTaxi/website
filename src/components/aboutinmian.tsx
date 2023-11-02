import React from "react";
import Image from "next/image";

export default function Aboutinmian() {
  return (
    <div className="bg-white w-screen lg:h-[600px] -mt-[50px] pt-[100px] flex">
      <div id="aboutus-wrapper" className="lg:w-[1080px] mx-auto flex">
        <div className="lg:w-2/3 mx-auto h-5/6 lg:flex flex-col relative">
          <p className="text-left w-full lg:text-[40px] text-[30px] my-[20px] z-10 px-[15px] lg:px-auto">
            Who we are
          </p>
          <div className="absolute w-[50px] h-[50px] rounded-[10px] bg-yellow-500/[0.3] top-[40px] -left-[20px] rotate-45"></div>
          <div className="lg:w-full h-6/6 lg:text-[20px] text-[16px] lg:pr-[150px] px-[15px] font-[400]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              magni amet unde dolores eos placeat atque fugit vero hic. Ea
              molestiae cumque nam ullam repudiandae voluptatum reiciendis
              quibusdam perferendis eaque! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Impedit magni amet unde dolores eos
              placeat atque fugit vero hic. Ea molestiae cumque nam ullam
              repudiandae voluptatum reiciendis quibusdam perferendis eaque!
            </p>
          </div>
        </div>
        <div className="hidden lg:visible lg:w-1/3 h-5/6 relative rounded-[5px] overflow-hidden">
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
