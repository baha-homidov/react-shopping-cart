import "../assets/styles/StoreEntryCard.css";
import React from "react";
import { Link } from "react-router-dom";
const StoreEntryCard = (props) => {
  return (
    <>
      <Link to={`/store/${props.index}`}>
        <div className="entry-card">
        <img className="thumbnail" src={props.imgURL} alt="pic" />
          <h1>{props.name}</h1>
          <h2>Price: {props.price}$</h2>
        </div>
      </Link>
    </>
  );
};

export default StoreEntryCard;
