import React, { useContext, useState } from "react";
import { cartContext } from "../context/CartContext";

const test = () => {
  const [amount, setAmount] = useState();
  const { cart, addToCart, delCart } = useContext(cartContext);

  const prices = [10000, 30000, 50000, 200000, 4000];

  const newDonation = () => {
    if (!amount) {
      return alert("Input price");
    }
    const newAmount = {
      id: Date.now(),
      tile: "Donation",
      price: amount,
    };
     addToCart(newAmount);
  };
 
  return (
    <div>
      <h2>Help sponsor our programme</h2>

      <div>
        {prices.map((item) => (
          <button onClick={() => setAmount(item)}>{item} </button>
        ))}
        <input
          type="Number"
          placeholder="Input sponsorship"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={newDonation}>Add to cart</button>

        
      </div>
    </div>
  );
};

export default test;
