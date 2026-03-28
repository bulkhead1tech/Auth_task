import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import validator from "validator"
import bcrypt from "bcrypt"
const UserSchema = new Schema({
    name:{
        type:String,
        required:[true, "Please enter name!"]
    },
    email:{
        type:String,
        unique:true,
        validate:validator.isEmail,
        required:[true, "Please enter email!"]
    },
    password:{
        type:String,
        required:[true, "Please enter password!"],
        minLength: [8, "Password must be 8 characters long"],
        select: false,

    },
    role:{
        type:String,
        enum:["admin", "user"],
        default: "user",

    },

    createdAt:{
        type:Date,
        default: Date.now,
    }

}, {collection: "appusers"})
UserSchema.pre("save", async function(){
    if(!this.isModified("password")){return next()}
    const hashed = await bcrypt.hash(this.password,10)
    this.password = hashed;

}

)

UserSchema.methods.getJWTToken= function(){
    return jwt.sign({_id:this._id}, process.env.JWT_Secret,{
        expiresIn: "15d",
    })
}
UserSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password, this.password)
}
export const User= mongoose.model("User", UserSchema)