import asyncHandler from "express-async-handler";
import pkg from "firebase-admin";
import User from "../models/userModel.js";

const { auth } = pkg;

const { findOne } = User;

export const protect = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      req.user = await auth().verifyIdToken(token);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
});

export const adminCheck = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminEmail = await findOne({ email });
  if (adminEmail.role !== "admin") {
    res.status(401);
    throw new Error("Not authorized as an admin");
  } else {
    next();
  }
});
