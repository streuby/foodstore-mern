import asyncHandler from "express-async-handler";
import Attribute from "../models/attributeModel.js";

const { create, find, findById } = Attribute;

export const attributeCreate = asyncHandler(async (req, res) => {
  const { name, price, product } = req.body;
  const attribute = await create({
    name,
    price,
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
  const attribute = await find({}).sort({ createdAt: 1 });
  if (attribute) {
    res.json(attribute);
  } else {
    res.status(500);
    throw new Error("Attribute can't found");
  }
});

export const attributeById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const attribute = await findById(id);
  if (attribute) {
    res.json(attribute);
  } else {
    res.status(500);
    throw new Error("Attribute Not Found");
  }
});

export const attributeUpdate = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, price, product } = req.body;
  const attribute = await findById(id);
  if (attribute) {
    attribute.name = name;
    attribute.price = price;
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
  const attribute = await findById(id);
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
