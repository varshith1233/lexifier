import React from 'react'
import MyImage from '../Images/carousel.jpg'
import MyImage1 from '../Images/carousel1.jpg'
import MyImage2 from '../Images/carousel3.jpg'
function Carousel() {
  return (
    <div>
        {/* <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner" style={{height:'700px',marginBottom:'30px'}}>
                <div class="carousel-item active">
                <img src="https://images.pexels.com/photos/684363/pexels-photo-684363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div> */}
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade ">
    <div className="carousel-indicators" >
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner" style={{height:'31rem',marginBottom:'30px'}}>
      <div className="carousel-item active">
        <img src={MyImage} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block" style={{height:'15rem'}}>
          <h5>Welcome to Lexifier</h5>
          
          <button type="button" className="btn btn-danger mx-1">Check</button>
          <button type="button" className="btn btn-primary mx-1">Correct</button>
          <button type="button" className="btn btn-success mx-1">Improve</button>
        </div>
      </div>
      <div className="carousel-item" style={{height:'31rem',marginBottom:'30px'}}>
        <img src={MyImage1} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block" style={{height:'8rem'}}>
          <h5>Improve your communication skills</h5>
          <button type="button" className="btn btn-danger mx-1">Check</button>
          <button type="button" className="btn btn-primary mx-1">Correct</button>
          <button type="button" className="btn btn-success mx-1">Improve</button>
        </div>
      </div>
      <div className="carousel-item" style={{height:'31rem',marginBottom:'30px'}}>
        <img src={MyImage1} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block"  style={{height:'8rem'}}>
          <h5>Excel in your interviews</h5>
          <button type="button" className="btn btn-danger mx-1">Check</button>
          <button type="button" className="btn btn-primary mx-1">Correct</button>
          <button type="button" className="btn btn-success mx-1">Improve</button>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}

export default Carousel