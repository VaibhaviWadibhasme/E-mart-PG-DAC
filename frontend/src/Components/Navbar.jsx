
import React, { useState, useEffect } from 'react';
import "./Navbar.css"; 
import shopping from "../Components/Assets/shopping-cart-1985.png";
import logo from "../Components/Assets/Main logo.png"
import cart from '../Pages/cart';
import Home from '../Pages/Home';
import Signin from '../Pages/Signin';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const handleLogout = () => {
  alert("You have got Sign Out")
  localStorage.clear();
}
const Navbar = () => {
  
  const navigate = useNavigate();
  const [Menu,setMenu]= useState("Home");
  const [cartItems,setCartItems]= useState([]);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
       <img src={logo}></img>
        <p>{t('E-Mart')}</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none', color: 'black'}} to='/'>{t('Home')}</Link>{Menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Contact")}}><Link style={{textDecoration:'none', color: 'black'}} to='/Contact'>{t('Contact')}</Link>{Menu==="Contact"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("About")}}><Link style={{textDecoration:'none', color: 'black'}} to='/About'>{t('About')}</Link>{Menu==="About"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Sign In")}}>
         
          {localStorage.getItem('islogin') ?
              <div onClick={() => { 
                handleLogout();
                navigate('/') }}>               
                {t('Sign Out')}
              </div>
              :
              <Link style={{textDecoration:'none',color: 'black' }} to='/signin'>{t('Sign In')}</Link>          
              }{Menu==="Sign In"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("English")}}> <select onChange={(e) => changeLanguage(e.target.value)} className='selec'>
          <option value="en">English</option>
          <option value="hn">{t('Hindi')}</option>          
        </select>{Menu==="English"?<hr/>:<></>}</li>
      </ul>
      
      <div className='nav-search'>        
        <input type='text' name="search"  placeholder='Search'/>
       
        <Link to='/cart' style={{textDecoration:'none'}}><img src={shopping} alt=''></img></Link>
        <div className='nav-cart-count'>{cartItems.length}</div>
      
      </div>
    </div>
  )
}

export default Navbar
