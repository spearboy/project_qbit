import Store_info from "@/components/main/Store_info";
import TabMenu from "@/components/main/Tab_menu";
import Menu from "@/components/main/Menu_info";

import "@/assets/css/style.scss";
import Line from "@/components/common/Line";

export default function main() {
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
      label: "품절",
      name: "보미픽 고구마",
      price: "6,000",
      imageUrl: "/img/menu02.png",
    },
  ];

  return (
    <div className="main">
      <Store_info name="큐빗 라멘 안산중앙점" viewers={3} tableNumber="02" />
      <TabMenu tabs={tabs} />
      <Menu title="추천 메뉴" items={menuItems} />
      <Line />
      <Menu title="사이드" items={sideMenus} isLast />
    </div>
  );
}
