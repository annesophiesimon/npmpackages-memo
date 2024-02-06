const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const npmpackagesRoutes = require("./routes/npmpackages");
const userRoutes = require("./routes/user");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Sucessfully connect to mongoDB");
  })
  .catch((error) => {
    console.log("enable to connect to mongoDB");
    console.error(error);
  });

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/npmpackages", npmpackagesRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
