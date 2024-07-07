import React, { createContext, useContext, useState } from 'react';

const QuantityContext = createContext();

export const useQuantity = () => useContext(QuantityContext);

export const QuantityProvider = ({ children }) => {
  // Initialize with an empty object or pre-populated with product IDs and their initial quantities
  const [quantities, setQuantities] = useState({}); 

  // Function to update quantity for a specific product
  const updateQuantity = (productId, quantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: quantity
    }));
  };

  return (
    <QuantityContext.Provider value={{ quantities, updateQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
};