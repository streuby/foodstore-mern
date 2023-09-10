import mongoose from "mongoose";
const AttributeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [1, "Too Short"],
      maxlength: [32, "Too Long"],
      trim: true,
      require: true,
    },
    prices: [
      {
        price: {
          type: Number,
          default: 0,
          trim: true,
        },
        currencySymbol: { type: String, required: true, maxlength: 1 },
        currency: { type: String, required: true },
      },
    ],
    product: {
      type: String,
      trim: true,
      require: true,
      default: "UnNamed",
    },
  },
  {
    timestamps: true,
  }
);
const Attribute = mongoose.model("Attribute", AttributeSchema);

export default Attribute;
