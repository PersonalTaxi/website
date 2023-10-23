import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   status: number;
//   name: any;
//   res: any;
// };

async function Handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
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
        body: req.body,
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

export default Handler;
