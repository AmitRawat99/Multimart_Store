import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
    uniqe: true,
  },
  productName: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  shortDesc: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  reviews: [
    {
      rating: Number,
      text: String,
    },
  ],
  avgRating: {
    type: String,
    require: true,
  },
});

export const Products = mongoose.model("Products", ProductSchema);
