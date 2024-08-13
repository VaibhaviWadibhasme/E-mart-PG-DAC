import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inCart,setIncart]= useState(false)
  const navigate= useNavigate();
  const [cart, setCart] = useState({
    prodID: "",
    custID: "",
    qty: ""
  });
  console.log(cart)
  const updateAddtocart=(id)=>{
    if (localStorage.getItem("islogin") === "true") {
      setCart({
        prodID: id,
        custID: localStorage.getItem("custId"),
        qty: 1
      });      
      return;
    }
    else
    navigate(`/signin`);
  };
  

  const callAddtocart=(id)=>{
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
    navigate(`/signin`);
  };
  
  useEffect(() => {
    console.log(cart.prodID,cart.custID)
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
          setIncart(true);
        })
        .catch((error) => {
          alert("Item Already added in the cart");
        });
    }
  }, [cart]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/product/'+ id);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="productd">
      <div className="product-img">
        <img src={product.imgpath} alt="AirPods" />
        
      </div>
      <div className="product-info">
        <h5>Special Price</h5>
        <h2>₹{product.offerPrice}</h2>
        <div style={{display:'flex',justifyContent:'flex-start' , gap:'20px'}}>
          <h6 className='mrpPrice'>₹{product.mrpPrice}</h6>
          <h6 style={{color:'green'}}>{product.disc}% off</h6>
        </div>
        
        <h5><img src='/images/rupee1.jpg'style={{height:'20px',width:'20px',marginTop:'-3px'}}></img> {product.pointsRedeem}</h5>
        <h2>{product.prodName}</h2>
        
        <h6>{product.prodShortDesc}</h6>
        <p>{product.prodLongDesc}</p>
        <div className="quantity-selector">
          <button className='butn'>-</button>
          <button className='butn'>+</button>
          <span>Qty:</span>
        </div>
        <div className='btn' style={{display:'flex', justifyContent:'center',gap:'10px'}}>
        <button onClick={()=>updateAddtocart(product.prodID)}>{inCart?"Added in Cart":"Add To Cart"}</button>
        <button className="order-button" onClick={()=>callAddtocart(product.prodID)}>Order Now</button>
        </div>
      </div>
    </div>

  );
};

export default ProductDetails;
