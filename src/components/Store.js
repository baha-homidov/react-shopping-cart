import "../assets/styles/Store.css";
import StoreEntryCard from "./StoreEntryCard";
import CartIcon from "./CartIcon";
import React from "react";
const Store = (props) => {
  return (
    <>
      <div className="container">
        <CartIcon cart={props.cart} />
        {props.storeInventory.map((item, index) => {
          return (
            <StoreEntryCard
              {...item}
              pushToCart={props.pushToCart}
              className="cart"
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Store;
