import "../assets/styles/StoreEntryCard.css";
import React from "react";
import { Link } from "react-router-dom";
const StoreEntryCard = (props) => {
  return (
    <>
      <Link to={`/store/${props.index}`}>
        <div className="entry-card">
        <img className="thumbnail" src={props.imgURL} alt="pic" />
          <div className="price">$ {props.price}</div>
          <div className="name">{props.name}</div>
        </div>
      </Link>
    </>
  );
};

export default StoreEntryCard;
