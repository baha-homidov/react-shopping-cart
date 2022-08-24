import "../assets/styles/Store.css";
import StoreEntryCard from "./StoreEntryCard";
import CartIcon from "./CartIcon";
import React from "react";
import { Link } from "react-router-dom";
const Store = (props) => {
  return (
    <>
      <div className="container">
        <Link to="/cart">
          <CartIcon cart={props.cart} />
        </Link>
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
