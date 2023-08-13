import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Cart from "../models/cartModels.js";
import Order from "../models/orderModels.js";
import Product from "../models/productModel.js";

const { findOne } = User;
const { findOne: _findOne } = Cart;
const { findById, find } = Order;
const { bulkWrite } = Product;

export const orderCreate = asyncHandler(async (req, res) => {
  const { paymentIntent, paymentMethod } = req.body;

  const user = await findOne({ email: req.user.email }).exec();

  if (user) {
    const { products, cartTotal, totalAfterDiscount, couponApplied } =
      await _findOne({ orderdBy: user._id }).exec();

    const newOrder = await new Order({
      products,
      cartTotal,
      totalAfterDiscount,
      couponApplied,
      paymentIntent,
      paymentMethod,
      orderdBy: user._id,
    }).save();

    if (newOrder) {
      res.json(newOrder);
      // increment sold
      const bulkOption = products.map((item) => {
        return {
          updateOne: {
            filter: { _id: item.product }, // IMPORTANT item.product
            update: { $inc: { sold: +item.quantity } },
          },
        };
      });

      await bulkWrite(bulkOption, {});
    } else {
      res.status(500);
      throw new Error("Can't create Order");
    }
  } else {
    res.status(500);
    throw new Error("User Not Found");
  }
});

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await findById(req.params.id)
    .populate("orderdBy", "name email shipping role")
    .populate("products.product", "_id title price image slug addon")
    .exec();
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

export const userOrderList = asyncHandler(async (req, res) => {
  const user = await findOne({ email: req.user.email }).exec();
  if (user) {
    const order = await find({ orderdBy: user._id }).sort("-createdAt").exec();

    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export const adminOrderList = asyncHandler(async (req, res) => {
  const order = await find({}).sort("-createdAt").exec();
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

export const updateOrderStatus = asyncHandler(async (req, res) => {
  const orderId = req.params.id;
  const status = req.body.status;

  const order = await findById(orderId).exec();
  if (order) {
    order.orderStatus = status;
    const updatedStatus = await order.save();
    if (updatedStatus) {
      res.json(updatedStatus);
    } else {
      res.status(501);
      throw new Error("Order Cant update");
    }
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

export const updatePaymentStatus = asyncHandler(async (req, res) => {
  const orderId = req.params.id;
  const status = req.body.status;

  const order = await findById(orderId).exec();
  if (order) {
    if (order.paymentIntent) {
      order.paymentIntent.status = status;
      const updatedStatus = await order.save();
      if (updatedStatus) {
        res.json(updatedStatus);
      } else {
        res.status(501);
        throw new Error("Order Cant update");
      }
    }
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});
