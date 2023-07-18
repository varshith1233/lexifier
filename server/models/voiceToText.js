const mongoose = require('../config/connection')

const VoiceToTextschema = mongoose.Schema({
    incorrectText:{
        type:String,
        required:true,
        
    },
    correctedText:{
        type:String,
        required:true
        
    }
})

module.exports = mongoose.model('voiceToText',VoiceToTextschema)