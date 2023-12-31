import { AppContext } from "@/pages/_app";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useContext } from "react";

export async function VerifyTransaction(
  TypeOfService: any,
  Language: any,
  currencyTXT: any,
  query: any,
) {
  const P24 = process.env.P24_API;

  let verifiedData = await fetch("/api/verifytransactionapi", {
    method: "POST",
    body: query,
  });

  let statusMassage;

  const sendEmail = async (ObiectForMail: any) => {
    let dataForMail;

    if (TypeOfService === "taxi") {
      dataForMail = await JSON.stringify({
        id: ObiectForMail.TaxiData[0].sessionId,
        from: ObiectForMail.TaxiData[0].From,
        to: ObiectForMail.TaxiData[0].To,
        date: ObiectForMail.TaxiData[0].dateAndTime,
        name: ObiectForMail.TaxiData[0].firstName,
        email: ObiectForMail.TaxiData[0].email,
        phone: ObiectForMail.TaxiData[0].phone,
        distance: ObiectForMail.TaxiData[0].distance,
        price: ObiectForMail.TaxiData[0].price,
        flightNumber: ObiectForMail.TaxiData[0].flightNumber,
        lastname: ObiectForMail.TaxiData[0].lastName,
        unusualItems: ObiectForMail.TaxiData[0].unusualItems,
        infoForDriver: ObiectForMail.TaxiData[0].infoForDriver,
        startFromGEO: ObiectForMail.TaxiData[0].startFromGeo,
        directionGEO: ObiectForMail.TaxiData[0].directionGeo,
        language: Language,
        currency: currencyTXT,
      });

      await fetch("/api/sendnotificationTaxi", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: dataForMail,
      });
    }
    if (TypeOfService === "travel") {
      dataForMail = await JSON.stringify({
        travel_to: "lala",
        travel_starts_at: "lala",
        travel_date: "lala",
        pick_up_from_localization: "lala",
        pick_up_at_hour: "lala",
        tour_only_time: "lala",
        travel_all_time: "lala",
        drive_time_one_way: "lala",
        first_name: "String",
        last_name: "String",
        email: "String",
        phone_prefix: "String",
        phone: "String",
        info_for_driver: "String",
        language: Language,
        currency: currencyTXT,
      });

      await fetch("/api/sendnotificationTravel", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: dataForMail,
      });
    }
  };

  const final = await verifiedData.json();
  console.log(await final);

  if (final.data === "success") {
    const statusMessageToJSON = await final.data;
    statusMassage = await final.data;

    //send mail after succesed process
    if (statusMassage === "success") {
      const queryToParse = JSON.parse(query);
      const SesionIdFromQuery = queryToParse.sessionId;
      setCookie("P24", SesionIdFromQuery);

      //create data from DataBase variable
      const dataFromDB = async () => {
        //check what the service covers
        let dataFrom;
        if (TypeOfService === "travel") {
          dataFrom = await fetch("/api/mongoTravelGet", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: SesionIdFromQuery,
          });
          return await dataFrom.json();
        }

        if (TypeOfService === "taxi") {
          dataFrom = await fetch("/api/mongoTaxiGet", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: SesionIdFromQuery,
          });
          // return await dataTaxi.json();
          return await dataFrom.json();
        }
      };

      const ObiectForMail = await dataFromDB();
      console.log(dataFromDB);
      sendEmail(ObiectForMail);
      const final = await verifiedData.status;
      return final;
    } else {
      console.log(statusMassage);
      return false;
    }
  }

  const SessionID = getCookie("P24");
  console.log(SessionID);
  // };
}

export default VerifyTransaction;
