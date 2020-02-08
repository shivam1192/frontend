import React, { Component } from 'react';

import { Button, Card } from 'react-bootstrap';
const CartItem = ({item, deleteFromCart}) => {
    return (
        <Card style={{ width: "220px", margin: 5, display:'inline-block' }}>
          <Card.Img variant="top" style={{width: '220px', height: '300px'}} src={item.img_url} />
          <Card.Body>
            <Card.Title>{item.name}<p>{item.price} $</p></Card.Title>
            
            <Button variant="danger" onClick={()=>deleteFromCart(item)}>Remove from Cart</Button>
          </Card.Body>
        </Card>  );
}
 
export default CartItem;