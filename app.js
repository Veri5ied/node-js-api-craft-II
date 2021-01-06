const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.ybifs.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log(error);
    console.log("Error connecting to MongoDB Atlas");
  });

app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
  res.send({ message: "Hello" });
});

module.exports = app;
