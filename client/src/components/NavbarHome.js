import React from 'react'
import "../CSS/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyImage from "../Images/weblogo.jpeg"
import { Link } from 'react-router-dom';
export default function NavbarHome() {
  return (
    <div>
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={MyImage} alt="Logo" width="30" height="30" className="d-inline-block align-top" style={{width:"100px",height:"80px"}}/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contact</a>
              </li>   
              <li className="nav-item">
                <a className="nav-link" href="#contact"><Link to="/demo">Demo</Link></a>
              </li>   
            </ul>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link but" ><Link to="/signin">Login</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link but" ><Link to="/register">Signup</Link></a>
        </li>
      </ul>
    </div>
    
          </div>
        </div>
      </nav>
    </header>
  </div>
  )
}

