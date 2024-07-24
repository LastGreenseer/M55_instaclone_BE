const bcrypt = require("bcrypt");

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

module.exports = {
  hashPass,
};
