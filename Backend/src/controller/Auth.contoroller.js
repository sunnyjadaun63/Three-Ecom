const {
  encryptPassword,
  deCryptPassword,
} = require("../helper/EncryptPassword");
const GenarateUsername = require("../helper/GenarateUsername");
const jwt = require("jsonwebtoken");
const userModel = require("../models/User.schema");
const { genarateToken } = require("../helper/GenarateToken");

const signUp = async (req, res) => {
  try {
    const { email, password, name, age } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email or password not provided" });
    }
    const isExistEmail = await userModel.findOne({ email });
    if (isExistEmail) {
      return res.status(404).json({ message: "User already exist with email" });
    }

    const genarateUsername = await GenarateUsername(email);
    const HashedPassword = await encryptPassword(password);

    const user = await userModel.create({
      email,
      password: HashedPassword,
      name,
      age,
      userName: genarateUsername,
    });

    return res
      .status(201)
      .json({ message: "Ek or bhadwaa created succesfully" });
  } catch (error) {
    return res.status(500).json({ message: "Bhadwe jaana tu", error });
  }
};
const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Email or passwrord nhi diyaa re" });
    }

    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }
    let HashedPassword = await deCryptPassword(password, user.password);
    if (HashedPassword) {
      const token = await genarateToken(user);
      const newUser = user;

      const { ...usersdata } = newUser;

      delete usersdata._doc.password;

      return res
        .status(200)
        .json({
          message: "User Found successfully",
          user: usersdata._doc,
          token,
        });
    } else {
      return res.status(401).json({
        message:
          "Password match nhi huaa re yaad kr bhdwe kya tha last password",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Kuch Galat Ho giyaaaaaaa" });
  }
};

module.exports = { signUp, logIn };
