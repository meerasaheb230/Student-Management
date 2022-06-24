const bcrypt = require("bcrypt");
const UserModel=require("../models/user.model");
// const {
//     isValid,
//     isValidString,
//     isValidObject,
//     isValidEmail,
//     SALT,
//   } = require("../utils/validators");

  const getAllUsers=async (req,res)=>{
    const response = {
        success: true,
        code: 200,
        message: "Users list",
        error: null,
        data: null,
        resource: URL,
      };
      try {
        const users = await UserModel.find({});
        response.data = { users };
        return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json({
            success:false,
            code:500,
            data:null,
            message:"cannot fetch data,internal servor error",
            error:"internal servar error..",
            resource:URL
        });
      }
      
  }



module.exports={
    getAllUsers,
}
