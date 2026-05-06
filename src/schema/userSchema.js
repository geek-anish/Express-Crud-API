import { Schema } from "mongoose";

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "phoneNumber is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
});

export default userSchema;
