import express from "express";
import {createProductController} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
 formidable(),
  createProductController
);

//get products
router.get("/get-product", getProductController);


export default router;
