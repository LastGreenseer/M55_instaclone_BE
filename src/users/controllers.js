const User = require("./model");

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
    const user =await User.findOne({where: {username}})

    if (!user) {
      return res.status(404).json({ message: "user not found"})
    }

    const userInfo = {
      id: user.id,
      username: user.username,
    }

    res.status(200).json({ message: "success", user: userInfo })
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
}

 
const removeAllUsers = async (req, res) => {
  console.log("req.body", req.body);
  try {
    await User.destroy({
      where: {},
      truncate: true,
    });

    res.status(200).json({ message: "success" });
  } catch (error) {
    res.staus(500).json;
  }
};

module.exports = {
  registerUser,
  login,
  removeAllUsers,
};
