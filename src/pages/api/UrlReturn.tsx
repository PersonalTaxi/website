// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sha384 } from "crypto-hash";

type Data = {
  status: number;
  name: any;
  res: any;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let merchantId = 27407;
  let sessionId = "24345ee234";
  let amount = 120;
  let currency = "PLN";
  let crc = "fccb3ef343fe113a";

  const final = async () => {
    const DatCRC = `{"sessionId":"${sessionId}","merchantId":${merchantId},"amount":${amount},"currency":"${currency}","crc":"${crc}"}`;
    return await sha384(DatCRC);
  };

  let query = JSON.stringify({
    merchantId: 27407,
    posId: 27407,
    sessionId: "24345ee234",
    amount: 120,
    currency: "PLN",
    description: "Taxi",
    email: "m.marszalek@wearebrave.pl",
    country: "PL",
    language: "pl",
    urlReturn: "https://personaltaxi.vercel.app",
    sign: await final(),
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