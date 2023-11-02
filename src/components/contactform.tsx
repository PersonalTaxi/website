import React from "react";
import Link from "next/link";

export default function Contactform() {
  return (
    <div>
      <div className="w-screen h-[500px]">
        <p className="lg:w-[1080px] mx-auto text-center text-[40px]">
          Contact us
        </p>
        <div className="lg:w-[1080px] mx-auto">
          <form className="lg:w-[70%] w-[80%] flex flex-col  mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 my-[15px] h-[45px] rounded-[7px] px-[5px] shadow-sm placeholder-gray-900/[0.3]"
            ></input>
            <input
              placeholder="Your phone number with prefix e.g. (+1) 111 222 333"
              className="border-2 h-[45px] rounded-[7px] px-[5px] shadow-sm placeholder-gray-900/[0.3]"
            ></input>
            <textarea
              placeholder="Your massage"
              className="border-2 my-[15px] h-[95px] rounded-[7px] px-[5px] shadow-sm placeholder-gray-900/[0.3]"
            ></textarea>
            <div
              id="policy-wrapper"
              className="w-full lg:h-[50px] h-auto flex items-start justify-start"
            >
              <input
                type="checkbox"
                placeholder="Your Name with prefix"
                className="border-2 rounded-[7px] px-[5px] shadow-sm w-[20px] h-[20px]"
              ></input>
              <p className="px-[10px]">
                I accept this company privacy policy in order to contact with me
                with any infrmation according to{" "}
                <Link href="/policy">Privacy Policy</Link> they serives.
              </p>
            </div>
            <button className="bg-yellow-500 border-yellow-500 border h-[40px] w-[150px] rounded-[7px] text-white duration-200 hover:text-black hover:bg-transparent mt-[20px]">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
