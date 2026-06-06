import { Schema } from "mongoose";

import studentPaginate from "mongoose-paginate-v2";


const studentSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minLength: [3, "name must be atleast 3 character long"],
    maxLength: [15, "name must be most 15 character long"],
  },
  roll: {
    type: Number,
    default: 20,
    min: [10, "roll must at least 10"],
    max: [200, "roll must at most 200"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    validate: (value) => {
      if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
      } else {
        throw new Error(" Email validation error");
      }
    },
  },
  phoneNumber: {
    type: String,
    required: [true, "number is required"],
    validate: (value) => {
      if (value.length !== 10) {
        throw new Error("number must be 10");
      } else if (value.startsWith("97") || value.startsWith("98")) {
      } else {
        throw new Error(" phonenumber length must be 10 and start with 98");
      }
    },
  },
  password: {
    type: String,
    required: [true, "password is required"],

    validate: (value) => {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,20}$/.test(value)) {
      } else {
        throw new Error(" it must mave uppercase");
      }
    },
  },
  isMarried: {
    type: Boolean,
    required: [true, "isMarried is required"],
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
    validate: (value) => {
      if (["male", "female", "other"].includes(value)) {
      } else {
        throw new Error(" gender must be male , femlae or other");
      }
    },
  },
  dob: {
    type: Date,
    required: [true, "dob is required"],
  },
  location: {
    country: { type: String, required: [true, "country is required"] },
    exactLocation: { type: String, required: [true, " is required"] },
  },
  favTeacher: [{ type: String }],

  favSubject: [
    {
      bookName: { type: String, required: [true, "bookName is required"] },
      bookAuthor: { type: String, required: [true, "bookAuthor is required"] },
    },
  ],
});

studentSchema.plugin(studentPaginate);


export default studentSchema;
