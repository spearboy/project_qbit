"use client";
import Store_info from "@/components/main/Store_info";
import TabMenu from "@/components/main/Tab_menu";
import Menu from "@/components/main/Menu_info";
import Line from "@/components/common/Line";
import Button from "@/components/common/Button";
import { useRef } from "react";
import { useRouter } from 'next/navigation';
import { useBag } from '@/context/BagContext';
import { tabs, menuItems, sideMenus } from '@/constants/datas';

const MainPage = () => {
  const { getTotalPrice, getTotalItems } = useBag();
  const router = useRouter();

  const menuRefs = {
    "추천메뉴": useRef(null),
    "사이드": useRef(null),
    "음료": useRef(null),
    "주류": useRef(null),
    "메뉴명": useRef(null),
    "어쩌고": useRef(null),
    "추가 아이템": useRef(null),
  };

  const handleTabSelect = (index) => {
    const tab = tabs[index];
    const menuRef = menuRefs[tab];
    if (menuRef.current) {
      const offsetTop =
        menuRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleGoBag = () => {
    router.push('/bag');
  };

  return (
    <div className="main">
      <Store_info name="큐빗 라멘 안산중앙점" tableNumber="02" />
      <TabMenu tabs={tabs} onTabSelect={handleTabSelect} />
      <Menu title="추천메뉴" items={menuItems} ref={menuRefs["추천메뉴"]} />
      <Line />
      <Menu title="사이드" items={sideMenus} ref={menuRefs["사이드"]} isLast />
      <div className="bottom__wrapper container">
        <Button className={'main__button'} onClick={handleGoBag} itemQuantity={getTotalItems()}>
          {getTotalPrice()}원 확인하러가기
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
