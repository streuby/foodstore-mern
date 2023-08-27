import mongoose from "mongoose";

const CurrencySchema = mongoose.Schema(
  {
    shortname: { type: String, required: true },
    isocode: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Currency = mongoose.model("Currency", CurrencySchema);

export default Currency;
