import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefultCart = () => {
  let cart = {};
  for (let item = 0; item < all_product.length + 1; item++) {
    cart[item] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItem);
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmounts = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      console.log(cartItem[item]);

      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
      return totalAmount;
    }
    console.log(totalAmount);
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };
  const contxtValue = {
    all_product,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmounts,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contxtValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
