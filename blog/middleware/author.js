const middleware = (req,res,next) => {
    const {title,content,category,image} = req.body
    if(title && content && category && image){
        next()
    }
    else{
        res.send("All fields are required.");
    }
}
module.exports = middleware