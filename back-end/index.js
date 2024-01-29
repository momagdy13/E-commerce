const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const Product = require("./models/Products.js");
const Users = require("./models/Users.js");
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
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload EndPoint For images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    sucsses1: 1,
    img_url: `http://localhost:4000/images/${req.file.filename}`,
  });
});

// Upload EndPoint\\

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let Id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    Id = last_product.id + 1;
  } else {
    Id = 1;
  }
  const product = new Product();
  product.id = Id;
  product.name = req.body.name;
  product.image = req.body.image;
  product.category = req.body.category;
  product.old_price = req.body.old_price;
  product.new_price = req.body.new_price;
  await product.save();

  res.json(product);
});
app.delete("/deleteproduct", async (req, res) => {
  await Product.findOneAndDelete(req.body.id, req.body.name);
  res.json({
    success: true,
    name: req.body.name,
  });
});
app.get("/allproduct", async (req, res) => {
  let product = await Product.find({});
  res.json(product);
});

// Creating EndPoint For Registering the user //

app.post("/sign", async (req, res) => {
  await Users.find({ email: req.body.email })
    .exec()
    .then(async (user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          success: false,
          message: "Mail exists",
        });
      } else {
        let cart = {};
        for (let i = 0; i < 300; i++) {
          cart[i] = 0;
        }
        const user = new Users();
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;
        user.cartData = cart;

        await user.save();
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "seceret_ecom");
        res.json({ success: true, token });
      }
    });
});

// Creating EndPoint For Registering the user //

// Creating EndPoint For User Login//
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    if (req.body.password == user.password) {
      const data = {
        user: user.id,
      };
      const token = jwt.sign(data, "seceret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Id" });
  }
});
// Creating EndPoint For User Login//

// Creating EndPoint For New Collection//
app.get("/newcollection", async (req, res) => {
  let product = await Product.find({});
  let newCollection = product.slice(1).slice(-4);
  console.log("newCollection");
  res.send(newCollection);
});
// Creating EndPoint For New Collection//

// Creating EndPoint For Popular in Women//
app.get("/popularinwomen", async (req, res) => {
  let product = await Product.find({ category: "women" });
  let popular_in_women = product.slice(0, 4).slice(-4);
  res.send(popular_in_women);
});
// Creating EndPoint For Popular in Women//

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send({ errors: "please authenticate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "seceret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "please authenticate using valid token" });
      console.log(error);
    }
  }
};

// Creating EndPoint For Add to cart//
app.post("/addtocart", fetchUser, async (req, res) => {
  let userData = await Users.find({ _id: req.user });
  userData.cartData[req.body.itemId] += 1;

  await Users.findOneAndUpdate(
    { _id: req.user },
    { cartData: userData.cartData }
  );
  res.send("Added");
});
// Creating EndPoint For Add to cart//

app.post('/removefromcart', fetchUser, async(req, res)=>{
  console.log('removed')
   let userData = await Users.find({ _id: req.user });
   console.log(userData);
   userData.cartData[req.body.itemId] -= 1;

   await Users.findOneAndUpdate(
     { _id: req.user },
     { cartData: userData.cartData }
   );
   res.send("Removed");
})

app.post('/getart', fetchUser, async(req, res)=>{
  console.log('GetCart')
  let userData = await Users.find({_id:req.user})
  res.json(userData.cartData)
})

app.listen(port, () => {
  console.log("I'm Listen to 4000");
});
