// src/app/main/page.js
"use client";

import Store_info from "@/components/main/Store_info";
import TabMenu from "@/components/main/Tab_menu";
import Menu from "@/components/main/Menu_info";
import Line from "@/components/common/Line";

import "@/assets/css/style.scss";
import Button from "@/components/common/Button";
import { useRef } from "react";
import { useRouter } from 'next/navigation';

export default function MainPage() {
  const nowPrice = 0;
  const router = useRouter();

  const tabs = [
    "추천메뉴",
    "사이드",
    "음료",
    "주류",
    "메뉴명",
    "어쩌고",
    "추가 아이템",
  ];

  const menuItems = [
    {
      label: "BEST",
      name: "큐빗 돈코츠 라멘",
      price: "10,000",
      imageUrl: "/img/menu01.png",
    },
    {
      label: "NEW",
      name: "병현 명청 덮밥",
      price: "18,000",
      imageUrl: "/img/menu02.png",
    },
    {
      name: "큐빗 마제소바",
      price: "9,000",
      imageUrl: "/img/menu03.png",
    },
  ];

  const sideMenus = [
    {
      label: "BEST",
      name: "지나가 좋아하는 교자",
      price: "6,000",
      imageUrl: "/img/menu04.png",
    },
    {
      label: "soldout",
      name: "보미픽 고구마",
      price: "6,000",
      imageUrl: "/img/menu02.png",
    },
  ];

  // 탭에서 클릭했을 때 해당 메뉴로 이동
  const menuRefs = tabs.reduce((acc, tab) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    acc[tab] = useRef(null);
    return acc;
  }, {});

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
      <Store_info name="큐빗 라멘 안산중앙점" viewers={3} tableNumber="02" />
      <TabMenu tabs={tabs} onTabSelect={handleTabSelect} />
      <Menu title="추천메뉴" items={menuItems} ref={menuRefs["추천메뉴"]} />
      <Line />
      <Menu title="사이드" items={sideMenus} ref={menuRefs["사이드"]} isLast />
      <div className="bottom__wrapper container">
        <Button className={'main__button'} onClick={handleGoBag}>{nowPrice}원 확인하러가기</Button>
      </div>
    </div>
  );
}
