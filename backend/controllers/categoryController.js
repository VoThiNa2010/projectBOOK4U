import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

// @desc    Fetch all brands
// @route   GET /api/brands
// @access  Public
const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.find({});
  res.json(category);
});

const getCategoryByPathName = asyncHandler(async (req, res) => {
  const category = await Category.findOne({ pathName: `${req.params.id}` });
  if (category) {
    res.json(category);
  } else {
    res.status(404);
    throw new Error("Category not found!");
  }
});

const addCategory = asyncHandler(async (req, res) => {
  const { categoryName, pathName } = req.body;
  const categoryPathNameExists = await Category.findOne({ pathName });
  const categoryNameExists = await Category.findOne({ categoryName });
  if (categoryPathNameExists) {
    res.status(400);
    throw new Error("Category already existed");
  }

  if (categoryNameExists) {
    res.status(400);
    throw new Error("Name already existed");
  }

  const newCategory = await Category.create({
    categoryName,
    pathName,

  });

  if (newCategory) {
    await newCategory.save();
    res.status(201).json({
      _id: newCategory._id,
      categoryName: newCategory.categoryName,
      pathName: newCategory.pathName,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

const getProductListByPathname = asyncHandler(async (req, res) => {
  const category = await Category.findOne({
    pathName: `${req.params.pathName}`,
  });
  if (category) {
    const productList = await Product.find({ category: category.categoryName });
    res.json(productList);
  } else {
    res.status(404);
    throw new Error("Category not found!");
  }
});

const deleteCategoryByPathName = asyncHandler(async (req, res) => {
  const category = await Category.findOne({ pathName: req.params.id });
  const products = await Product.find({ category: category.categoryName });
  if (category) {
    for (let i = 0; i < products.length; i++) {
      await products[i].remove();
    }
    await category.remove();
    res.json({ message: "Category removed" });
  } else {
    res.status(404);
    throw new Error("Category not found");
  }
});

export {
  getCategory,
  getCategoryByPathName,
  addCategory,
  getProductListByPathname,
  deleteCategoryByPathName,
};
