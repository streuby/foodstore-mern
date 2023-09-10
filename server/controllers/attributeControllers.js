import asyncHandler from "express-async-handler";
import Attribute from "../models/attributeModel.js";
import Currency from "../models/currencyModel.js";

export const attributeCreate = asyncHandler(async (req, res) => {
  const { name, prices, product } = req.body;
  const currencies = await Currency.find({});
  const pricesObj = Object.entries(prices).map(([currency, price]) => ({
    price: price,
    currencySymbol: currencies
      .map(({ isocode, symbol }) => isocode === currency && symbol)
      .filter((element) => element !== false)[0],
    currency: currency,
  }));
  const attribute = await Attribute.create({
    name,
    prices: pricesObj,
    product,
  });
  if (attribute) {
    res.json(attribute);
  } else {
    res.status(401);
    throw new Error("Attribute create failed");
  }
});

export const attributeList = asyncHandler(async (req, res) => {
  const attribute = await Attribute.find({}).sort({ createdAt: 1 });
  if (attribute) {
    res.json(attribute);
  } else {
    res.status(500);
    throw new Error("Attribute can't found");
  }
});

export const attributeById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const attribute = await Attribute.findById(id);
  if (attribute) {
    res.json(attribute);
  } else {
    res.status(500);
    throw new Error("Attribute Not Found");
  }
});

export const attributeUpdate = asyncHandler(async (req, res) => {
  const currencies = await Currency.find({});
  const id = req.params.id;
  const { name, prices, product } = req.body;
  const pricesObj = Object.entries(prices).map(([currency, price]) => ({
    price: price,
    currencySymbol: currencies
      .map(({ isocode, symbol }) => isocode === currency && symbol)
      .filter((element) => element !== false)[0],
    currency: currency,
  }));
  const attribute = await Attribute.findById(id);
  if (attribute) {
    attribute.name = name;
    attribute.prices = pricesObj;
    attribute.product = product;
    const updatedAttribute = await attribute.save();
    res.json(updatedAttribute);
  } else {
    res.status(500);
    throw new Error("Attribute Not Found");
  }
});

export const attributeDelete = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const attribute = await Attribute.findById(id);
  if (attribute) {
    await attribute.remove();
    res.json({
      message: "Attribute Deleted",
    });
  } else {
    res.status(500);
    throw new Error("Attribute Not Found");
  }
});
