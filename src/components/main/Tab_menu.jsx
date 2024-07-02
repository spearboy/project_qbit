"use client"; //useState를 사용하여 클라이언트 측 상태 관리를 하기 때문에 클라이언트 컴포넌트로 명시

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
    afterChange: (index) => setSelectedTab(index), // 슬라이드가 변경된 후 선택된 탭 인덱스를 업데이트
  };

  return (
    <div className="container">
      <div className="tabmenu_container">
        <div className="tabMenu">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${selectedTab === index ? "selected" : ""}`}
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabMenu;
