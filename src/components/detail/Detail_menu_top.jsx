"use client"
import Quantity from '../common/Quantity';

const Detail_menu_top = ({ menuItem, basePrice, onPriceChange }) => {
  const handleQuantityChange = (quantity) => {
    onPriceChange(basePrice * quantity, quantity);
  };

  return (
    <div className='detail_menu_top'>
      <h2>{menuItem.name}</h2>
      <p>{menuItem.desc}</p>
      <div className='btn'>
        <p>{basePrice}원</p>
        <Quantity onQuantityChange={handleQuantityChange} />
      </div>
    </div>
  );
}

export default Detail_menu_top;
