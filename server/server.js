// const express = require("express");
import express from "express"
const app = express();

// require("./config/mongoose.config");
import connectDb from "./config/mongoose.config.js"
connectDb()
app.use(express.json(), express.urlencoded({ extended: true }));

// const AllMyJokesRoutes = require("./routes/jokes.routes");
import AllMyJokesRoutes from "./routes/jokes.routes.js"
AllMyJokesRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
