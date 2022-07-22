// const mongoose=require(‘mongoose’)
// const jwt = require(‘jsonwebtoken’)
// const UserSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:[true,“plz enter a name”]
//     },
//     email:{
//         type:String,
//         required:[true,“plz enter a mail”],
//         unique:[true,“email already exists”]
//     },
//     password:{
//         type:String,
//         required:[true,“plz enter a password”],
//         minlength:[6,“password must be atleast 6 characters”]
//     },
// })
// module.exports=mongoose.model(“User”,UserSchema);

const express=require('express');
const {login,register}=require('../controllers/admin.js')
// const{register}=require('../controllers/Admin')
//const{isAuthenticated}=require(“../middlewares/auth”)
const router=express.Router();
router.route('/login').post(login)
router.route('/register').post(register)
//router.route(“/logout”).get(logout)
//router.route(“/update/password”).put(isAuthenticated,updatePassword)
//router.route(“/update/profile”).put(isAuthenticated,updateProfile)
//router.route(“/follow/:id”).get(isAuthenticated,followUser)
module.exports=router









