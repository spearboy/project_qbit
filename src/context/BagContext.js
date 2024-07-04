"use client"
import { createContext, useContext, useState } from 'react';

const BagContext = createContext();

export const useBag = () => useContext(BagContext);

export const BagProvider = ({ children }) => {
  const [bag, setBag] = useState({
    totalItems: 0,
    totalPrice: 0,
  });

  const addItem = (price, quantity) => {
    setBag(prevBag => ({
      totalItems: prevBag.totalItems + quantity,
      totalPrice: prevBag.totalPrice + price * quantity,
    }));
  };

  return (
    <BagContext.Provider value={{ bag, addItem }}>
      {children}
    </BagContext.Provider>
  );
};
