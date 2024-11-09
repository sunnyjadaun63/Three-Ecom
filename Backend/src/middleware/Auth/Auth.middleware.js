const { verifyToken } = require("../../helper/GenarateToken");
const userModel = require("../../models/User.schema");

const authentication = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Unauthorized login token not provided" });
    }
    let token;
    if (authHeader.startsWith(`bearer `)) {
      token = authHeader.split(" ")[1];
    } else {
      token = authHeader;
    }
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized login token not provided" });
    }


    const decode= verifyToken(token)

    if(decode && decode.id){
        const user= await userModel.findOne({_id:decode.id}).select({password:0})
        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        req.user=user
        return next()
    }
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ message: "something went wrong", error });
  }
};

module.exports={authentication}