import { model, Schema } from "mongoose";

export const robotSchema = new Schema({
  name: String,
  image: String,
  specs: {
    speed: Number,
    endurance: Number,
    creationDate: String,
  },
});

export const Robot = model("Robot", robotSchema, "robots");
