import "../assets/styles/StoreEntryCard.css";
import React from "react";
import { Link } from "react-router-dom";
const StoreEntryCard = (props) => {
  return (
    <>
      <Link to={`/store/${props.index}`}>
        <div className="entry-card">
          <h1>{props.name}</h1>
        </div>
      </Link>
    </>
  );
};

export default StoreEntryCard;
