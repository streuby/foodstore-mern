import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import slugify from "slugify";
import cloudinary from "../config/cloudinary.js";

const { findOne, create, find, findById } = Product;

export const uploadImage = asyncHandler(async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(req.body.image, {
    upload_preset: "foodstore",
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

export const removeImage = asyncHandler(async (req, res) => {
  const remove = await cloudinary.v2.uploader.destroy(req.body.id);
  if (remove.result === "ok") {
    res.json(remove);
  } else {
    res.status(500);
    throw new Error("Image Not Found");
  }
});

export const productCreate = asyncHandler(async (req, res) => {
  const {
    title,
    price,
    image,
    category,
    variable,
    addon,
    sold,
    description,
    delivery,
    availability,
  } = req.body;

  const productExist = await findOne({ slug: slugify(title) });

  if (productExist) {
    res.status(500);
    throw new Error("Product with the same name already exist");
  } else {
    const product = await create({
      user: req.user.name,
      title,
      slug: slugify(title),
      price,
      image,
      variable,
      category,
      addon,
      sold,
      description,
      delivery,
      availability,
    });
    if (product) {
      res.json(product);
    } else {
      res.status(401);
      throw new Error("Product create failed");
    }
  }
});

export const getProducts = asyncHandler(async (req, res) => {
  const search = req.query.search;
  if (search !== "" || null) {
    const products = await find({
      title: { $regex: search, $options: "i" },
    })
      .select("title slug image.url")
      .limit(12)
      .exec();
    res.json(products);
  } else {
    res.json([]);
  }
});

export const deleteProducts = asyncHandler(async (req, res) => {
  const product = await findById(req.params.id);
  if (product) {
    await cloudinary.v2.uploader.destroy(product.image.public_id);
    await product.remove();
    res.json({
      message: "Product Deleted",
    });
  } else {
    res.status(500);
    throw new Error("Product Not Found");
  }
});

export const getProductDetails = asyncHandler(async (req, res) => {
  const product = await findOne({ slug: req.params.slug })
    .populate("category", "name slug")
    .populate("addon", "name price slug")
    .populate({
      path: "variable",
      populate: { path: "attribute" },
    });
  if (product) {
    res.json(product);
  } else {
    res.status(500);
    throw new Error("Product Not Found");
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await findOne({ slug: req.params.slug });
  const {
    title,
    price,
    variable,
    image,
    category,
    addonPrev: addon,
    sold,
    description,
    delivery,
    availability,
  } = req.body;

  if (product) {
    product.title = title;
    product.slug = slugify(title);
    product.price = price;
    product.variable = variable;
    product.image = image;
    product.category = category;
    product.addon = addon;
    product.sold = sold;
    product.description = description;
    product.delivery = delivery;
    product.availability = availability;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(500);
    throw new Error("Product Not Found");
  }
});

export const countProducts = asyncHandler(async (req, res) => {
  const count = await find({}).estimatedDocumentCount().exec();
  res.json(count);
});

export const getProductsAdmin = asyncHandler(async (req, res) => {
  const { page, sort, order } = req.body;
  const currentPage = page || 1;
  const perPage = 10;

  const products = await find({})
    .populate("category", "name slug")
    .populate("addon", "name price slug")
    .populate({
      path: "variable",
      populate: { path: "attribute" },
    })
    .skip((currentPage - 1) * perPage)
    .sort([[sort, order]])
    .limit(perPage)
    .exec();
  res.json(products);
});
