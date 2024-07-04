"use client"
import { useState } from 'react';

const Quantity = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="quantity__wrapper">
      <div 
        className={`quantity__button remove ${quantity === 1 ? 'disabled' : ''}`} 
        onClick={handleRemove}
      ></div>
      <input type="text" value={quantity} readOnly />
      <div className="quantity__button add" onClick={handleAdd}></div>
    </div>
  );
}

export default Quantity;