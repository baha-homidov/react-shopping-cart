import "../assets/styles/Store.css";
import StoreEntryCard from "./StoreEntryCard";
import React from "react";
const Store = (props) => {
  return (
    <>
      <div className="container">
        {props.storeInventory.map((item, index) => {
          return (
            <StoreEntryCard
              {...item}
              pushToCart={props.pushToCart}
              className="cart"
              key={index}
            />
          );
        })}
        <button>{props.cart.length}</button>
      </div>
    </>
  );
};

export default Store;
