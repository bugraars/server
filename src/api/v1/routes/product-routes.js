const express = require('express');
const Router = express.Router;
// const auth = require('../middlewares/authMiddleware.js');
const {productControllers} = require("../controllers/product-controllers.js");

const router = Router();
    router.get("/", productControllers.getProducts);
    // router.get("/:id", productControllers.getUser);
    router.post("/add", productControllers.addProduct);
    // router.put("/:id", productControllers.editUser);
    // router.put("/:id", productControllers.editUser);
    // router.delete("/:id", productControllers.deleteUser);

module.exports = router;
