import asyncHandler from "express-async-handler";
import Coupon from "../models/couponModels.js";

const { create, find, findById } = Coupon;

export const couponCreate = asyncHandler(async (req, res) => {
  const { name, expiry, discount } = req.body;
  const createCoupon = await create({
    name,
    expiry,
    discount,
  });
  if (createCoupon) {
    res.json(createCoupon);
  } else {
    res.status(401);
    throw new Error("Coupon create failed");
  }
});

export const couponList = asyncHandler(async (req, res) => {
  const coupon = await find({}).sort({ createdAt: -1 }).exec();
  if (coupon) {
    res.json(coupon);
  } else {
    res.status(401);
    throw new Error("Cant get coupon list");
  }
});

export const couponDelete = asyncHandler(async (req, res) => {
  const coupon = await findById(req.params.id);
  if (coupon) {
    await coupon.remove();
    res.json({
      message: "Coupon Deleted",
    });
  } else {
    res.status(500);
    throw new Error("Coupon Not Found");
  }
});
