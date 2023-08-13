import mongoose from "mongoose";
const AddonSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [3, "Too Short"],
      maxlength: [32, "Too Long"],
      trim: true,
      require: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    price: {
      type: Number,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Addon = mongoose.model("Addon", AddonSchema);

export default Addon;
