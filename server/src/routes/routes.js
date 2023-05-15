const express = require("express");
const { userController } = require("../controllers/userController");
const { loginController } = require("../controllers/loginController");
const { upload } = require("../../multer");

const router = express.Router();

router.get("/users", userController.getUsers);

router.post("/user", upload.single("avatar"), userController.addUser);
router.post("/login", loginController.checkUser);

module.exports = router;
