import asyncHandler from "express-async-handler";
import Addon from "../models/addonModel.js";
import slugify from "slugify";
import Currency from "../models/currencyModel.js";

export const addonCreate = asyncHandler(async (req, res) => {
  const { name, prices } = req.body;
  const currencies = await Currency.find({});
  const pricesObj = Object.entries(prices).map(([currency, price]) => ({
    price: price,
    currencySymbol: currencies
      .map(({ isocode, symbol }) => isocode === currency && symbol)
      .filter((element) => element !== false)[0],
    currency: currency,
  }));
  const addonExist = await Addon.findOne({ slug: slugify(name) });

  if (addonExist) {
    res.status(500);
    throw new Error("Addon with the same name already exist");
  } else {
    const addon = await Addon.create({
      name,
      slug: slugify(name),
      prices: pricesObj,
    });
    if (addon) {
      res.json(addon);
    } else {
      res.status(401);
      throw new Error("Addon Addon.create failed");
    }
  }
});

export const addonList = asyncHandler(async (req, res) => {
  const addon = await Addon.find({}).sort({ createdAt: 1 });
  if (addon) {
    res.json(addon);
  } else {
    res.status(500);
    throw new Error("Addon can't found");
  }
});

export const addonBySlug = asyncHandler(async (req, res) => {
  const slug = req.params.slug;
  const addon = await Addon.findOne({ slug });
  if (addon) {
    res.json(addon);
  } else {
    res.status(500);
    throw new Error("Addon Not Found");
  }
});

export const addonUpdate = asyncHandler(async (req, res) => {
  const slug = req.params.slug;
  const { name, prices } = req.body;
  const currencies = await Currency.find({});
  const pricesObj = Object.entries(prices).map(([currency, price]) => ({
    price: price,
    currencySymbol: currencies
      .map(({ isocode, symbol }) => isocode === currency && symbol)
      .filter((element) => element !== false)[0],
    currency: currency,
  }));
  const addon = await Addon.findOne({ slug });
  if (addon) {
    const addonExist = await Addon.findOne({ slug: slugify(name) });
    if (!addonExist) {
      res.status(500);
      throw new Error("Addon with the same name does not exist");
    } else {
      addon.name = name;
      addon.slug = slugify(name);
      addon.prices = pricesObj;
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
  const addon = await Addon.findOne({ slug });
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
