import React,{useState,useEffect} from 'react'
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../CSS/VTT.css'
import Webcam from 'react-webcam'
import {useRef} from 'react'
import { useNavigate } from 'react-router-dom';


function VoiceToText({id}) {
  const [incorrectText, setIncorrectText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [accuracy, setaccuracy] = useState('');
  const navigate = useNavigate();

  
  const webRef = useRef(null);
  const showImage =()=>{
    console.log(webRef.current)
  }
    const [message, setMessage] = useState('');
 const commands = [
   {
     command: 'reset',
     callback: () => resetTranscript()
   },
   {
     command: 'shut up',
     callback: () => setMessage('I wasn\'t talking.')
   },
   {
     command: 'Hello',
     callback: () => setMessage('Hi there!')
   },
 ]
 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition({ commands });

 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);
 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   return null;
 }

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
 }
 const listenContinuously = () => {
   SpeechRecognition.startListening({
     continuous: true,
     language: 'en-GB',
   });
 };

 const incorrectData = () =>{
  axios.post("http://localhost:8000/voiceToText",{transcript:finalTranscript}).then((res)=>{
    console.log(res.data)
    console.log(res.data.incorrectText)
    console.log(res.data.correctedText)
    console.log(res.data.accuracy)
    
    const { correctedText, incorrectText, accuracy } = res.data;
    setCorrectedText(correctedText);
    setIncorrectText(incorrectText);
    setaccuracy(accuracy);
    console.log(incorrectText,correctedText,accuracy)
    navigate('/result', { state: { correctedText, incorrectText, accuracy } })

 }).catch((err)=>{console.log(err)})



 }
  return (
    <div>
     <div>
       <span>
        <div className='col-22' style={{marginLeft:'2%'}}>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
        </div>
       </span>
       <div>
        
       </div>
       <div className='container-112'style={{display:"flex",flexDirection:"column"}}>
       <div className='row-1-col-1'style={{marginLeft:"2%",width:"700px"}}>
       <span>{transcript}</span>
       </div>
       <div className='row-2' style={{display:"flex",flexDirection:"row",marginRight:"70%",marginTop:"2%"}}>
        <div className='con-11'style={{paddingLeft:"30px"}}>
        <button type="button" class="btn btn-outline-dark btn-lg" onClick={resetTranscript}>Reset</button>
        </div>
        <div className='con-11'style={{paddingLeft:"30px"}}>
        <button type="button" class="btn btn-outline-dark btn-lg" onClick={listenContinuously}>Listen</button>
        </div>
        <div className='con-11'style={{paddingLeft:"30px"}}>
        <button type="button" class="btn btn-outline-dark btn-lg" onClick={SpeechRecognition.stopListening}>Stop</button>
        </div>
        <div className='con-11 'style={{paddingLeft:"30px"}}>
        <button type="button" class="btn btn-outline-dark btn-lg " onClick={incorrectData}>Check</button>
        </div>
       </div>
       <div className='row-1-col-2'style={{marginLeft:"52%",marginTop:"-36%"}}>
          <Webcam ref={webRef}/>
          <button onClick={()=>{
            showImage();
          }}></button>
        </div>
     </div>
     <div>
       {message}
     </div>
       </div>
   </div>
 );
};
  

export default VoiceToText