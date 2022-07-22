const express=require('express')
const app=express()
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config({path:'backend/config/config.env'})
    }
    //using middlewares
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
    //app.use(cookieParser());
    //Importing route
    const Admin=require('./routes/admin.js')
    const user=require('./routes/user')
    //const Post=require(‘./routes/Post’)
    //Using routes
    app.use('/api/v2',Admin)
    app.use('/api/v2',user)
    //app.use(‘/api/v2’,Post)
module.exports=app  //export app