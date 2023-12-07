const express=require("express")
const {router}=require("./router/user.router")
const {blog}=require("./router/blog.router")
const connection= require("./config/db")
const cookie=require("cookie-parser")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())

app.set("view engine","ejs")
app.set("views",(__dirname+"/views"))
app.use(express.static(__dirname+"/public"))


app.get('/',(req,res)=>{
    res.send('Welcome to the movie API')
})

app.use(router)
app.use(blog)

app.listen(8090,()=>{
    console.log("listening part 8090");
    connection()
})