import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const getDefultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefultCart());
  const [all_product, setAll_product] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/allproduct")
      .then((response) => {
        console.log(response);
        setAll_product(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("token")) {
      axios
        .post(
          "http://localhost:4000/addtocart",
          { itemId: itemId },
          {
            headers: { "auth-token": `${localStorage.getItem("token")}` },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("token")) {
      axios
        .post(
          "http://localhost:4000/remvefromcart",
          { itemId: itemId },
          {
            headers: { "auth-token": `${localStorage.getItem("token")}` },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getTotalCartAmounts = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      console.log(cartItems);

      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
      return totalAmount;
    }
    console.log(totalAmount);
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contxtValue = {
    getTotalCartAmounts,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contxtValue}>
      {props.children}
    </ShopContext.Provider>
  );
  
};
export default ShopContextProvider;

