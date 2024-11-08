const userModel = require("../models/User.schema");

const GenarateUsername = async (email) => {
  try {
    if (!email) {
      return ""; 
    }
    const emailstart = email.split("@")[0];


    let isUnique = false;
    let finalUserName = "";
    const checkUsername= await userModel.findOne({ userName: emailstart });
    if(!checkUsername){
          finalUserName= emailstart
          isUnique =true
          return finalUserName
    }
    while (!isUnique) {
      let random = Math.floor(Math.random(1000) * 9999);
      finalUserName = `${emailstart}${random}`;
      const isExist = await userModel.findOne({ userName: finalUserName });
      if (!isExist) {
        isUnique = true;
      }
    }
    return finalUserName;
  } catch (error) {
    console.log("error for genarating username", error);
  }
};

module.exports = GenarateUsername;
