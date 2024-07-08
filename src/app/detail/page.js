"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Detail_menu_top from "@/components/detail/Detail_menu_top";
import Detail_menu_bottom from "@/components/detail/Detail_menu_bottom";
import ImageComponent from "@/components/common/ImageComponent";
import Line from "@/components/common/Line";
import Button from '@/components/common/Button';
import { useBag } from '@/context/BagContext';
import { menuItems, sideMenus } from '@/constants/datas';

const getMenuById = (id) => {
  return [...menuItems, ...sideMenus].find(item => item.id === id);
}

export default function Detail() {
  const [menuItem, setMenuItem] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [optionPrice, setOptionPrice] = useState(0);
  const [options, setOptions] = useState([]);
  const { addItem, updateItem, bag } = useBag();
  const router = useRouter();

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 보장
    if (typeof window !== 'undefined' && router.isReady) {
      const itemId = parseInt(router.query.id);
      const item = getMenuById(itemId);
      if (item) {
        setMenuItem(item);
        setTotalPrice(item.price + optionPrice * quantity);
      }
    }
  }, [router.isReady, router.query]);

  const handlePriceChange = (newTotalPrice, newQuantity) => {
    setQuantity(newQuantity);
    setTotalPrice((menuItem.price + optionPrice) * newQuantity);
  };

  const handleOptionChange = (mainOptionPrice, subOptionsTotalPrice, selectedOptions) => {
    const newOptionPrice = mainOptionPrice + subOptionsTotalPrice;
    setOptionPrice(newOptionPrice);
    setOptions(selectedOptions);  // 옵션 배열 업데이트
    setTotalPrice((menuItem.price + newOptionPrice) * quantity);
  };

  const handleButtonClick = () => {
    const itemId = parseInt(router.query.id);  // 버튼 클릭 시 다시 id 확인
    const item = {
      id: itemId || Date.now(),
      name: menuItem.name,
      price: menuItem.price + optionPrice,
      quantity,
      options
    };
    if (bag.items.some(bagItem => bagItem.id === itemId)) {
      updateItem(itemId, item);
    } else {
      addItem(item);
    }
    router.push('/bag');
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
        <Button className={'main__button'} itemQuantity={quantity} onClick={handleButtonClick}>
          {totalPrice}원 담기
        </Button>
      </div>
    </>
  );
}
