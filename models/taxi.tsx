import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  id: String,
  From: String,
  To: String,
  distance: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  description: String,
  country: String,
  price: Number,
  currency: String,
  infoForDriver: String,
  unusualItems: String,
  merchantId: String,
  posId: String,
  sessionId: String,
  orderId: String,
  sign: String,
  startFromGeo: [Number],
  directionGeo: [Number],
  isPayed: { type: Boolean, default: false },
});

const Taxi = mongoose.models.Taxi || mongoose.model("Taxi", OrderSchema);
export default Taxi;
