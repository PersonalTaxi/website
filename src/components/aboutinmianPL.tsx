import React from "react";
import Image from "next/image";

export default function AboutinmianPL() {
  return (
    <div className="bg-white w-screen lg:h-[600px] -mt-[50px] pt-[70px] flex">
      <div id="aboutus-wrapper" className="lg:w-[1080px] mx-auto flex">
        <div className="lg:w-2/3 mx-auto h-5/6 lg:flex flex-col relative">
          <p className="text-left w-full lg:text-[40px] text-[30px] my-[20px] z-10 px-[15px] lg:px-auto">
            Kim jesteśmy?
          </p>
          <div className="absolute w-[50px] h-[50px] rounded-[10px] bg-yellow-500/[0.3] top-[40px] -left-[20px] rotate-45"></div>
          <div className="lg:w-full h-6/6 lg:text-[20px] text-[16px] lg:pr-[150px] px-[15px] font-[400]">
            <p>
              Jesteśmy firmą z 10 - cio letnim doświadczeniem na rynku. W swojej
              flocie posiadamy pond 100 samochodów i również tylu kierowców,
              którzy wykonali pnad 1000 kursów. Jesteśmy zawsze gotowi do
              obsługi naszych klientów, a zn asyzch usług skorzystać mozna 24/7
              h. Stworzyliśmy tę stronę aby zapewnić naszym klientom bardziej
              efektywną i elegancką formę zamawiania taxi lub transferu. Poprzez
              kilka prostych kroków jest w stanie zamówić swój transfer z
              poczuciem bezpieczeństwa, że pojawimy się na miejscu na czas.
              <br></br>Możesz na nas liczyć.
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
