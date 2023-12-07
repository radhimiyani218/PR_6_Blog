
const user=require("../models/user.schema")


// signup
const signup = async (req, res) => {
    try {
        let data = await user.findOne({email:req.body.email})
        if (!data) { 
            let data = await user.create(req.body)
            return res.cookie('role',data.role).cookie('id',data.id).send(data.username)
        }
        else{
        return res.cookie('role',data.role).cookie('id',data.id).send(`Account created successfully ${data.username}`)
        }
        
    }
    catch (error) {
        return res.send(error.message)
    }
}
// user signup
const usersignup=(req,res)=>{
    res.render("signup")
}

// login
const login = async (req, res) => {
    try {
        const data = await user.findOne({ email: req.body.email })
        if (!data) {
            return res.send("Invalid Credentials.") 
        }
        if (data.password != req.body.password) {
            return res.send("Invalid Credentials.")
        }
        res.cookie("id", data.id).cookie("role", data.role).cookie("author",data.username).send(`Welcome User ${data.username}`)
    }
    catch (error) {
        return res.send(error.message)
    }
}
// userlogin
const userlogin=(req,res)=>{
    res.render("login")
}

module.exports={signup,usersignup,login,userlogin}