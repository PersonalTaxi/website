import { NextApiRequest, NextApiResponse } from "next";
import { connectMongoDB } from "../../../libs/mongodb";
import Travel from "../../../models/travel";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  await connectMongoDB();
  const TravelData = await Travel.find({ sessionId: req.body });
  const newID = await TravelData[0]._id;
  await Travel.findByIdAndUpdate(newID, { isPayed: true });
  res.status(200).json({ Travel });
}

export default POST;
