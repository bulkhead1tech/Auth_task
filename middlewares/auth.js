import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.utils.js";
import { User } from "../models/User.model.js";
export const isAuthenticated = asyncHandler(async(req, res, next) => {
    const {token} = req.cookies;
    if(!token){ return next(()=>{console.log("Please login");
    })}
    const decoded= jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded._id);
   next();

})
export const isAdmin = asyncHandler(async(req, res, next) => {
    const {token} = req.cookies;
    if(!token){ return next(()=>{console.log("Please login");
    })}
    const decoded= jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded._id);
    if(req.user.role !== "admin"){
        return next(()=>{console.log("Access denied, admin only")});
    }
   next();

})