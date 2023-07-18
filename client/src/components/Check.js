import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
function Check() {
    const {id} = useParams();
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <p>{id}</p>
        {console.log("occured before")}
        <button><Link to={`/result/${id}`}>Check Accuracy</Link></button>
        </div>
    </div>
  )
}

export default Check