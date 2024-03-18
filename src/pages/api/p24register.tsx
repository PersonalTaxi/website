import type { NextApiRequest, NextApiResponse } from "next";

async function Handler(req: NextApiRequest, res: NextApiResponse) {
  const P24 = process.env.P24_API_PROD;
  const user = process.env.P24_ID;

  const base64encodedData = Buffer.from(`${user}:${P24}`).toString("base64");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Basic ${base64encodedData}`);

  try {
    let respond = await fetch("https://secure.przelewy24.pl/api/v1/transaction/register", {
      method: "POST",
      headers: myHeaders,
      body: req.body,
    });

    const data = await respond.json();
    console.log(data);
    return res.status(200).json({ msg: data });
  } catch (err) {
    console.log(err);
    return res.status(403).json({ msg: err });
  }
}

export default Handler;
