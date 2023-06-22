const loginController = require("../controllers/login");
const registerController = require("../controllers/register");
const userController = require("../controllers/user");
const authMiddelware = require("../middleware/auth");
const express = require("express");

const router = express.Router();

router.get("/users", authMiddelware, userController);

router.post("/login", loginController);

router.post("/register", registerController);

module.exports = router;
