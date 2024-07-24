const { Router } = require("express");
const userRouter = Router();

const { registerUser, login, removeAllUsers } = require("./controllers");

const { hashPass, comparePass } = require("../middleware/auth");

userRouter.post("/register", hashPass, registerUser);

userRouter.post("/login", comparePass, login);

userRouter.delete("/deleteAll", removeAllUsers);

module.exports = userRouter;
