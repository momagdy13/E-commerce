const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());
// Mongoose Connection
mongoose
  .connect(
    "mongodb+srv://hamomagdy12266:5bX7nHJvmI9UbCrQ@cluster0.vv3vhnz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection Success!");
  })
  .catch((error) => {
    console.log("Error", error);
  });

app.get("/", (req, res) => {
  res.send("Express app is running");
});

// image storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload EndPoint Of images

app.post("/upload", upload.single("product"), (req, res) => {});

app.listen(port, () => {
  console.log("I'm Listen to 4000");
});
