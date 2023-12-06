import { setCookie, getCookie } from "cookies-next";

export async function VerifyTransaction(TypeOfService: any, query: any) {
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
        from: ObiectForMail.orders[0].From,
        to: ObiectForMail.orders[0].To,
        name: ObiectForMail.orders[0].firstName,
        email: ObiectForMail.orders[0].email,
        phone: ObiectForMail.orders[0].phone,
        distance: ObiectForMail.orders[0].distance,
        price: ObiectForMail.orders[0].price,
        lastname: ObiectForMail.orders[0].lastName,
        unusualItems: ObiectForMail.orders[0].unusualItems,
        infoForDriver: ObiectForMail.orders[0].infoForDriver,
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

      //create data from DataBase varable
      let dataFromDB;

      //check what the service covers
      if (TypeOfService === "travel") {
        dataFromDB = await fetch("/api/mongoTravelGet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: SesionIdFromQuery,
        });
      }
      if (TypeOfService === "taxi") {
        dataFromDB = await fetch("/api/mongoTaxiGet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: SesionIdFromQuery,
        });
      }

      const ObiectForMail = await dataFromDB?.json();
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
