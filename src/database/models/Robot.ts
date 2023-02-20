import { model, Schema } from "mongoose";

export const robotSchema = new Schema({
  name: String,
  image: String,
  specs: {
    speed: Number,
    endurance: Number,
    creationDate: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    requiered: true,
  },
});

export const Robot = model("Robot", robotSchema, "robots");
