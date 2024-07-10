"use client";
import Line from "@/components/common/Line";
import My_bag from "@/components/bag/My_bag";
import Your_bag from "@/components/bag/Your_bag";
import Button from "@/components/common/Button";
import { useRouter } from 'next/navigation';
import { useBag } from '@/context/BagContext';

export default function Bag() {
  const { getTotalPrice, getTotalItems } = useBag();
  const router = useRouter();

  const handleGoComplete = () => {
    router.push('/complete');
  };

  return (
    <>
      <div className="container">
        <My_bag />
      </div>
      <Line />
      <div className="container">
        <Your_bag />
      </div>
      <div className="bottom__wrapper container">
        <Button className={'main__button'} onClick={handleGoComplete} itemQuantity={getTotalItems()}>
          {getTotalPrice()}원 주문하기
        </Button>
      </div>
    </>
  );
}
