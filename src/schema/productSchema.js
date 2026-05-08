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
},
{
  timestamps:true,
  toJSON: {
transform: (doc, ret) => {
delete ret.__v;
ret.id=ret._id;
delete ret._id;
},
}
}
);

export default productSchema;
