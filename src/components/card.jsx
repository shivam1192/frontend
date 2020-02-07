import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap';

const FlowerCard = ({flower}) => {
  console.log(flower);
  return (
      

    <Card style={{ width: "220px", margin: 20 }}>
      <Card.Img variant="top" style={{width: '220px', height: '300px'}} src={flower.img_url} />
      <Card.Body>
        <Card.Title>{flower.name}<p>{flower.price} $</p></Card.Title>
        
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
     
  );
};

export default FlowerCard;
