import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Product.css';
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const ProductCard = ({
  id,
  imgpath,
  prodName,
  prodDisc,
  prodPoints,
  prodLongDesc,
  prodShortDesc,
  offerPrice,
  mrpPrice
}) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({
    prodID: "",
    custID: "",
    qty: ""
  });

  const [showLongDesc, setShowLongDesc] = useState(false);
  
  const handleClick = (id) => {
    navigate(`/productd/${id}`);
  };
  

  const handleAddToCart = (id) => {
    if (localStorage.getItem("islogin") === "true") {
      setCart({
        prodID: id,
        custID: localStorage.getItem("custId"),
        qty: 1
      });
      return;
    }
    navigate('/signin');
  };

  const handleBuyNow = (id) => {
    if (localStorage.getItem("islogin") === "true") {
      setCart({        
        prodID: id,
        custID: localStorage.getItem("custId"),
        qty: 1
      });
      setTimeout(() => {        
        navigate(`/cart`); 
      }, 2000);     
    }
    else
    navigate('/signin');
  };

  useEffect(() => {
    if (cart.prodID && cart.custID) {
      fetch("http://localhost:8080/api/Cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Cart data couldn't be sent.");
          }
          
          alert("Cart data sent successfully.");
        })
        .catch((error) => {
          alert("Item Already added in the cart");
        });
    }
  }, [cart]);

  const toggleLongDesc = () => {
    setShowLongDesc(!showLongDesc);
  };

  return (
    <div className="product-card">
      <img src={imgpath} alt={prodName} className="product-image" onClick={()=>handleClick(id)}/>
      <h3 className="product-name">{prodName}</h3>
      {showLongDesc ? (
        <p className="product-long-desc">{prodLongDesc}</p>
      ) : (
        <p className="product-short-desc">{prodShortDesc}</p>
      )}
      <div className="product-prices">
        <span className="product-offer-price">₹{offerPrice}</span>
        <span className="product-mrp-price">MRP - ₹{mrpPrice}</span>
        {prodPoints != 0 && (
          <>
            <span className='product-offer-price'><img src='/images/rupee1.jpg'style={{height:'20px',width:'20px',marginTop:'-3px'}}></img> {prodPoints}</span>
            <span className='product-offer-price'>Discount - {prodDisc === 0 ? "No Discount" : prodDisc + "% off"} </span>
          </>
        )}
      </div>
      {prodLongDesc && (
        <p className="Details" onClick={toggleLongDesc}>
          {showLongDesc ? 'Show Less' : 'More Details'}
        </p>
      )}
      <div className="product-buttons">
        <button className="add-to-cart-button" onClick={() => handleAddToCart(id)}>
          Add to Cart
        </button>
        <button className="buy-now-button" onClick={() => handleBuyNow(id)}>
          Buy Now
        </button>
      </div>
     
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgpath: PropTypes.string.isRequired,
  prodName: PropTypes.string.isRequired,
  prodLongDesc: PropTypes.string.isRequired,
  prodShortDesc: PropTypes.string.isRequired,
  offerPrice: PropTypes.number.isRequired,
  mrpPrice: PropTypes.number.isRequired
};

export default ProductCard;