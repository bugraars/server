const baseDir = require("./src/api/v1/utils/paths.js");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const connectDB = require(path.resolve(baseDir, "configs/connect-db.js"));
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

// app.use(cookieParser());
// app.use(bodyParser.json());

//routes import
const userRoutes = require(path.resolve(baseDir, "routes/user-routes.js"));
const productRoutes = require(path.resolve(
  baseDir,
  "routes/product-routes.js"
));
//routes using
app.use("/users", userRoutes);
app.use("/products", productRoutes);

connectDB()
  .then(() => {
    app.listen(PORT);
    console.log("Node.js running on http://localhost:3000");
  })
  .catch((err) => {
    console.log(err);
  });
