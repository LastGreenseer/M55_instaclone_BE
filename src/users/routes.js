const { Router } = require("express");
const userRouter = Router();

const { registerUser } = require("./controllers");
const { removeAllUsers } = require("./controllers")

const { hashPass } = require("../middleware/auth");

userRouter.post("/register", hashPass, registerUser);

userRouter.delete("/deleteAll", removeAllUsers )

module.exports = userRouter;
