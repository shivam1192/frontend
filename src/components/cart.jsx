import React, { Component } from "react";
import CartItem from "./cartItem";
import PriceTable from "./priceTable";

const Cart = ({ cartItems, deleteFromCart }) => {
  console.log(cartItems);
  return (
    <>
      <div style={{width: '50%', display: 'inline-block'}}>
        {cartItems.map(item => {
          return (
            <CartItem key={item.name} item={item} deleteFromCart={deleteFromCart}></CartItem>
          );
        })}
      </div>
      <div style={{width: '50%', display: 'inline-block'}}>
        <h1>Total Cart items: {cartItems.length}</h1>
        <PriceTable></PriceTable>
      </div>
    </>
  );
};

export default Cart;
