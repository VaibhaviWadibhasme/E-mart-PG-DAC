import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItmCard from '../ItmCard/ItmCard.jsx';
import { Spinner } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';



const SubCategory = () => {
  const { id } = useParams();

  let navigate = useNavigate();
  
  
  const [Subcategories, setSubcategories] = useState([]);

  const handleClick = (id, flag) => {
    
    if (flag) {
      navigate(`/s/${id}`);
    } else navigate(`/p/${id}`);
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/Category/getCatNameByParentId/' + id)
      .then(response => response.json())
            .then(data => {
        setSubcategories(data);
        setLoading(false);
        console.log(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);
 

  


  return (
    <div>
      <div style={{ margin: '20px', display: 'flex', padding: '2%' }}>
        {Subcategories?.map((i) => (
          <div key={i.catmasterID} onClick={() => handleClick(i.catmasterID, i.childflag)} style={{ padding: '10px' }}>
            <ItmCard title={i.categoryName} img={i.catImgPath} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubCategory;
