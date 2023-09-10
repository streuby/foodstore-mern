import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const productSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    currency: [{ type: ObjectId, ref: "Currency", required: true }],
    image: {
      type: Object,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    addon: [
      {
        type: ObjectId,
        ref: "Addon",
      },
    ],
    sold: {
      type: Number,
      default: 0,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    delivery: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
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
    variable: {
      type: ObjectId,
      ref: "Variable",
      default: null,
    },
    availability: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

export default Product;
