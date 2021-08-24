
const app = require('express')();
const cookieParser = require('cookie-parser')
const {validateAsync} = require('joi');
const {newAdmin}=require('../database/queries')
const {hashPassword}=require('../utils')

app.use(cookieParser())

module.exports.signup_get = (req,res)=>{
    res.render("signup")
}
module.exports.login_get = (req,res)=>{
    res.render("login")
}








module.exports.signup_post = (req,res)=>{
   const {error,value} = validateAsync(req.body)
    .then(value=>res.json(value))
    .catch((error)=>res.json(error))
    //validate
    //hash
    hashPassword(password,(hash)=>{
        newAdmin(username,hash,(err,data)=>{
            if(err)
                res.send(err)
            else
                res.send(data)
        })
    })
  //to database
            newAdmin(username, hash).then(()=>{
                console.log("Hello ")
            const token = jwt.sign({id}, process.env.SECRET_KEY, {expiresIn: '1h'});
            res.cookie("token",token)
             res.json({status:"ok",message:"user created"})
            }).catch(err=>res.status(400).send(err))
    
}






module.exports.login_post = (req,res)=>{
    res.send("user login")
}