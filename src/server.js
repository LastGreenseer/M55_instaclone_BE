require("dotenv").config();
const express = require("express");
const cors = require("cors")

const userRouter = require("./users/routes");
const User = require("./users/model");

const port = process.env.PORT || 5001;

const app = express();

const syncTables = () => {
  User.sync();
};

app.use(cors())
app.use(express.json());

app.use("/user", userRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`Server is listening on port ${port}`);
});
