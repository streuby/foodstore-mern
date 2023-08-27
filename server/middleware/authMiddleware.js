import asyncHandler from "express-async-handler";
import pkg from "firebase-admin";
import User from "../models/userModel.js";
import { admin, serviceAccount } from "../firebase/index.js";

const { auth } = pkg;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const protect = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      req.user = await auth().verifyIdToken(token);
      console.log("Authentication approved >>>>>");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
});

export const adminCheck = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminEmail = await User.findOne({ email });
  if (adminEmail.role !== "admin") {
    res.status(401);
    throw new Error("Not authorized as an admin");
  } else {
    console.log("Admin authentication approved >>>>>");
    next();
  }
});
