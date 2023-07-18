import React,{useEffect,useState} from 'react'
import VoiceToText from '../components/VoiceToText'
import Navbar from '../components/Navbar'
import '../CSS/Voicetotext.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'



function Home() {
  const [data,setdata]=useState([])
  const {id}=useParams();
  const [uid,setuid] = useState('')
  useEffect(()=>{
    const fetchdata = async ()=>{
      axios.get(`http://localhost:8000/q/${id}`).then((res)=>{
        console.log(res.data)
        setdata(res.data.data)
        setuid(res.data.data._id)
        console.log(uid)
      }).catch((err)=>{
      console.log(err)
      })
    }
    fetchdata();
  },[])
  return (
    <div>
      <Navbar/>
      <div className='cardcccc' >
       <div className='question-112'>
        <div style={{fontFamily:'"Lucida Console", "Courier New", monospace',fontSize:"20px"}}>
        <p>{data.question}</p>
        </div>
        <p><h5>{data.questiondesc}</h5></p>
      </div>
      <div className='ccccc'>
      <VoiceToText id={uid}/> 
      </div>
      </div>
    </div>
  )
}

export default Home