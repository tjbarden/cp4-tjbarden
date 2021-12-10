const express = require("express");
const bodyParser = require("body-parser");

const multer = require("multer");

const upload = multer({
  dest: "../front-end/public/images/",
  limits: {
    fileSize: 10000000,
  },
});

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/museum", {
  useNewUrlParser: true,
});

const itemSchema = new mongoose.Schema({
  description: String,
  price: String,
  title: String,
  path: String,
});

// Create a model for items in the museum.
const Item = mongoose.model("Item", itemSchema);

app.listen(3000, () => console.log("Server listening on port 3000!"));

app.post("/api/photos", upload.single("photo"), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename,
  });
});

app.post("/api/items", async (req, res) => {
  const item = new Item({
    description: req.body.description,
    price: req.body.price,
    title: req.body.title,
    path: req.body.path,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get("/api/items", async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/items/:id", async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/items/:id", async (req, res) => {
  try {
    await Item.updateOne(
      { _id: req.params.id },
      { description: req.body.description, title: req.body.title, price: req.body.price }
    );

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
