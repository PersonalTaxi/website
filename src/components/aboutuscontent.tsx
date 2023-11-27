import React from "react";
import Price from "./aboutuscomponets/price";
import Watingtime from "./aboutuscomponets/watingtime";
import Watingtimehotel from "./aboutuscomponets/watingtimehotel";
import Cars from "./aboutuscomponets/cars";
import Time from "./aboutuscomponets/time";
import Service from "./aboutuscomponets/service";

export default function Aboutuscontent() {
  return (
    <div className="w-full h-full flex lg:flex-row flex-col flex-wrap justify-evenly">
      <Price />
      <Watingtime />
      <Watingtimehotel />
      <Cars />
      <Time />
      <Service />
    </div>
  );
}
