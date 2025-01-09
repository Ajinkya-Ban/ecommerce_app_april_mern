import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    uname:{
        type:String,
        required:[true, "username is required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        trim:true
    },
    mobile:{
        type:String,
        required:[true,"mobile is required"],
        trim:true,
        unique:true
    },
    address:{
        type:String,
        required:[true,"address is required"],
        trim:true,
        
    },
    role:{
        type:Number,
        default:0
        
    },
},{timestamps:true});

const users = mongoose.model("users",userSchema);
export default  users;