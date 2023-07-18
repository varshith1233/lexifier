import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
import MyImage from '../Images/weblogo.jpeg'
function Navbar() {
  return (
    <div >
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={MyImage} alt="Logo" width="30" height="30" className="d-inline-block align-top" style={{borderRadius:"50%",width:"80px",height:"80px",marginLeft:'-100px'}}/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/Questions">Questions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/practice">Practice</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contact</a>
              </li>    
              <li className="nav-item">
                <a className="nav-link" href="/signin"><Link to="/signin">Logout</Link></a>
              </li> 
            </ul>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      
    </div>
    
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Navbar