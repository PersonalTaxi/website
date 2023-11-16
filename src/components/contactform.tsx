import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Contactform() {
  const router = useRouter();
  return (
    <div>
      <div className="w-screen h-[500px]">
        {!router.asPath.includes("contact") && (
          <p className="lg:w-[1080px] mx-auto text-center text-[40px]">
            Contact us
          </p>
        )}
        <div className="lg:w-[1080px] mx-auto">
          <form className="lg:w-[70%] w-[80%] flex flex-col  mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 border-gray-300  my-[15px] h-[45px] rounded-[7px] px-[5px] shadow-sm placeholder-gray-900/[0.3] outline-none"
            ></input>
            <input
              placeholder="Your phone number with prefix e.g. (+1) 111 222 333"
              className="border-2 border-gray-300  h-[45px] rounded-[7px] px-[5px] shadow-sm placeholder-gray-900/[0.3] outline-none"
            ></input>
            <textarea
              placeholder="Your massage"
              className="border-2 border-gray-300 my-[15px] h-[95px] rounded-[7px] px-[5px] shadow-sm placeholder-gray-900/[0.3] outline-none"
            ></textarea>
            <div
              id="policy-wrapper"
              className="w-full lg:h-[50px] h-auto flex items-start justify-start"
            >
              <input
                required
                type="checkbox"
                placeholder="Your Name with prefix"
                className="border-2 border-gray-300 rounded-[7px] px-[5px] shadow-sm w-[20px] h-[20px]"
              ></input>
              <p className="px-[10px]">
                I accept this company{" "}
                <Link href="/policy" className="underline">
                  {" "}
                  Privacy Policy
                </Link>{" "}
                in order to contact with me with any information according to
                they services.
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
