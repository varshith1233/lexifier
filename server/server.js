const express=require('express')
const app=express()
const port=process.env.PORT || 8000;
const users=require('./controller/Userdetails')
const questions = require('./controller/Questions')
const voice = require('./controller/VoiceToText')
const bodyparser= require('body-parser');
const cors=require('cors')




app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(cors())



app.post('/register',users.registeruserdetails)

app.post('/login',users.checklogindetails)

app.get('/login',users.getlogindetails)

app.post('/voiceToText',)

app.post('/addq',questions.addnewquestion)

app.get('/question',questions.getallquestions)

app.get('/q/:id',questions.getsinglequestion)

app.post('/voiceToText',voice.addincorrectdata)

// app.get('/result',voice.getcorrectedsentence)

app.listen(port,(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log(`Server connect at ${port}`)
    }
})