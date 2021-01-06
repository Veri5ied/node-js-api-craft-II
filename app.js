const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { urlencoded, json } = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.ybifs.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log(error);
    console.log("Error connecting to MongoDB Atlas");
  });

app.use(cors());
app.use(morgan());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use((req, res) => {
  res.send({ message: "Hello" });
});

module.exports = app;
