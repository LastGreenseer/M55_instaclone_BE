const { Router } = require("express");

const userRouter = Router();

const { registerUser } = require("./controllers");

userRouter.post("/register", registerUser);

module.exports = userRouter;
