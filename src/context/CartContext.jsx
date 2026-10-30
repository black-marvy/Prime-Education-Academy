import React, { createContext, useState } from "react";

export const cartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newDonation) => {
    setCart((prevCart) => [...prevCart, newDonation]);
  };
  const delCart = (id) => {
    setCart((prevCart) => prevCart.filter((prevCart) => prevCart.id !== id));
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        delCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
