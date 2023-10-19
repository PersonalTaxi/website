// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

async function handlerData(req: NextApiRequest, res: NextApiResponse) {
  await fetch("https://psbeta.vercel.app/ordering/p24callback", {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic Mjc0MDc6MWI2NDdjYTJjYjRkZGI0ZmFmY2Q3NjgzZmM0MGZiYTY=",
    },
  });
  const final = await req.body;
  res.status(200).json({ msg: final });
}

export default handlerData;
