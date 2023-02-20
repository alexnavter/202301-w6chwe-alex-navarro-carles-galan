import { Schema } from "mongoose";

export const userSchema = new Schema({
  userName: String,
  password: String,
  email: String,
});
