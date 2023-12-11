import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import HeaderPL from "../../Header/headerPL";
import Footer from "../../Footer/footer";
import { AppContext } from "../../_app";
import RegisterInTravelDataBase from "@/components/registerintraveldatabase";
import { IoIosWarning } from "react-icons/io";
import { sha384 } from "crypto-hash";
import Link from "next/link";

export default function TravelSummary() {
  const {
    travelDestination,
    travelLocalizationFrom,
    setTravelLocalizationFrom,
    travelLocalizationFromLatLang,
    setTravelLocalizationFromLatLang,
    travelDate,
    setTravelDate,
    travelTime,
    setTravelTime,
    persons,
    setPersons,
    travelCar,
    setTravelCar,
    travelMassage,
    setTravelMassage,
    travelFirstName,
    setTravelFirstName,
    travelLastName,
    setTravelLastName,
    travelEmail,
    setTravelEmail,
    travelPrefixPhone,
    setTravelPrefixPhone,
    travelPhone,
    setTravelPhone,
    whatIsOrdering,
    travelPrice,
    serviceType,
    currencyTXT,
    finalTravelPrice,
  } = useContext(AppContext);

  const router = useRouter();

  const [isDataCompleted, setIsDataCompleted] = useState(false);
  const time = travelTime.split(":");
  const ToMinutes: number = time[0] * 60 + parseInt(time[1]);
  const PickupTime = ToMinutes - 40;
  const PickupHour = Math.floor(PickupTime / 60);
  const PickupMins = PickupTime % 60;

  const CeckIfAllDataIsCollected = () => {
    if (travelLocalizationFrom === undefined) return false;
    if (travelDate === undefined) return false;
    if (travelTime === undefined) return false;
    if (travelFirstName === undefined) return false;
    if (travelLastName === undefined) return false;
    if (travelEmail === undefined) return false;
    if (travelPrefixPhone === undefined) return false;
    if (travelPhone === undefined) return false;
    if (travelPrice === undefined) return false;
    if (travelLocalizationFrom === "empty") return false;

    if (isDataCompleted === false) {
      setIsDataCompleted(true);
    }

    console.log(travelPrice);
  };

  CeckIfAllDataIsCollected();

  let Localization;

  if (travelLocalizationFrom === "idk") {
    Localization = "(lokalizacja zostanie niezwłocznie wysłana mailowo na office@personaltaxi.pl)";
  } else {
    Localization = travelLocalizationFrom;
  }

  const handleStartPayment = async () => {
    let merchantId = 27407;
    const UniqeNumber = Date.now().toString();
    let sessionId = UniqeNumber;
    let amount = finalTravelPrice * 100;
    let currency = currencyTXT;
    let crc = await fetch("/api/getcrc").then((res) => res.json());

    // console.log(await crc.data);

    const querySign = async () => {
      const DatCRC = `{"sessionId":"${sessionId}","merchantId":${merchantId},"amount":${amount},"currency":"${currency}","crc":"${crc.data}"}`;
      return await sha384(DatCRC);
    };

    const sign = await querySign();

    let query = JSON.stringify({
      merchantId: 27407,
      posId: 27407,
      sessionId: sessionId,
      amount: amount,
      currency: currencyTXT,
      description: "ordering taxi",
      email: travelEmail,
      country: "PL",
      language: "pl",
      urlReturn: `http://personaltaxi.pl/ordering/verify?type=travel`,
      urlStatus: "https://ptbackend.vercel.app/",
      sign: sign,
    });

    const DataForDatabaseTravel = JSON.stringify({
      Travel_to: travelDestination,
      Travel_date: travelDate,
      Tour_start_at: travelTime,
      Pick_up_from_localization: travelLocalizationFrom,
      Pick_up_at_hour: travelTime,
      Tour_only_time: "working...",
      Travel_all_time: "working...",
      Drive_time_one_way: "working...",
      First_name: travelFirstName,
      Last_name: travelLastName,
      Email: travelEmail,
      Phone_prefix: travelPrefixPhone,
      Phone: travelPhone,
      Description: "travel to " + travelDestination,
      Country: "working...",
      Price: 123,
      Currency: currency,
      Info_for_driver: "working...",
      merchantId: 27407,
      posId: 27407,
      sessionId: sessionId,
      orderId: "working...",
      sign: sign,
    });

    await RegisterInTravelDataBase(DataForDatabaseTravel);

    let res = await fetch("/api/p24", {
      method: "POST",
      body: query,
    });

    const token = await res.json();
    console.log(token.msg);

    router.replace(`https://sandbox.przelewy24.pl/trnRequest/${token.msg.data.token}`);
  };

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
        <title>Personal Taxi - Podsumowanie podróży</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
        <link rel="stylesheet" type="text/css" href="/cdn.web-sdk-maps/maps.css"></link>
        <link rel="stylesheet" type="text/css" href="../assets/ui-library/index.css"></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="/cdn.web-sdk-plugin-searchbox/SearchBox.css"
        ></link>
        <link rel="stylesheet" type="text/css" href="../assets/ui-library/icons-css/poi.css"></link>
      </Head>
      <HeaderPL />
      <div className='w-screen h-[200px] bg-[url("/travel_bg_top.png")] bg-top bg-cover bg-no-repeat flex items-center justify-center text-white relative'>
        <div className="absolute w-full h-full bg-gray-900/[0.7] z-0"></div>
        <div className="flex items-center justify-center flex-col lg:w-[65%] z-10">
          <p className="lg:text-[40px] text-[30px] mt-[40px] font-semibold">
            Podsumowanie zamówienia
          </p>
        </div>
      </div>
      {isDataCompleted === true && (
        <div id="summary-wrapper" className="w-screen min-h-[400px] z-20 relative my-[20px]">
          <div id="ordering-wrapper" className="lg:w-[700px] w-[90%] mx-auto flex flex-col">
            <div>
              <p className="text-[24px] text-center w-full font-bold">{travelFirstName}!</p>
              <p className="mt-[10px]">Zamierzasz jechać z nami do {router.query.destination}!</p>
              <p className="mt-[10px] font-semibold">Jak to będzie wyglądać</p>
              <p className="mt-[5px]">
                <p>1. Zawieziemy Cię w obie strony </p>
                <p>
                  2. Poczekamy na Ciebie podczas aż do zakończenia Twojej wycieczki, która powinna
                  potrwać ok 3:50 h.git init git add . git commit -m "first commit" git branch -M
                  main git remote add origin https://github.com/Marlonbrando3/personaltaxi.git git
                  push -u origin main
                </p>
                <p>
                  3. Na wycieczkie jedzie łącznie <b>{persons} </b>osoby/osób. Dlatego pojedziecie
                  samochodem typu {travelCar}
                </p>
                <p>
                  4. Wszystkie bilety musisz kupić we własnym zakresie, są one dodatkowym kosztem
                </p>
                <p>
                  5. Jeśli chcesz być w <b>{router.query.destination}</b> dnia <b>{travelDate}</b> o
                  godzinie<b>{travelTime} </b> musimy wyjechać odpowiednio wcześniej dla będziemy po
                  Ciebie <b>{Localization}</b> o godzinie
                  <b>
                    {PickupHour}:{PickupMins}.
                  </b>
                </p>
              </p>
            </div>
            <div id="personal-data-travel" className="mt-[20px]">
              <p className="font-bold mb-[10px]">Sprawdź czy Twje dane są poprawne.</p>
              <div id="name-and-forname">
                <p>
                  <b>Imię i nazwisko: </b>
                  {travelFirstName} {travelLastName}
                </p>
              </div>
              <div id="name-and-forname" className="">
                <p>
                  <b>E-mail: </b> {travelEmail}
                </p>
              </div>
              <div id="name-and-forname">
                <p>
                  <b>Telefon: </b>
                  {travelPrefixPhone} {travelPhone}
                </p>
              </div>
              <div>
                <div className="mt-[30px]">
                  <b>Cenna końcowa:</b> {finalTravelPrice} {currencyTXT}
                </div>
                <p className="italic text-[12px] mt-[20px]">
                  Wyraziłeś zgodę na naszą politykę prywatności oraz warunki świadczenia usług.
                  Klikając przycisk niżej potwierdzasz, że wszystkie dane są poprawne i przejdziesz
                  do realizacji zamówienia i płatności.
                </p>
              </div>
              <button
                className="bg-blue-300 px-[30px] py-[5px] rounded-[10px] text-[20px] mt-[30px]"
                onClick={handleStartPayment}
              >
                Zapłać i zamów za {finalTravelPrice} {currencyTXT}
              </button>
            </div>
          </div>
        </div>
      )}
      {isDataCompleted === false && (
        <div className="w-screen h-auto flex justify-center items-center py-[60px]">
          <div className="flex flex-col items-center p-[40px]">
            <IoIosWarning className="text-red-600 w-[90px] h-[90px] mb-[20px]" />
            <div className="text-[20px]">Coś poszło nie tak :(</div>
            <Link
              href="/pl/travels"
              className="bg-blue-400 text-white text-[20px] px-[10px] py-[3px] rounded-[10px] mt-[10px]"
            >
              Spróbuj jeszcze raz
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
