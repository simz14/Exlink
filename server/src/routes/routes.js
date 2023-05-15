const express = require("express");
const { userController } = require("../controllers/userController");
const { loginController } = require("../controllers/loginController");

const router = express.Router();

router.get("/users", userController.getUsers);

router.post("/user", userController.addUser);
router.post("/login", loginController.checkUser);

module.exports = router;
