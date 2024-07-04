"use client"
import { createContext, useContext, useState } from 'react';

const BagContext = createContext();

export const useBag = () => useContext(BagContext);

export const BagProvider = ({ children }) => {
  const [bag, setBag] = useState({
    totalItems: 0,
    totalPrice: 0,
    items: [],
  });

  const addItem = (item) => {
    setBag(prevBag => ({
      totalItems: prevBag.totalItems + item.quantity,
      totalPrice: prevBag.totalPrice + item.price * item.quantity,
      items: [...prevBag.items, item],
    }));
  };

  const updateItem = (id, updatedItem) => {
    setBag(prevBag => {
      const items = prevBag.items.map(item => item.id === id ? updatedItem : item);
      const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return { items, totalItems, totalPrice };
    });
  };

  const removeItem = (id) => {
    setBag(prevBag => {
      const items = prevBag.items.filter(item => item.id !== id);
      const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return { items, totalItems, totalPrice };
    });
  };

  return (
    <BagContext.Provider value={{ bag, addItem, updateItem, removeItem }}>
      {children}
    </BagContext.Provider>
  );
};
