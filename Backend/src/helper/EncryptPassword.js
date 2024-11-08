const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  try {
    if (!password) {
      return "";
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  } catch (error) {
    console.log("error for encryptpassword: ", error);
  }
};
module.exports = encryptPassword;
