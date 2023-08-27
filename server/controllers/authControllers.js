import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const createOrUpdateUser = asyncHandler(async (req, res) => {
  try {
    const { name, picture, email } = req.user;

    const user = await User.findOneAndUpdate(
      { email },
      { name, picture },
      { new: true }
    );
    if (user) {
      res.json(user);
    } else {
      const newUser = await new User({
        email,
        name,
        picture,
      }).save();

      res.json(newUser);
    }
  } catch (error) {
    console.error("Request failed with error: ", error);
  }
});

export const currentUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(401);
      throw new Error("User Not Found");
    }
  } catch (error) {
    console.error("request failed with error: ", error);
  }
});
