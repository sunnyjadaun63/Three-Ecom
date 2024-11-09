const jwt = require("jsonwebtoken");
require("dotenv").config();
const genarateToken = async (user) => {
  try {
    return jwt.sign(
      { id: user._id, userName: user.userName }, //payload
      process.env.SECRET_KEY, //secret key
      { expiresIn: "1h" } //time in expire
    );
  } catch (error) {
    console.log("genarate token error: ", error);
  }
};
const verifyToken = (token) => {
  try {
    return jwt.verify(
      token,
      process.env.SECRET_KEY //secret key
    );
  } catch (error) {
    console.log("genarate token error: ", error);
  }
};
module.exports = { genarateToken, verifyToken };
