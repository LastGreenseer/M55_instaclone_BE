const { Router } = require("express");
const userRouter = Router();

const {
  registerUser,
  login,
  removeAllUsers,
  getAllUsers,
} = require("./controllers");

const { hashPass, comparePass } = require("../middleware/auth");

userRouter.post("/register", hashPass, registerUser);

userRouter.post("/login", comparePass, login);

userRouter.delete("/deleteAll", removeAllUsers);

userRouter.get("/getAllUsers", getAllUsers);

module.exports = userRouter;
