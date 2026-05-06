/* 
School

title 
descript
location
salary


*/

import { Schema } from "mongoose";

const schoolSchema = Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  location: {
    type: String,
    required: [true, "location is required"],
  },
  salary: {
    type: Number,
    required: [true, "salary is required"],
  },
});

export default schoolSchema;
