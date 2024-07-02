// components/main/Tab_menu.jsx
"use client"; // useState를 사용하여 클라이언트 측 상태 관리를 하기 때문에 클라이언트 컴포넌트로 명시

import React, { useState } from "react";
import Slider from "react-slick"; // react-slick의 Slider 컴포넌트를 import

const TabMenu = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0); // 선택된 탭의 인덱스를 저장하는 상태

  // Slider 설정 추가
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className="container">
      <Slider {...settings} className="tabMenu">
        {" "}
        {/* Slider 컴포넌트를 사용하여 슬라이더 구현 */}
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${selectedTab === index ? "selected" : ""}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TabMenu;
