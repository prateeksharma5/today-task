const express=require('express');
const {login,register}=require('../controllers/user.js')
//const{register}=require('../controllers/User')
//const{isAuthenticated}=require(“../middlewares/auth”)
const router=express.Router();
router.route('/login').post(login)
router.route('/register').post(register)
//router.route(“/logout”).get(logout)
//router.route(“/update/password”).put(isAuthenticated,updatePassword)
//router.route(“/update/profile”).put(isAuthenticated,updateProfile)
//router.route(“/follow/:id”).get(isAuthenticated,followUser)
module.exports=router