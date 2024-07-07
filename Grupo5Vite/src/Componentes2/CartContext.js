// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({}); // Example structure: { 'productId': quantity }

  // Add item to cart
  const addItemToCart = (productId, quantity) => {
    setCartItems(prevItems => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + quantity,
    }));
  };

  // Remove item from cart
  const removeItemFromCart = (productId) => {
    setCartItems(prevItems => {
      const updatedItems = { ...prevItems };
      delete updatedItems[productId];
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};