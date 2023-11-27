import React from "react";
import PricePL from "./aboutuscomponets/pricePL";
import WatingtimePL from "./aboutuscomponets/watingtimePL";
import WatingtimehotelPL from "./aboutuscomponets/watingtimehotelPL";
import CarsPL from "./aboutuscomponets/carsPL";
import TimePL from "./aboutuscomponets/timePL";
import ServicePL from "./aboutuscomponets/servicePL";

export default function AboutuscontentPL() {
  return (
    <div className="w-full h-full flex lg:flex-row flex-col flex-wrap justify-evenly">
      <PricePL />
      <WatingtimePL />
      <WatingtimehotelPL />
      <CarsPL />
      <TimePL />
      <ServicePL />
    </div>
  );
}
