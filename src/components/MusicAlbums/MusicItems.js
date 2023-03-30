import React from 'react';

import classes from './MusicItem.module.css';
//import Button from '../UI/Button';
import {Card,Button, Container,Col,Row} from "react-bootstrap";

const MusicItems = (props) => {
  return (
    // <div className={classes.div}>
    //   <h2>{props.item.title}</h2>
    //   <img src={props.item.imageUrl} alt='Music Album' />
    //   <span>${props.item.price}</span>
    //   <Button title='ADD TO CART' />
    // </div>
    
    <div className={classes.div}>
<Card style={{ width: '18rem' }}>
<Card.Title>{props.item.title}       
</Card.Title>
<Card.Body>

      <Card.Img variant="top" src={props.item.imageUrl} />
      <Card.Text>
      <Container>
        <Row>
          <Col>
         ${props.item.price}
        </Col>
        
        <Col>
     <Button variant="primary">Add </Button>
        </Col>
        </Row>
        </Container>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  );
};

export default MusicItems;

