// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { useContext } from "react";
import { sha384 } from "crypto-hash";
import bcrypt from "bcrypt";
import { AppContext } from "../_app";

// type Data = {
//   status: number;
//   name: any;
//   res: any;
// };

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    queryFrom,
    queryTo,
    date,
    time,
    people,
    latLangFrom,
    latLangTo,
    cars,
    calculateDistance,
    isFormCompleted,
    SearchButtonWasClicked,
    dateLimit,
    personTitle,
    firstName,
    lastName,
    email,
    phone,
    phonePrefix,
    price,
  } = useContext(AppContext);

  let merchantId = 27407;
  let sessionId = await bcrypt.hash("895043jrifokds", 10);
  let amount = 2500;
  let currency = "PLN";
  let crc = "fccb3ef343fe113a";

  const querySign = async () => {
    const DatCRC = `{"sessionId":"${sessionId}","merchantId":${merchantId},"amount":${amount},"currency":"${currency}","crc":"${crc}"}`;
    return await sha384(DatCRC);
  };

  let query = JSON.stringify({
    merchantId: 27407,
    posId: 27407,
    sessionId: sessionId,
    amount: price,
    currency: "PLN",
    description: firstName,
    email: email,
    country: "PL",
    language: "pl",
    urlReturn: "https://ptbeta.vercel.app/ordering/verify",
    urlStatus: "https://ptbackend.vercel.app/",
    sign: await querySign(),
  });

  try {
    let respond = await fetch(
      "https://sandbox.przelewy24.pl/api/v1/transaction/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic Mjc0MDc6MWI2NDdjYTJjYjRkZGI0ZmFmY2Q3NjgzZmM0MGZiYTY=",
        },
        body: query,
      },
    );

    const data = await respond.json();
    console.log(data);
    return res.status(200).json({ msg: data });
  } catch (err) {
    console.log(err);
    return res.status(403).json({ msg: err });
  }
}

export default handler;
