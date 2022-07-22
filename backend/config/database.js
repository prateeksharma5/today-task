// const mongoose=require('mongoose');
// exports.connectDatabase=()=>{
//     mongoose
//     .connect(process.env.MONGO_URI)
//     .then((con)=>console.log(`Database connected:${con.connection.host}`))
//     .catch((err)=>console.log(err))
// }
   
const mongoose=require('mongoose');
exports.connectDatabase=()=>{
    mongoose
    .connect("mongodb://localhost:27017/SocialMedia")
    .then((con)=>console.log(`Database connected:${con.connection.host}`))
    .catch((err)=>console.log(err))
}