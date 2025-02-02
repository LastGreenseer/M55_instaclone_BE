const User = require("./model");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET;

//Refactor: check if user already exists before creating new user?
const registerUser = async (req, res) => {
  console.log("req.body", req.body);
  try {
    const user = await User.create(req.body);

    res.status(201).json({ message: "success", user: user });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "3h" });

    const userInfo = {
      id: user.id,
      username: user.username,
      token: token,
    };

    res.status(200).json({ message: "success", user: userInfo });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const removeAllUsers = async (req, res) => {
  console.log("req.body", req.body);
  try {
    await User.destroy({
      where: {},
      truncate: true,
    });

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json;
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll();

    res.status(200).json({ message: "success", user: user });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = {
  registerUser,
  login,
  removeAllUsers,
  getAllUsers,
};
