import asyncHandler from "express-async-handler";
import Variable from "../models/variableModel.js";

export const variableCreate = asyncHandler(async (req, res) => {
  const { name, attribute } = req.body;

  const variable = await Variable.create({
    name,
    attribute,
  });
  if (variable) {
    res.json(variable);
  } else {
    res.status(401);
    throw new Error("Variable create failed");
  }
});

export const variableList = asyncHandler(async (req, res) => {
  const variable = await Variable.find({})
    .populate("attribute")
    .sort({ createdAt: 1 });
  if (variable) {
    res.json(variable);
  } else {
    res.status(500);
    throw new Error("Variable can't found");
  }
});

export const variableDelete = asyncHandler(async (req, res) => {
  const variableId = req.params.id;
  const variable = await Variable.findById(variableId);
  if (variable) {
    await Variable.deleteOne({ _id: variableId });
    res.json({
      message: "Variable Deleted",
    });
  } else {
    res.status(500);
    throw new Error("Variable Not Found");
  }
});

export const variableById = asyncHandler(async (req, res) => {
  const variableId = req.params.id;
  const variable = await Variable.findById(variableId).populate("attribute");
  if (variable) {
    res.json(variable);
  } else {
    res.status(500);
    throw new Error("Variable Not Found");
  }
});

export const variableUpdate = asyncHandler(async (req, res) => {
  const variableId = req.params.id;
  const { name, attribute } = req.body;
  const variable = await Variable.findById(variableId);
  if (variable) {
    variable.name = name;
    variable.attribute = attribute;
    const updatedVariable = await variable.save();
    res.json(updatedVariable);
  } else {
    res.status(500);
    throw new Error("Variable Not Found");
  }
});
