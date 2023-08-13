import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Order from "../models/orderModels.js";

const { find, findOneAndUpdate, findById, findOne } = User;

const { find: _find } = Order;

export const userList = asyncHandler(async (req, res) => {
  const users = await find({});
  if (users) {
    res.json(users);
  }
});

export const saveShippingAddress = asyncHandler(async (req, res) => {
  const userAddress = await findOneAndUpdate(
    { email: req.user.email },
    { shipping: req.body.shipping }
  ).exec();
  if (userAddress) {
    res.json(userAddress);
  }
});

export const userDetails = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await findById(userId).exec();
  const orderList = await _find({ orderdBy: userId }).sort("-createdAt").exec();

  if (orderList && user) {
    res.json({ user, orderList });
  } else {
    res.status(404);
    throw new Error("User And Order Not Found");
  }
});

export const addToWishlist = asyncHandler(async (req, res) => {
  const productId = req.params.id;

  const user = await findOneAndUpdate(
    { email: req.user.email },
    { $addToSet: { wishlist: productId } }
  ).exec();

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("product failed to add in wishlist");
  }
});

export const removeFromWishlist = asyncHandler(async (req, res) => {
  const productId = req.params.id;

  const user = await findOneAndUpdate(
    { email: req.user.email },
    { $pull: { wishlist: productId } }
  ).exec();

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("product failed to Remove from wishlist");
  }
});

export const wishlistData = asyncHandler(async (req, res) => {
  const list = await findOne({ email: req.user.email })
    .select("wishlist")
    .populate({
      path: "wishlist",
      select: "_id slug title category variable price image.url availability",
      populate: { path: "variable", populate: { path: "attribute" } },
    })
    .populate({
      path: "wishlist",
      select: "_id slug title category variable price image.url availability",
      populate: { path: "category" },
    })
    .exec();

  if (list) {
    res.json(list);
  } else {
    res.status(404);
    throw new Error("Failed to get wishlist");
  }
});
