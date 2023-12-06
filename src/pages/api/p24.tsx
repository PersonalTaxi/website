import type { NextApiRequest, NextApiResponse } from "next";

async function Handler(req: NextApiRequest, res: NextApiResponse) {
  const P24 = process.env.P24_API;

  try {
    let respond = await fetch("https://sandbox.przelewy24.pl/api/v1/transaction/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${P24}`,
      },
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
