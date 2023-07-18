import React from 'react'
import "../CSS/ImageGallery.css"
import MyImage from"../Images/access.jpg";
export default function ImageGallery() {
  return (
    <div className="image-gallery" style={{marginTop:"2%"}}>
      <div className="image-container">
        <img src="https://www.hirevue.com/_next/image?url=https%3A%2F%2Fwebapi.hirevue.com%2Fwp-content%2Fuploads%2F2022%2F06%2FScheduling-Icon-2x.png&w=640&q=75" alt="Image 1" className="image" style={{width:"250px"}} />
        <p className="image-name">Time management</p>
      </div>
      <div className="image-container">
        <img src="https://www.hirevue.com/_next/image?url=https%3A%2F%2Fwebapi.hirevue.com%2Fwp-content%2Fuploads%2F2022%2F06%2FFair-Hiring-Icon-2x.png&w=640&q=75" alt="Image 2" className="image" style={{width:"250px"}} />
        <p className="image-name">User Friendly</p>
      </div>
      <div className="image-container" style={{marginTop:"0%"}} >
        <img src={MyImage} alt="Image 3" className="image" style={{width:"300px",height:"260px"}}/>
        <p className="image-name">Accessibility</p>
      </div>
    </div>

  )
}
