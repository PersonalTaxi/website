import { setCookie, getCookie } from "cookies-next";

export async function VerifyTransaction(query: any) {
  const P24 = process.env.P24_API;

  console.log(query);

  let verifiedData = await fetch("/api/verifytransactionapi", {
    method: "POST",
    body: query,
  });

  let statusMassage;

  const sendEmail = async (ObiectForMail: any) => {
    const dataForMail = JSON.stringify({
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

    // if (!router.asPath.includes("email")) {
    let mail = await fetch("/api/sendnotification", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: dataForMail,
    });
    const data = await mail;
    // router.push("?email=true", undefined, { shallow: true });
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
      const dataFromDG = await fetch("/api/mongoget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: SesionIdFromQuery,
      });
      const ObiectForMail = await dataFromDG.json();
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
