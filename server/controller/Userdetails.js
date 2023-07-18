const usermodel=require('../models/userdetails')
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')

module.exports.registeruserdetails = async(req,res)=>{
    console.log(req.body)
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password
    const userType = req.body.userType

    const userexists = await usermodel.findOne({username:username})
    const userexists1 = await usermodel.findOne({email:email})
    console.log(userexists)
    if (userexists==null && userexists1==null){
    if (!username || !email || !password){
        return res.send({code:400,message:'bad request'})
    }
    const entry= new usermodel({username:username,email:email,password:password,userType:userType})
    const success = await entry.save()
    if (success){
        return res.send({code:200,message:"add success"})
        }
    else{
        return res.send({code:500,message:'error'})
    }}
    else{
        res.send({code:400,message:"user already exists"})
    }
}

module.exports.checklogindetails = async (req,res)=>{
    const {username,password}=req.body
    const userexists = await usermodel.findOne({username:username})
    const userexists1 = await usermodel.findOne({password:password})
    if(userexists!=null || userexists1!=null){
    if (userexists){
        if (userexists.password !== password){
            return res.send({code:400,message:"username or password wrong"})
        }
        console.log(userexists);
            const _token = jwt.sign({...userexists},'PRIV_123')
            if(userexists.userType=="Admin"){
            return res.send({code:200,message:"Admin login success",token:_token,user_type:userexists.type,username:userexists});
            }else{
                return res.send({code:200,message:"User login success",token:_token,user_type:userexists.type,username:userexists});
            }
    }else{
        return res.send({code:500,message:"service error"})
    }}
    else{
        return res.send({code:400,message:"invalid username or password"})
    }
}

module.exports.getlogindetails = async (req,res) =>{
    
}