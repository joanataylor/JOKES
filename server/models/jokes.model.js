// const mongoose = require("mongoose");
import mongoose from "mongoose";

const JokeSchema = new mongoose.Schema({

  funny: {
    type: String,
  },
  punchLine: {
    type: String,
  },
},{timestamps:true});

const Joke = mongoose.model("Joke", JokeSchema);

// module.exports = Jokes;

export default Joke;