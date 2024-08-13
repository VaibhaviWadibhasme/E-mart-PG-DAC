import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItmCard({title,img}) {
  return (
    <div className='card-x' >
      <Card style={{ cursor: 'pointer' }} >
        <Card.Img className='card-img' variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{display:'flex', justifyContent:'center'}}>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItmCard;