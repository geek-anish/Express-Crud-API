import { model } from "mongoose";
import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import schoolSchema from "./schoolSchema.js";

export const Product = model("Product", productSchema);
export const User = model("User", userSchema);
export const School = model("School", schoolSchema);

/* 
always name table name as first letter capital

*/
