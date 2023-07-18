import React from 'react'
import NavbarHome from '../components/NavbarHome'
import ImageGallery from '../components/ImageGallery'
import Part from '../components/Part'
import Card from '../components/Card'
function MainHome() {
  return (
    <div>
        <NavbarHome/>
       <Part></Part>
    <ImageGallery></ImageGallery>
    <Card></Card>
    </div>
  )
}

export default MainHome