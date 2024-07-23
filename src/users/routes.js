const { Router } = require("express");
const userRouter = Router();

const { registerUser } = require("./controllers");

const { hashPass } = require("../middleware/auth");

userRouter.post("/register", hashPass, registerUser);

module.exports = userRouter;
