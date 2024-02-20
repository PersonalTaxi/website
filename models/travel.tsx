import mongoose, { Schema } from "mongoose";

const TravelSchema = new Schema({
  id: String,
  Travel_to: String,
  Travel_date: String,
  Tour_start_at: String,
  Pick_up_from_localization: String,
  Pick_up_at_hour: String,
  Tour_only_time: String,
  Travel_all_time: String,
  Drive_time_one_way: String,
  First_name: String,
  Last_name: String,
  Email: String,
  Phone_prefix: String,
  Phone: String,
  Description: String,
  People: Number,
  Price: Number,
  Language: String,
  Currency: String,
  Info_for_driver: String,
  merchantId: String,
  Car_type: String,
  posId: String,
  sessionId: String,
  orderId: String,
  sign: String,
  startGeo: String,
  isPayed: { type: Boolean, default: false },
});

const Travel = mongoose.models.Travel || mongoose.model("Travel", TravelSchema);
export default Travel;
