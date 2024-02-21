const express = require('express');
const Router = express.Router;
// const auth = require('../middlewares/authMiddleware.js');
const {userControllers} = require("../controllers/user-controllers.js");

const router = Router();
    router.get("/", userControllers.getUsers);
    router.get("/:id", userControllers.getUser);
    router.post("/add", userControllers.addUser);
    router.put("/:id", userControllers.editUser);
    router.delete("/:id", userControllers.deleteUser);

module.exports = router;
