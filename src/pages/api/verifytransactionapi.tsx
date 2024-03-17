import { NextApiRequest, NextApiResponse } from "next";

export async function VerifyTransactionAPI(req: NextApiRequest, res: NextApiResponse) {
  const query = req.body;

  let verifiedData = await fetch("https://secure.przelewy24.pl/api/v1/transaction/verify", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.P24_API_PROD}`,
    },
    body: query,
  });

  const result = await verifiedData.json();
  console.log({ result: await result.data.status });
  res.status(200).json({ data: await result.data.status });
}
export default VerifyTransactionAPI;
