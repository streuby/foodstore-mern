import asyncHandler from "express-async-handler";
import Cart from "../models/cartModels.js";
import User from "../models/userModel.js";
import Order from "../models/orderModels.js";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET);

//console.log("Stripe: ", `${process.env.STRIPE_SECRET}`);

export const createPaymentIntent = asyncHandler(async (req, res) => {
  // 1 find user
  const user = await User.findOne({ email: req.user.email }).exec();
  // 2 get user cart total
  const { cartTotal, couponApplied, totalAfterDiscount } = await Cart.findOne({
    orderdBy: user._id,
  }).exec();

  if (couponApplied === false) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: cartTotal * 100,
      currency: "usd",
    });
    if (paymentIntent) {
      console.log("payment intent: ".paymentIntent);
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      res.status(500);
      throw new Error("Stripe error on getting client_Secret");
    }
  } else {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAfterDiscount * 100,
      currency: "usd",
    });
    if (paymentIntent) {
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      res.status(500);
      throw new Error("Stripe error on getting client_Secret");
    }
  }
});

export const createPaymentIntentById = asyncHandler(async (req, res) => {
  const orderId = req.params.orderId;
  const { cartTotal, couponApplied, totalAfterDiscount } = await Order.findById(
    orderId
  ).exec();

  if (couponApplied === false) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: cartTotal * 100,
      currency: "usd",
    });
    if (paymentIntent) {
      console.log("payment intent: ".paymentIntent);
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      res.status(500);
      throw new Error("Stripe error on getting client_Secret");
    }
  } else {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAfterDiscount * 100,
      currency: "usd",
    });
    if (paymentIntent) {
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      res.status(500);
      throw new Error("Stripe error on getting client_Secret");
    }
  }
});
