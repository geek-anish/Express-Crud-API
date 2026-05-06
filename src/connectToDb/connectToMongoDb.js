import mongoose from "mongoose";
import { dbUrl } from "../config.js";

const connectToMongoDb = () => {
  // connect our application with mongodb database
  mongoose.connect(dbUrl);
  console.log("application is connected with database sucessfully");
};

export default connectToMongoDb;
