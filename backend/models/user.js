const mongoose=require('mongoose')
const jwt = require('jsonwebtoken')
const UserSchema=new mongoose.Schema({
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
})
module.exports=mongoose.model('User',UserSchema);






