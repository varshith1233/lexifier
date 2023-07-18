import React from 'react';
import "../CSS/part.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Part() {
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="heading">Flexible.Fair.<br/>Finally,Technology works how you want it to</h1>
        <div className="info">
          <p style={{textAlign:"justify"}}>Lexifier allows candidates to rehearse their responses to common interview questions. By practicing their responses and reviewing their performance, candidates can identify areas that require improvement and work to refine their answers.</p>
          {/* Add more content as needed */}
        </div>
      </div>
      <div className="right-section">
        <img src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2017/03/DeathtoStock_Meticulous-09-840x560.jpg?v=19889" alt="Image" className="image" />
      </div>
    </div>
  )
}
