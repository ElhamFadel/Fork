
const {newAdmin}=require('../database/queries')
const app = require('express')();
const {genSalt,hash} = require('bcrypt')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
module.exports.signup_get = (req,res)=>{
    res.render("signup")
}
module.exports.login_get = (req,res)=>{
    res.render("login")
}
module.exports.signup_post = (req,res)=>{
    const {username, password}=req.body;
    //validate
    //hash
    genSalt(10,(err,salt)=>{
        hash(password,salt,(err,hash)=>{
            //to database
            newAdmin(username, hash).then(()=>{
                console.log("Hello ")
            const token = jwt.sign({id}, process.env.SECRET_KEY, {expiresIn: '1h'});
            res.cookie("token",token)
             res.json({status:"ok",message:"user created"})
            }).catch(err=>res.status(400).send(err))
        })
    })
    
}
module.exports.login_post = (req,res)=>{
    res.send("user login")
}