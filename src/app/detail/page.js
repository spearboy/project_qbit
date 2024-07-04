"use client"
import { useState } from 'react';
import Detail_menu_top from "@/components/detail/Detail_menu_top";
import Detail_menu_bottom from "@/components/detail/Detail_menu_bottom";
import Image from "@/components/common/Image";
import Line from "@/components/common/Line";
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';

export default function Detail() {
  const [basePrice] = useState(18000);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [quantity, setQuantity] = useState(1);
  const [optionPrice, setOptionPrice] = useState(0);
  const router = useRouter();

  const handlePriceChange = (newTotalPrice, newQuantity) => {
    setQuantity(newQuantity);
    setTotalPrice(newTotalPrice + optionPrice * newQuantity);
  };

  const handleOptionChange = (newOptionPrice) => {
    setOptionPrice(newOptionPrice);
    setTotalPrice((basePrice + newOptionPrice) * quantity);
  };

  const handleButtonClick = () => {
    router.push('/result');
  };

  return (
    <>
      <div className="Img">
        <Image />
      </div>
      <div className="container">
        <Detail_menu_top basePrice={basePrice} onPriceChange={handlePriceChange} />
      </div>
      <Line />
      <div className="container">
        <Detail_menu_bottom onOptionChange={handleOptionChange} />
      </div>
      <div className="bottom__wrapper container">
        <Button 
          className={'main__button'} 
          itemQuantity={quantity} 
          totalPrice={totalPrice} // totalPrice를 넘겨줌
          onClick={handleButtonClick}
        >
          {totalPrice}원 담기
        </Button>
      </div>
    </>
  );
}