const role = (req,res,next)=>{
    const {role} = req.cookies
    console.log(role);
    if(role == 'admin'){
        next()
    }
    else{
        res.send('You are not authorized to access this page.')
    }
}

module.exports = role