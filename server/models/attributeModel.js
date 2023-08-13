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
    price: {
      type: Number,
      trim: true,
      require: true,
    },
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
