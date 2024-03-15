import React from "react";

export default function FooterPL() {
  return (
    <div className="w-screen bg-black h-[300px] text-gray-400">
      <div className="w-[80%] border-gray-500 mx-auto flex pt-[15px] pb-[15px]">
        <div className="h-full w-[33%] border-white">
          <p className="font-semibold mb-[5px]">Menu</p>
          <p className="text-[12px]">Strona główna</p>
          <p className="text-[12px]">FAQ</p>
          <p className="text-[12px]">O nas</p>
          <p className="text-[12px]">Nowe zamówienie</p>
          <p className="text-[12px]">Kontakt</p>
        </div>
        <div className="h-full w-[33%] border-white">
          <p className="font-semibold mb-[5px]">Social Media</p>
          <p className="text-[12px]">Facebook</p>
          <p className="text-[12px]">Instagram</p>
          <p className="text-[12px]">LinkedIn</p>
        </div>
        <div className="h-full w-[33%] border-white">
          <p className="font-semibold mb-[5px]">Formy płatności</p>
          <p className="text-[12px]">PayPal</p>
          <p className="text-[12px]">Przelewy24</p>
          <p className="text-[12px]">Google Pay</p>
          <p className="text-[12px]">Apple Pay</p>
        </div>
      </div>
      <div className="w-[80%] mx-auto h-[1px] bg-white leading-5"></div>
      <div className="w-[80%] mx-auto h-[1px] leading-4 pt-[15px] text-[12px]">
        <p className="font-semibold leading-6 ">Firma:</p>
        <p>Inter-Dywiz Sp. z o.o.</p>
        <p>ul. Lotnicza 6/2</p>
        <p>NIP: 6751496482</p>
        <p>e-mail: biuro@inter-dywiz.pl</p>
      </div>
    </div>
  );
}
