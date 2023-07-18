const mongoose=require('../config/connection');

const questionsdata=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    questiondesc:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('question',questionsdata)