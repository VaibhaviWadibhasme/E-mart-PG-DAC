import React from 'react'
import Navbar from '../Components/Navbar'
import CarouselComponent from '../Components/Carousel/CarouselComponent.jsx';
import Sidebar from '../Components/Sidebar/toggleSidebar.jsx';
import './Home.css';
import ProductCard from '../Components/Product/ProductCard.jsx';
import ItmCard from '../Components/ItmCard/ItmCard.jsx'


function Home() {
  return (
    <div>
      <div className='home'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className="vertical-line"></div>
        <div className='carousel'>
          <CarouselComponent />
        </div>
        


      </div>
      
      {/*<div className='productCard'><ProductCard/></div>*/}
    </div>
  )
}

export default Home
