"use client"; //useState를 사용하여 클라이언트 측 상태 관리를 하기 때문에 클라이언트 컴포넌트로 명시

import React, { useState } from "react";

const TabMenu = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0); // 선택된 탭의 인덱스를 저장하는 상태

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
