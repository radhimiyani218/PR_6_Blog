const {Router}=require("express")
const {signup,usersignup,login,userlogin}=require("../controlers/user.controlers")
const router=Router()

// user
router.get("/user/signup",usersignup)
router.post("/user/signup",signup)
router.get("/user/login",userlogin)
router.post("/user/login",login)

module.exports={router}
