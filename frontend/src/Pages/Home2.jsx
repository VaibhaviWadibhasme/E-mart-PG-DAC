import React, { useEffect } from 'react'

import { useState } from 'react';
import ItmCard1 from '../Components/ItmCard/ItmCard1.jsx';
import { Outlet, useNavigate } from 'react-router-dom';
import CarouselComponent from '../Components/Carousel/CarouselComponent.jsx';
import ProductCard from '../Components/Product/ProductCard.jsx';



function Home() {
  let navigate = useNavigate();
  const [maincategories, setMaincategories] = useState([]);
  const [bestSelling, setbestSelling] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/Category/getCatNameByParentId/0')
      .then(response => response.json())
      .then(data => {
        setMaincategories(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(maincategories)

  useEffect(() => {
    fetch('http://localhost:8080/api/Category/getCatNameByParentId/999')
      .then(response => response.json())
      .then(data => {
        setbestSelling(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleClick = (id, flag) => {
      if (flag) {
      navigate(`/s/${id}`);
    } else navigate(`/p/${id}`);
    
  }
  const besthandleClick=(id)=>{
    navigate(`/p/${id}`);
  }
  return (
    
    <div>
    <div className='home'>    
       <div className='carousel'>
         <CarouselComponent />
       </div>

    </div>
  
   <h3 style={{margin:'30px',marginLeft: '50px', align : 'center' , color:'red' }}>Browse By Category</h3>
    <div >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          margin: '0 auto',
          maxWidth: '1300px', 
        }}
      >
        {maincategories?.map((i) => (
          <div className='category'
            key={i.catmasterID}
            onClick={() => handleClick(i.catmasterID, i.childflag)}
            style={{ cursor: 'pointer' }} 
          >
            <ItmCard1 title={i.categoryName} />
          </div>
          
        ))}
      </div>      
    </div>
     <Outlet/>
     <h3 style={{margin:'30px',marginLeft: '50px', align : 'center' , color:'red' }}>Best Selling Product</h3>
     <div >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          margin: '0 auto',
          maxWidth: '1300px', 
        }}
      >
        {bestSelling?.map((i) => (
          <div className='category'
            key={i.catmasterID}
            onClick={() => besthandleClick(i.prodID)}
            style={{ cursor: 'pointer' }} 
          >
            <ItmCard1 title={i.categoryName}/>
          </div>
          
        ))}
      </div>      
    </div>
    </div>
  );
};


    

export default Home


