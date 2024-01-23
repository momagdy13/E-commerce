import React, { useContext } from "react";
import "./ProductDetail.css";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDetail = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="details">
      <div className="details-left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="details-image">
          <img className="main-image" src={product.image} alt="" />
        </div>
      </div>
      <div className="details-right">
        <h1>{product.name}</h1>
        <div className="star">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
        </div>
        <div className="price">
          <div className="price-old">${product.old_price}</div>
          <div className="price-new">${product.new_price}</div>
        </div>
        <div className="drscription">it's so good</div>
        <div className="size">
          <h1>Select Size</h1>
          <div className="Size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to cart
        </button>
        <p className="category">
          <span>
            Category : <span>Women, T-shirt, Crop Top</span>
          </span>
        </p>
        <p className="category">
          <span>
            Tags : <span></span>Modern, Latest
          </span>
        </p>
      </div>
    </div>
  );
};
