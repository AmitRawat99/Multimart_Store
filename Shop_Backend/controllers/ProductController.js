import { Products } from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const AllProduct = await Products.find();

    if (!AllProduct || AllProduct.length === 0) {
      res.status(400).json({
        success: false,
        message: "Not Found Product This Category",
      });
    }

    res.status(201).json({
      success: true,
      message: "Products fetched successfully",
      Products: AllProduct,
    });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({
      success: false,
      message: "SomeThink Went Wrong",
      error: error.message,
    });
  }
};

export const addAllProduct = async (req, res) => {
  const newProduct = await new Products(req.body);
  try {
    const saveProduce = newProduct.save();
    if (saveProduce) {
      res.status(201).json({
        success: true,
        message: "Create Product Successfully",
        newProudct: newProduct,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "SomeThink Went Wrong",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const ProductId = req.params.id;
    const updateProduct = await Products.findByIdAndUpdate(
      ProductId,
      { $set: req.body },
      { new: true }
    );

    if (!updateProduct) {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(201).json({
      success: true,
      message: "product successfully update",
      product: updateProduct,
    });
  } catch (error) {
    console.log("update error", error);
    res.status(500).json({
      success: false,
      message: "Somethink Went Wrong",
      error: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const ProductId = req.params.id;
  try {
    const deleteProduct = await Products.findByIdAndDelete(ProductId);
    res.status(201).json({
      success: true,
      message: "Delete Product Successfully",
      product: deleteProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Somethink went wrong",
      error: error.message,
    });
  }
};
