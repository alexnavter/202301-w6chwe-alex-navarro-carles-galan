import { model, Schema } from "mongoose";

const robotSchema = new Schema({
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

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
