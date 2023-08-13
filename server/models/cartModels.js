import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const CartSchema = mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        price: Number,
        quantity: Number,
        variableData: Object,
        addon: [
          {
            type: Object,
          },
        ],
      },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    couponApplied: {
      type: Boolean,
      default: false,
    },
    orderdBy: { type: ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);
const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
