import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/style.css'
import axios from 'axios'
function HomeCard() {

  const [data,setdata] = useState('')
  
  useEffect(()=>{
    axios.get('http://localhost:8000/question').then((res)=>{
      console.log(res.data)
      setdata(res.data.data)
      console.log(data.length)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
          <div className='flex-123'>
            {
              data.length>0?
              data.map((item,index)=>{
                return (
                  <div className='card-card-123' style={{height:"280px",width:"350px",marginLeft:"20px"}}>
                    <div className='question-q' style={{height:"90px",justifyContent:"center",backgroundColor:"#bc8f8f"}}>{item?.question}</div>
                    <div className='questiondesc-q' style={{justifyContent:"left",marginBottom:"20px",marginLeft:"20px"}}>{item?.questiondesc}</div>
                    <button type="button" class="btn btn-light" style={{marginTop:"130px",marginLeft:"54px"}}><Link to={`/Home/${item._id}`} style={{textDecoration:"none"}}>Practice</Link></button>
                  </div>
                )
              }):"no data found"
            }
          </div>
    </div>
  )
}

export default HomeCard