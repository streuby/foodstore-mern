import asyncHandler from "express-async-handler";
import Addon from "../models/addonModel.js";
import slugify from "slugify";

const { findOne, create, find } = Addon;

export const addonCreate = asyncHandler(async (req, res) => {
  const { name, price } = req.body;
  const addonExist = await findOne({ slug: slugify(name) });

  if (addonExist) {
    res.status(500);
    throw new Error("Addon with the same name already exist");
  } else {
    const addon = await create({
      name,
      slug: slugify(name),
      price,
    });
    if (addon) {
      res.json(addon);
    } else {
      res.status(401);
      throw new Error("Addon create failed");
    }
  }
});

export const addonList = asyncHandler(async (req, res) => {
  const addon = await find({}).sort({ createdAt: 1 });
  if (addon) {
    res.json(addon);
  } else {
    res.status(500);
    throw new Error("Addon can't found");
  }
});

export const addonBySlug = asyncHandler(async (req, res) => {
  const slug = req.params.slug;
  const addon = await findOne({ slug });
  if (addon) {
    res.json(addon);
  } else {
    res.status(500);
    throw new Error("Addon Not Found");
  }
});

export const addonUpdate = asyncHandler(async (req, res) => {
  const slug = req.params.slug;
  const { name, price } = req.body;
  const addon = await findOne({ slug });
  if (addon) {
    const addonExist = await findOne({ slug: slugify(name) });
    if (addonExist) {
      res.status(500);
      throw new Error("Addon with the same name already exist");
    } else {
      addon.name = name;
      addon.slug = slugify(name);
      addon.price = price;
      const updatedAddon = await addon.save();
      res.json(updatedAddon);
    }
  } else {
    res.status(500);
    throw new Error("Addon Not Found");
  }
});

export const addonDelete = asyncHandler(async (req, res) => {
  const slug = req.params.slug;
  const addon = await findOne({ slug });
  if (addon) {
    await addon.remove();
    res.json({
      message: "Addon Deleted",
    });
  } else {
    res.status(500);
    throw new Error("Addon Not Found");
  }
});
