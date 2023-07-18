import React from 'react';
import "../CSS/Footer.css"
export default function Footer() {
  return (
      <footer className="footer" style={{marginTop:"3%"}} id="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h4>About</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Help</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Discover</h4>
          <ul>
            <li>Categories</li>
            <li>Featured Courses</li>
            <li>Specializations</li>
            <li>Verified Certificates</li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Connect</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
        <p>contact to</p>
        <p>samuelsachin71@gmail.com or varshith.pyla@gmail.com</p>
      </div>
    </footer>

  );
};