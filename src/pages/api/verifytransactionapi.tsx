import { NextApiRequest, NextApiResponse } from "next";

export async function VerifyTransactionAPI(
  req: NextApiRequest,
  res: NextApiResponse,
  query: any,
) {
  let verifiedData = await fetch(
    "https://sandbox.przelewy24.pl/api/v1/transaction/verify",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${process.env.P24_API}`,
      },
      body: query,
    },
  );

  console.log(await verifiedData.json());
  res.status(200);
}
export default VerifyTransactionAPI;
