import express from "express";
import {
  getAllProducts,
  addAllProduct,
  updateProduct,
  deleteProduct
} from "../controllers/ProductController.js";
const router = express.Router();

router.get("/products", getAllProducts);
router.post("/new-product", addAllProduct);
router.put("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);

export default router;
