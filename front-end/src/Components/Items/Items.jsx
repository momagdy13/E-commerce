import React from "react";
import "./Items.css";
import {Link} from 'react-router-dom'

export default function Items(props) {
  return (
    <div className="items">
      <Link to = {`/products/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-price">
        <div className="new-price-item">${props.new_price}</div>
        <div className="old-price-item">${props.old_price}</div>
      </div>
    </div>
  );
}
