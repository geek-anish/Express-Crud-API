import { Schema } from "mongoose";

const productSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required"],
  },
  isDamage: {
    type: Boolean,
    required: [true, "isDamage is required"],
  },
});

export default productSchema;
