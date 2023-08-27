import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
import slugify from "slugify";
import cloudinary from "../config/cloudinary.js";

export const categoryUploadImage = asyncHandler(async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.body.image, {
    upload_preset: "foodcat",
    use_filename: true,
    public_id: `${Date.now()}`,
    resource_type: "auto", // jpeg, png
  });
  if (result) {
    res.json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
});

export const categoryRemoveImage = asyncHandler(async (req, res) => {
  const remove = await cloudinary.v2.uploader.destroy(req.body.id);
  if (remove.result === "ok") {
    res.json(remove);
  } else {
    res.status(500);
    throw new Error("Image Not Found");
  }
});

export const categoryCreate = asyncHandler(async (req, res) => {
  const { category, image } = req.body;
  const categoryExist = await Category.findOne({ slug: slugify(category) });

  if (categoryExist) {
    res.status(500);
    throw new Error("Category with the same name already exist");
  } else {
    const createdCategory = await Category.create({
      name: category,
      image,
      slug: slugify(category),
    });
    if (createdCategory) {
      res.json(createdCategory);
    } else {
      res.status(401);
      throw new Error("Category create failed");
    }
  }
});

export const categoryList = asyncHandler(async (req, res) => {
  const category = await Category.find({}).sort({ createdAt: 1 });
  if (category) {
    res.json(category);
  } else {
    res.status(500);
    throw new Error("Category can't found");
  }
});

export const categoryBySlug = asyncHandler(async (req, res) => {
  const slug = req.params.slug;
  const category = await Category.findOne({ slug });
  if (category) {
    res.json(category);
  } else {
    res.status(500);
    throw new Error("Category Not Found");
  }
});

export const categoryUpdate = asyncHandler(async (req, res) => {
  const { name, image } = req.body;
  const category = await Category.findOne({ slug: req.params.slug });
  if (category) {
    category.name = name;
    category.image = image;
    category.slug = slugify(name);
    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } else {
    res.status(500);
    throw new Error("Category Not Found");
  }
});

export const categoryDelete = asyncHandler(async (req, res) => {
  const slug = req.params.slug;
  const category = await Category.findOne({ slug });

  if (category) {
    await cloudinary.v2.uploader.destroy(category.image.public_id);
    await category.remove();
    res.json({
      message: "Category Deleted",
    });
  } else {
    res.status(500);
    throw new Error("Category Not Found");
  }
});

export const productsByCategory = asyncHandler(async (req, res) => {
  const category = await Category.findOne({ slug: req.body.slug });
  const products = await Product.find({ category, availability: "Yes" })
    .sort([["title", "ASC"]])
    .populate("category")
    .populate("addon")
    .populate({
      path: "variable",
      populate: { path: "attribute" },
    });
  res.json({ products, category });
});
