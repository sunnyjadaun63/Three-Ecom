const encryptPassword = require("../helper/EncryptPassword");
const GenarateUsername = require("../helper/GenarateUsername");
const userModel = require("../models/User.schema");

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
    const HashedPassword=await encryptPassword(password)
   


    const user = await userModel.create({
      email,
     password: HashedPassword,
      name,
      age,
      userName: genarateUsername,
    });

    return res.status(201).json({ message: "Ek or bhadwaa created succesfully" });
  } catch (error) {
    return res.status(500).json({ message: "Bhadwe jaana tu",error });
  }
};
module.exports = { signUp };
