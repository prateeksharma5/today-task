const { json } = require('express');
const User=require('../models/user.js')
exports.register=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        let user=await User.findOne({email});
        if(user){
         return res
         .status(400)
         .json({success:false,message:'user already exists'})
        }
        user=await User.create({
            name,
            email,
            password,
            avatar:{public_id:'sample_id',url:'sample_url'},
    })
    res.status(200).json({success:true,user})
    }catch(error){
        res.status(200).json({
            success:false,
            message:error.message,
        })
    }
}
exports.login=async(req,res)=>{
    try{
        const{email,password}=req.body
        //console.log(email,password)
        const user=await User.findOne({email})
        if(!user){
            return res
            .status(400)
            .json({success:false,message:'user does not exist'})
        }
        const isMatch=await user.matchPassword(password)
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:'Incorrect Password'
            })
        }
        const token=await user.generateToken();
        const options={
            expires:new Date(Date.now()+90*24*60*60*1000),
            httpOnly:true,
        }
        res.status(201).cookie('token',token,options).json({
            success:true,
            user,
            token,
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}








