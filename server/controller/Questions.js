const questionmodel = require('../models/questions')

module.exports.addnewquestion = async (req,res)=>{
    console.log(req.body,16)
    const question = req.body.question;
    const questiondesc = req.body.questiondesc;

    if (!question || !questiondesc){
        return res.send({code:400,message:'bad request'})
    
    }

    const entry = new questionmodel({question:question,questiondesc:questiondesc})
    const success =await entry.save()
    if (success){
        return res.send({code:200,message:'succesfully added',id:entry._id})
    }else{
        return res.send({code:500,message:'Error, question not added'})
    }
}

module.exports.getallquestions = async (req,res)=>{
    const _data =await questionmodel.find({})
    if (_data){
        return res.send({code:200,message:'success',data:_data})
    }else{
        return res.send({code:400,message:'error'})
    }
}

module.exports.getsinglequestion = async (req,res)=>{
    const __data =await questionmodel.findById(req.params.id)
    
    if  (__data){
        return res.send({code:200,message:'success',data:__data})
    }else{
        return res.send({code:400,message:'error'})
    }
}