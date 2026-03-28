import { asyncHandler } from "../utils/asyncHandler.utils.js";
import {User} from "../models/User.model.js"
import { sendToken } from "../utils/sendToken.js";


export const registerUser = asyncHandler(async (req, res, next) => {
       const {name, email, password, role} = req.body;
       if(!email||!password||!name) return next(new Error("Field missing."));

       
       let user = await User.findOne({email});
       if(user){()=>{console.log("user already exists");
       }}
     
       user = await User.create({
          name, email, password, role
       })
       sendToken(res, "User registered successfully",user, 201)
})





export const loginUser = asyncHandler(async (req, res, next) => {
     const {email, password} = req.body;

     if(!email||!password) return next(()=>{console.log("field missing.")})
     
     let user = await User.findOne({email}).select("+password");
     if(!user){()=>{console.log("User does not exist");
     }}
    const isMatch= await user.comparePassword(password);
    if(!isMatch){
     return next(()=>{console.log("failed to log in")
     })
    }
     sendToken(res, "User logged in successfully",user, 200)
})

export const logoutUser = asyncHandler(async (req, res, next) => {
      res.status(200).cookie("token", null, {
          expires: new Date(Date.now()),
      }).json({
          message: "Logged out Successfully",
          success: true,
     
     })
})
export const fetchUser = asyncHandler(async (req, res, next) => {
     const user = await User.findById(req.user._id);
     
     await res.status(200).json({
          message: "users",})
})
export const fetchUsers = asyncHandler(async (req, res, next) => {
     await res.status(200).json({
          message: "users",})
})
