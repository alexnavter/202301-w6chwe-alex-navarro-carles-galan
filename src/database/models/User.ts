import { model, Schema } from "mongoose";

export const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 9,
  },

  email: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema, "users");

export default User;
