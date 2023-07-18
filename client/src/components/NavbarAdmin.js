import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
import MyImage from "../Images/weblogo.jpeg"

function NavbarAdmin() {
  return (
    <div >
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={MyImage} alt="Logo" width="30" height="30" className="d-inline-block align-top" style={{borderRadius:"20%",width:"100px",height:"80px"}}/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/QuestionsAdmin">Questions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Addquestions">Add questions</a>
              </li>   
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contact</a>
              </li>   
              <li className="nav-item">
                <a className="nav-link" href="/signin"><Link to="/signin">Logout</Link></a>
              </li>   
            </ul>
            <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    </div>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default NavbarAdmin