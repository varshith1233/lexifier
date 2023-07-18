import React,{useState} from 'react'
// import Navbar from './Navbar';
import axios from 'axios'
import NavbarAdmin from './NavbarAdmin';

function Addquestions() {
    const [question, setQuestion] = useState('');
    const [questiondesc, setQuestiondesc] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  const handleQuestiondescChange = (e) => {
    setQuestiondesc(e.target.value);
  };
  const handleClick =()=>{
    console.log(question,questiondesc)
    // const formData = new FormData()
    // formData.append('question',question)
    // formData.append('questiondesc',questiondesc)
    // console.log(formData)
    axios.post('http://localhost:8000/addq',{question:question,questiondesc}).then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)})

  }



  

    

  return (<div>
    <NavbarAdmin/>
     <div style={{ width: '90%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '70%',textAlign: 'right',marginTop:'10 px'}}>
      <div>
        <input type="text" value={question} onChange={handleQuestionChange} style={{width: '80%',height: '150px',}} placeholder='Type your question here'/>
        <input type="text" value={questiondesc} onChange={handleQuestiondescChange} style={{width: '80%',height: '150px',}} placeholder='Description about the question'/>
        
      </div>
      <br/>
      <button type="button" class="btn btn-outline-dark" onClick={handleClick}>ADD</button>

      </div>
    </div>


    </div>
  )
}

export default Addquestions