import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      index: true,
    },
    role: {
      type: String,
      default: "customer",
    },
    cart: {
      type: Array,
      default: [],
    },
    shipping: {
      address: String,
      city: String,
      country: String,
      postcode: String,
    },
    wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);

export default User;
