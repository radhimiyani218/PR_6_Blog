const user = (req,res,next)=>{
    const {id} = req.cookies
    
    if(id){
        next()
    }
    else{
        res.send('login and signup first')
    }
}
module.exports = user