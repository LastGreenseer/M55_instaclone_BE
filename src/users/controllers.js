const User = require("./model");

//Refactor: check if user already exists before creating new user?
const registerUser = async (req, res) => {
  console.log("req.body", req.body)
  try {
   const user = await User.create(req.body);

    res.status(201).json({ message: "success", user: user });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const removeAllUsers = async (req, res) => {
  console.log("req.body", req.body)
  try {
    await User.destroy({
      where: {},
      truncate: true,
    })

    res.status(200).json({ message: "success"})
  } catch (error) {
    res.staus(500).json
  }
}

module.exports = {
  registerUser,
  removeAllUsers,
};
