"use client";
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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

function DetailContent() {
  const [menuItem, setMenuItem] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [optionPrice, setOptionPrice] = useState(0);
  const [options, setOptions] = useState([]);
  const { addItem, updateItem, bag } = useBag();
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemId = parseInt(searchParams.get('id'));

  useEffect(() => {
    const item = getMenuById(itemId);
    if (item) {
      setMenuItem(item);
      setTotalPrice(item.price);
    }
  }, [itemId]);

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
        <Detail_menu_bottom menuItem={menuItem} onOptionChange={(mainPrice, subPrice) => handleOptionChange(mainPrice, subPrice, options)} />
      </div>
      <div className="bottom__wrapper container">
        <Button className={'main__button'} itemQuantity={quantity} onClick={handleButtonClick}>
          {totalPrice}원 담기
        </Button>
      </div>
    </>
  );
}

export default function Detail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailContent />
    </Suspense>
  );
}
