import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ContactformPL() {
  const router = useRouter();
  return (
    <div>
      <div className="w-screen h-[500px]">
        {!router.asPath.includes("contact") && (
          <p className="lg:w-[1080px] mx-auto text-center text-[40px]">
            Napisz do nas
          </p>
        )}
        <div className="lg:w-[1080px] mx-auto">
          <form className="lg:w-[70%] w-[80%] flex flex-col  mx-auto">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="border-2 border-gray-300  my-[15px] h-[45px] rounded-[7px] px-[5px] shadow-sm placeholder-gray-900/[0.3] outline-none"
            ></input>
            <input
              placeholder="Numer kontaktowy z prefixem np (+48) 123 234 456"
              className="border-2 border-gray-300  h-[45px] rounded-[7px] px-[5px] shadow-sm placeholder-gray-900/[0.3] outline-none"
            ></input>
            <textarea
              placeholder="Twoja wiadomość"
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
                Akceptuję{" "}
                <Link href="/policy" className="underline">
                  {" "}
                  Poolitykę prywatności firmy
                </Link>{" "}
                celem skontaktowania się ze mną z intencją udzielenia informacji
                dotyczących świadczonych usług.
              </p>
            </div>
            <button className="bg-yellow-500 border-yellow-500 border h-[40px] w-[150px] rounded-[7px] text-white duration-200 hover:text-black hover:bg-transparent mt-[20px]">
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
