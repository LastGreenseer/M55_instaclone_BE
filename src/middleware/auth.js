const bcrypt = require("bcrypt");
const User = require("../users/model");
const jwt = require("jsonwebtoken")

const SECRET_KEY = process.env.SECRET;

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    console.log("plaintextpassword before hash: ", req.body.password);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log("hashe dpassword ", hashedPassword);

    req.body.password = hashedPassword;

    next();
  } catch (error) {
    console.error("Error in hashPass middleware", error);
    res.status(500).json({ meesage: error.message, error });
  }
};

const comparePass = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(400).json({ message: "invalid password" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization")
    console.log(token)

    if (!token) {
      return res.status(403)({ message: "Unathorized Access!"})
    }

    const decoded = jwt.verify(token, SECRET_KEY)

    if (!decoded.id) {
      return res.status(403).json({ message: "Invalid user data"})
    }

    const user = await User.findOne({ where: { id: decoded.id}})
    if (!user) {
      return res.status(404).json({ message: "User not found"})
    }

    req.authCheck = user;

    next ()
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
}

module.exports = {
  hashPass,
  comparePass,
  verifyToken,
};
