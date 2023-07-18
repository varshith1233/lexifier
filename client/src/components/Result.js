import React from 'react'
import Navbar from './Navbar'
import '../CSS/Result.css'

import { useLocation } from 'react-router-dom';

function Result() {
  

  const location = useLocation();

  const { correctedText, incorrectText, accuracy } = location.state;

  return (
    <div>
        <Navbar/>
        <div className='res-1'>
           Your Answer
           <p>{incorrectText}</p>
           corrected Answer
          <p>{correctedText}</p> 
          Accuracy  
          <p>{accuracy}</p> 
        </div>
        

    </div>
  )
}

export default Result