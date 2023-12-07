const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      }
})
const user=mongoose.model("user",userschema)
module.exports=user;