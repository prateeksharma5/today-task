const mongoose=require('mongoose')
//const bcrypt=require(‘bcrypt’)
//const jwt = require(‘jsonwebtoken’)
const AdminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'plz enter a name']
    },
    email:{
        type:String,
        required:[true,'plz enter a mail'],
        unique:[true,'email already exists']
    },
    password:{
        type:String,
        required:[true,'plz enter a password'],
        minlength:[6,'password must be atleast 6 characters']
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
    }],
})
module.exports=mongoose.model('Admin',AdminSchema);









