import express from "express";
import {
  addCategory,
  deleteCategoryByPathName,
  getCategory,
  getCategoryByPathName,
  getProductListByPathname,
  addNewProduct,
  //deleteProductByPathName,
} from "../controllers/categoryController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getCategory);

router
  .route("/:id")
  .get(getCategoryByPathName)
  .delete(protect, admin, deleteCategoryByPathName);

router.route("/getproducts/:pathName").get(getProductListByPathname);

router.route("/add").post(protect, admin, addCategory);

router.route("/addProduct").post(protect, admin, addNewProduct);

router
  .route("/deleteProduct/:pathName")
  //.delete(protect, admin, deleteProductByPathName);


export default router;
