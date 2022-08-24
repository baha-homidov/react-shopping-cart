import React, { useState } from "react";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

const ProductPage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const item = {
    name: props.name,
    index: props.index,
    price: props.price
  };

  function setCart() {
    let newCart = [];
    newCart = Object.assign(newCart, props.cart);
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].index === item.index) {
        newCart[i].quantity += quantity;
        props.setCartCallback(newCart);
        setQuantity(1);
        return;
      }
    }
    let tempItem = item;
    tempItem.quantity = quantity;
    newCart.push(tempItem);
    props.setCartCallback(newCart);
    setQuantity(1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <>
      <Link to="/cart">
        <CartIcon cart={props.cart} />
      </Link>
      <h1>{props.name}</h1>
      <div className="current-quantity-container">
        <button className="decrement" onClick={decrementQuantity}>
          -
        </button>
        <div className="current-quantity">{quantity}</div>
        <button className="increment" onClick={incrementQuantity}>
          +
        </button>
      </div>
      <button onClick={setCart}>Add to Cart</button>
    </>
  );
};

export default ProductPage;
