const {Router}=require("express")
const {home, addblog, content, add, singleblog,deleted, edit,search,comment, like}=require("../controlers/blog.controlers")
const fuse=require("fuse.js")
const role=require("../middleware/role")
const author=require("../middleware/author")
const user=require("../middleware/user")
const blog=Router()
    

blog.get("/blog/",home)
blog.get("/blog/create",role,addblog)
blog.get('/blog/blogs',content)
blog.post("/blog/create",author,add)
blog.get('/blog/singleblog/:id',singleblog)
blog.delete('/blog/delete/:id',deleted)
blog.patch("/blog/edit/:id",role,edit)
blog.patch("/blog/like/:id",user,like)
blog.patch("/blog/comment/:id",comment)
blog.get("/blog/search",search)

module.exports={blog}