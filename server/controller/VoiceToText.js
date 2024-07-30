const voiceToText = require('../models/voiceToText');
const path = require('path');
const {spawn} = require('child_process');

module.exports.addincorrectdata = async (req,res)=>{
    const  incorrectText  = req.body.transcript;
    console.log(incorrectText);
  const pythonFilePath = path.join(__dirname, 'grammar-correction.py');
  const pythonProcess = spawn('python', [pythonFilePath, incorrectText]);
  let correctedText = '';
  pythonProcess.stdout.on('data', (data) => {
    const output = data.toString();
    if (output.includes('CORRECTED_TEXT:')) {
      correctedText = output.replace('CORRECTED_TEXT:', '').trim();
      console.log(correctedText); 
      const incorrectWords = incorrectText.split(" ");
      const correctedWords = correctedText.split(" ");
      let correctCorrections = 0;
      for (let i = 0; i < incorrectWords.length; i++) {
        if (incorrectWords[i] === correctedWords[i]) {
          correctCorrections++;
        }}
      const accuracy = (correctCorrections / incorrectWords.length) * 100;
    console.log(accuracy);
      const entry = new voiceToText({incorrectText:incorrectText,correctedText:correctedText,accuracy:accuracy});
      const success = entry.save()
      if (success){
        return res.send({code:200,message:"successfuly converted incorrect to correct",correctedText:correctedText,incorrectText:incorrectText,accuracy:accuracy})
        }
    else{
        return res.send({code:500,message:'error'})
    }}
});
  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data.toString()}`);
  });
  pythonProcess.on('close', (code) => {
    if (code === 0) {
    } else {
      console.error('An error occurred during grammar correction.');
    }
  });

  

}


// module.exports.getcorrectedsentence = async (req,res) =>{
//   const _data = 
//   console.log(_data);
//   if(_data){
//     return res.send({code:200,message:'success',data:_data});
//   }else{
//     return res.send({code:400,message:'error sending data'});
//   }
// };
// module.exports.getcorrectedsentence = async (req,res)=>{
//   const __data =await voiceToText.findById(req.params.id);
//   console.log(__data)
//   if  (__data){
//       return res.send({code:200,message:'success',data:__data})
//   }else{
//       return res.send({code:400,message:'error'})
//   
