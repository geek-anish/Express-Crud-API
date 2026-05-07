import { model } from "mongoose";
import productSchema from "./productSchema.js";
import userSchema from "./userSchema.js";
import studentSchema from "./studentSchema.js";
import jobSchema from "./jobSchema.js";

export const Product = model("Product", productSchema);
export const User = model("User", userSchema);
export const Job = model("Job", jobSchema);
export const Student=model ("Student",studentSchema);

/* 
always name table name as first letter capital

*/
