// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import "./Footer.css";
// import { useTranslation } from 'react-i18next';
// function Footer() {
//   const { t, i18n } = useTranslation();
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng); 
//   };
//   return (
//     <footer className="bg-black text-light mt-5 align-center">
//         <Container fluid='xl'>
//           <Row className="py-2">
//             <Col  xs={12} md={4} className="mb-4 " >
//               <h5>About Us</h5>
//               <p>Welcome to Electro Mart!<br/>

//              At Electro Mart, we're dedicated to providing a diverse selection of products tailored to meet all your 
//              shopping needs. From everyday essentials to unique finds, we strive to offer high-quality items and 
//              exceptional service.</p>
//             </Col>
//             <Col xs={12} md={4} className="mb-4">
//               <h5></h5>
//               <ul className="list-unstyled">
               
//               </ul>
//             </Col>
//             <Col xs={8} md={4} className="mb-4">
//               <h5>Contact Us</h5>
//               <p>Email: electromart@gmail.com</p>
//               <p>Phone: +1 000 000 000</p>
//             </Col>
//             <Col xs={8} md={4} className="mb-4">
//               <h5>Address</h5>
//               <p>Address: 5th Floor, Vidyanidhi Education Complex, Vidyanidhi Road, Juhu Scheme, Andheri (W), Mumbai 400 049 India

//             Mobile: 9029435311 / 9324095272 9987062416

//             Email: electromart@gmail.com </p>
              
//             </Col>
            
//           </Row>
//           <hr />
//           <div className="text-center py-3">
//             &copy; {new Date().getFullYear()} Electro Mart. All rights reserved.
//           </div>
//         </Container>
//       </footer>
//   );
// }

// export default Footer;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./Footer.css";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="bg-black text-light mt-5 align-center">
      <Container fluid='xl'>
        <Row className="py-2">
          <Col xs={12} md={4} className="mb-4">
            <h5>{t('About Us')}</h5>
            <p>
              {t('Welcome to E-Mart!')}<br/>
              {t('At E-Mart, we\'re dedicated to providing a diverse selection of products tailored to meet all your shopping needs. From everyday essentials to unique finds, we strive to offer high-quality items and exceptional service.')}
            </p>
          </Col>
          
          <Col xs={8} md={4} className="mb-4">
            <h5>{t('Contact Us')}</h5>
            <p>{t('Email')}: emart@gmail.com</p>
            <p>{t('Phone')}: +1 000 000 000</p>
          </Col>
          <Col xs={8} md={4} className="mb-4">
            <h5>{t('Address')}</h5>
            <p>
              {t('5th Floor, Vidyanidhi Education Complex, Vidyanidhi Road, Juhu Scheme, Andheri (W), Mumbai 400 049 India')}<br/>
              {t('Mobile')}: 9029435311 / 9324095272 9987062416<br/>
              {t('Email')}: emart@gmail.com
            </p>
          </Col>
          <Col xs={12} className="mb-4 d-flex justify-content-center">
            <Form.Select aria-label="Select Language" onChange={(e) => changeLanguage(e.target.value)} style={{ maxWidth: '200px' }}>
              <option value="en">English</option>
              <option value="hn">Hindi</option>
              {/* Add more languages as needed */}
            </Form.Select>
          </Col>
        </Row>
        <hr />
        <div className="text-center py-3">
          &copy; {new Date().getFullYear()} Electro Mart. {t('All rights reserved.')}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;