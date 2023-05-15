const express = require("express");
const { userController } = require("../controllers/userController");

const router = express.Router();

router.get("/users", userController.getUsers);

router.post("/user", userController.addUser);

module.exports = router;
