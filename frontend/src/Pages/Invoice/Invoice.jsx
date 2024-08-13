
import React, { useState, useEffect } from 'react';
import './Invoice.css';
import { useNavigate, useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';
import logo from '../../Components/Assets/Main logo.png';

const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [productDetails, setProductDetails] = useState([]);
  const [loader, setLoader] = useState(false);

  const { invoiceID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    
    fetch(`http://localhost:8080/api/invoice/${invoiceID}`)
      .then((response) => response.json())
      .then((data) => {
        setInvoiceData(data);
        
        fetch(`http://localhost:8080/api/Customer/${data.custID}`)
          .then((response) => response.json())
          .then((customer) => {
            setCustomerData(customer);
          })
          .catch((error) => {
            console.error('Error fetching customer data:', error);
          });

        
        fetch(`http://localhost:8080/api/Invoicedetaails/InvoiceID/${invoiceID}`)
          .then((response) => response.json())
          .then((products) => {
            setProductDetails(products);
          })
          .catch((error) => {
            console.error('Error fetching product details:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching invoice data:', error);
      });
  }, [invoiceID]);

  if (!invoiceData || !customerData || productDetails.length === 0) {
    return <div>Loading...</div>;
  }

  const downloadPDF = () => {
    const capture = document.querySelector('.invoice-page');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('P', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('invoice.pdf');
      
      
      const pdfFile = doc.output('blob'); // Convert PDF to Blob format

      const formData = new FormData();
      formData.append('file', pdfFile, 'invoice.pdf');
      formData.append('recipient', customerData.cust_email); // Assuming customerData contains the email
      formData.append('msgBody', 'Please find the attached invoice.');
      formData.append('name', 'E-Mart Solutions');

      fetch('http://localhost:8080/api/sendMailWithAttachment', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to send email');
          }
          console.log('Email sent successfully!');
          setLoader(false);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setLoader(false);
        });

      const custId = parseInt(localStorage.getItem('custId'));
      fetch(`http://localhost:8080/api/Cart/Deletecust/${custId}`, {
        method: 'DELETE',
      })
        .then(() => {
          console.log('Cart items deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting cart items:', error);
        });
    });
  };

  const goBack = () => {
    navigate('/cart');
  };

  return (
    <>
      <div className="invoice-page">
        <div className="invoice-header">
          <header>
            <img src={logo} alt="Logo" className="logo" />
          </header>
          <h1>E-Mart Solutions</h1>
          <hr />
          <br />
          <h1>INVOICE</h1>
          <div className="invoice-date">{invoiceData.invoiceDate}</div>
        </div>
        <div className="invoice-customer-details">
          <div className="customer-field">
            <span>Customer Name:</span> {customerData.custName}
          </div>
          <div className="customer-field">
            <span>Customer Address:</span> {customerData.custAddress}
          </div>
          <div className="customer-field">
            <span>Customer Phone:</span> {customerData.custPhone}
          </div>
          <div className="customer-field">
            <span>Customer Points:</span> {customerData.points}
          </div>
        </div>
        <div className="invoice-products">
          {productDetails.map((product) => (
            <div className="product" key={product.prodID}>
              <div className="product-table">
                <table>
                  <tbody>
                    <tr>
                      <td className="table-header">Product Name:</td>
                      <td>{product.prodName}</td>
                    </tr>
                    <tr>
                      <td className="table-header">Product ID:</td>
                      <td>{product.prodID}</td>
                    </tr>
                    <tr>
                      <td className="table-header">MRP:</td>
                      <td>₹{product.mrp.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="table-header">Points Redeem:</td>
                      <td>{product.pointsRedeem}</td>
                    </tr>
                    <tr>
                      <td className="table-header">Card Holder Price:</td>
                      <td>₹{product.cardHolderPrice.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <div className="invoice-totals">
          <div className="invoice-field">
            <span>Total Amount:</span> ₹{invoiceData.totalAmt.toFixed(2)}
          </div>
          <div className="invoice-field">
            <span>Delivery Charge:</span> ₹{invoiceData.deliveryCharge.toFixed(2)}
          </div>
          <div className="invoice-field">
            <span>Tax:</span> ₹{invoiceData.tax.toFixed(2)}
          </div>
          <div className="invoice-field">
            <span>Total Bill:</span> ₹{invoiceData.totalBill.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="buttons">
        <button className="btn2" onClick={downloadPDF} disabled={loader}>
          {loader ? <span>Sending Mail...</span> : <span>Confirm</span>}
        </button>
        <button className="btn2" onClick={goBack}>
          Back
        </button>
      </div>
    </>
  );
};

export default Invoice;



