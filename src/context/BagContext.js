"use client";
import React, { useEffect, useState, createContext, useContext } from 'react';
import io from 'socket.io-client';

export const BagContext = createContext(); // BagContext 내보내기

export const useBag = () => useContext(BagContext);

export const BagProvider = ({ children }) => {
  const [bag, setBag] = useState({
    totalItems: 0,
    totalPrice: 0,
    items: [],
    totalViewers: 0,
  });
  const [otherBags, setOtherBags] = useState([]); // otherBags 상태 추가
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://qbitorder.com');
    setSocket(newSocket);

    newSocket.on('updateBag', (updatedBag) => {
      setBag(updatedBag);
    });

    newSocket.on('otherBags', (otherBagsData) => {
      setOtherBags(otherBagsData);
    });

    newSocket.on('viewers', (viewersCount) => {
      setBag(prevBag => ({ ...prevBag, totalViewers: viewersCount }));
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const updateBag = (newBag) => {
    setBag(newBag);
    if (socket) {
      socket.emit('updateBag', newBag);
    }
  };

  const addItem = (item) => {
    const newBag = {
      ...bag,
      totalItems: bag.totalItems + item.quantity,
      totalPrice: bag.totalPrice + item.price * item.quantity,
      items: [...bag.items, item],
    };
    updateBag(newBag);
  };

  const updateItem = (id, updatedItem) => {
    const newBag = {
      ...bag,
      items: bag.items.map(item => item.id === id ? updatedItem : item),
    };
    newBag.totalItems = newBag.items.reduce((acc, item) => acc + item.quantity, 0);
    newBag.totalPrice = newBag.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    updateBag(newBag);
  };

  const removeItem = (id) => {
    const newBag = {
      ...bag,
      items: bag.items.filter(item => item.id !== id),
    };
    newBag.totalItems = newBag.items.reduce((acc, item) => acc + item.quantity, 0);
    newBag.totalPrice = newBag.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    updateBag(newBag);
  };

  const getTotalPrice = () => {
    return bag.totalPrice;
  };

  const getTotalItems = () => {
    return bag.totalItems;
  };

  return (
    <BagContext.Provider value={{ bag, otherBags, addItem, updateItem, removeItem, getTotalPrice, getTotalItems }}>
      {children}
    </BagContext.Provider>
  );
};
