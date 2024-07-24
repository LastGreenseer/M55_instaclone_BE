const { Router } = require("express");
const userRouter = Router();

const { registerUser, login, removeAllUsers } = require("./controllers");

const { hashPass } = require("../middleware/auth");

userRouter.post("/register", hashPass, registerUser);

userRouter.post("/login", login);

userRouter.delete("/deleteAll", removeAllUsers);

module.exports = userRouter;
