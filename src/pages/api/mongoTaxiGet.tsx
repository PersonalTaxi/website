import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "../../../libs/mongodb";
import Taxi from "../../../models/taxi";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  await connectMongoDB();
  const TaxiData = await Taxi.find({ sessionId: req.body });
  const newID = await TaxiData[0]._id;
  await Taxi.findByIdAndUpdate(newID, { isPayed: true });
  res.status(200).json({ TaxiData });
}

export default POST;
