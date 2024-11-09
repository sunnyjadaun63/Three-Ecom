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

const deCryptPassword=async(password,HashedPassword)=>{

    try {
        if(!password){
            return ""
        }
       
  
        const hash = await bcrypt.compare(password, HashedPassword);

return hash
        
    } catch (error) {
        console.log('error: ', error);

        
    }
}
module.exports = {encryptPassword,deCryptPassword};
