// src/app/detail/page.js
import React, { useEffect, useState } from 'react';
import Detail_menu_top from "@/components/detail/Detail_menu_top";
import Detail_menu_bottom from "@/components/detail/Detail_menu_bottom";
import ImageComponent from "@/components/common/ImageComponent";
import Line from "@/components/common/Line";
import Button from '@/components/common/Button';
import { useBag } from '@/context/BagContext';

export default function Detail() {
  const [menuItem, setMenuItem] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [optionPrice, setOptionPrice] = useState(0);
  const [options, setOptions] = useState([]);
  const { addItem, updateItem, bag } = useBag();

  useEffect(() => {
    const itemId = new URLSearchParams(window.location.search).get('id');
    fetch(`/api/menu/${itemId}`)
      .then(response => response.json())
      .then(data => {
        setMenuItem(data);
        setTotalPrice(data.price);
      })
      .catch(error => console.error('Failed to load menu item:', error));
  }, []);

  const handlePriceChange = (newTotalPrice, newQuantity) => {
    setQuantity(newQuantity);
    setTotalPrice((menuItem.price + optionPrice) * newQuantity);
  };

  const handleOptionChange = (mainOptionPrice, subOptionsTotalPrice, selectedOptions) => {
    const newOptionPrice = mainOptionPrice + subOptionsTotalPrice;
    setOptionPrice(newOptionPrice);
    setOptions(selectedOptions);
    setTotalPrice((menuItem.price + newOptionPrice) * quantity);
  };

  const handleButtonClick = () => {
    const item = {
      id: menuItem.id || Date.now(),
      name: menuItem.name,
      price: menuItem.price + optionPrice,
      quantity,
      options
    };
    if (bag.items.some(bagItem => bagItem.id === menuItem.id)) {
      updateItem(menuItem.id, item);
    } else {
      addItem(item);
    }
    // Navigation to bag could be handled here
  };

  if (!menuItem) return <div>Loading...</div>;

  return (
    <>
      <div className="Img">
        <ImageComponent src={menuItem.imageUrl} alt={menuItem.name} />
      </div>
      <div className="container">
        <Detail_menu_top menuItem={menuItem} basePrice={menuItem.price} onPriceChange={handlePriceChange} />
      </div>
      <Line />
      <div className="container">
        <Detail_menu_bottom menuItem={menuItem} onOptionChange={handleOptionChange} />
      </div>
      <div className="bottom__wrapper container">
        <Button className={'main__button'} onClick={() => handleButtonClick()}>
          {totalPrice}원 담기
        </Button>
      </div>
    </>
  );
}
