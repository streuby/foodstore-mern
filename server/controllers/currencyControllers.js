import asyncHandler from "express-async-handler";
import Currency from "../models/currencyModel.js";

export const currencyCreate = asyncHandler(async (req, res) => {
  const { shortname, isocode, name, symbol } = req.body;
  const currencies = await Currency.find({});
  if (currencies) {
    currencies.map((currency) => {
      if (currency.symbol === symbol) {
        res.status(401);
        throw new Error("Currency Already exist");
      }
    });
  }
  const currency = await Currency.create({
    shortname,
    isocode,
    name,
    symbol,
  });
  if (currency) {
    res.json(currency);
  } else {
    res.status(401);
    throw new Error("Currency create failed");
  }
});

export const currencyList = asyncHandler(async (req, res) => {
  const currency = await Currency.find({}).sort({ createdAt: 1 });
  if (currency) {
    res.json(currency);
  } else {
    res.status(500);
    throw new Error("Currencies not found");
  }
});

export const currencyById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const currency = await Currency.findById(id);
  if (currency) {
    res.json(currency);
  } else {
    res.status(500);
    throw new Error("Currency Not Found");
  }
});

export const currencyUpdate = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { shortname, isocode, name, symbol } = req.body;
  const currency = await Currency.findById(id);
  if (currency) {
    currency.shortname = shortname;
    currency.isocode = isocode;
    currency.name = name;
    currency.symbol = symbol;
    const updatedCurrency = await currency.save();
    res.json(updatedCurrency);
  } else {
    res.status(500);
    throw new Error("Currency Not Found");
  }
});

export const currencyDelete = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const currency = await Currency.findById(id);
  if (currency) {
    await currency.remove();
    res.json({
      message: "Currency Deleted",
    });
  } else {
    res.status(500);
    throw new Error("Currency Not Found");
  }
});
