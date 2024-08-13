// src/components/Sidebar.js
import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sidebar.css"
import { Link } from 'react-router-dom'; 


const Sidebar = (title) => {
  
  return (
    <div className="sidebar">
            
        
        <h3 className="text-center">Categories</h3>
        <br></br>
        <ul className='ul'>
          <li><Link to='/Television' className='link'>Television</Link></li>
          <li><Link to='/Computer' className='link'>Computer</Link></li>
          <li><Link to='/s'className='link'>Laptops</Link></li>
          <li><Link to='/Mobile'className='link'>Mobile</Link></li>
          <li><Link to='/HomeApliances' className='link'>HomeApliances</Link></li>
          <li><Link to='/Gaming' className='link'>Gaming</Link></li>
          <li><Link to='/Cameras' className='link'>Cameras</Link></li>
        </ul>
     
    </div>
  );
};

export default Sidebar;
