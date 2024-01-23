import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
export default function CartItem() {
  const { all_product, cartItem, removeFromCart, getTotalCartAmounts } =
    useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="cart-item-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="cart-item-format cart-item-main">
                <img src={e.image} alt="" className="cart-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-item-quantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>{" "}
                <img
                  className="remove"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart([e.id]);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-item-down">
        <div className="cart-item-total">
          <h1>cart Totals</h1>
          <div className="total-item">
            <h3>SubTotal</h3>
            <h3>${getTotalCartAmounts()}</h3>
          </div>
          <hr />
          <div className="total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmounts()}</h3>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode">
          <p>IF you have a promo code, Enter here</p>
          <div className="promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
