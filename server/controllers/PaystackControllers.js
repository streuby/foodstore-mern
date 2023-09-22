import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Cart from "../models/cartModels.js";

export const getPaystackPublicKey = asyncHandler(async (req, res) => {
  if (req.params.gateway === "paystack") {
    res.send(process.env.PAYSTACK_PUBLIC_KEY);
  } else {
    res.status(500);
    throw new Error("Wrong gateway specified");
  }
});

export const getPaymentIntent = asyncHandler(async (req, res) => {
  console.log("Fired getPaymentIntent >>");
  try {
    const user = await User.findOne({ email: req.user.email }).exec();
    // 2 get user cart total
    const { cartTotal, couponApplied, currency, totalAfterDiscount } =
      await Cart.findOne({
        orderdBy: user._id,
      }).exec();

    if (couponApplied === false) {
      const paymentIntent = {
        amount: cartTotal,
        currency: currency,
      };
      res.send(paymentIntent);
    } else if (couponApplied === true) {
      const paymentIntent = {
        amount: totalAfterDiscount,
        currency: currency,
      };
      res.send(paymentIntent);
    } else {
      res.status(500);
      throw new Error("Paystack error on getting Paymment Intent");
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(error);
  }
});
