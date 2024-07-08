// components/main/TabMenu.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";

const TabMenu = ({ tabs, onTabSelect }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabRefs = useRef([]);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    if (onTabSelect) {
      onTabSelect(index);
    }
  };

  const updateHighlight = () => {
    const selectedTabElement = tabRefs.current[selectedTab];
    if (selectedTabElement) {
      const offsetLeft = selectedTabElement.offsetLeft;
      const offsetWidth = selectedTabElement.offsetWidth;
      const highlightElement = document.querySelector(
        ".tabMenu .tab-highlight"
      );
      if (highlightElement) {
        highlightElement.style.transform = `translateX(${offsetLeft}px)`;
        highlightElement.style.width = `${offsetWidth}px`;
      }
    }
  };

  useEffect(() => {
    updateHighlight();
    window.addEventListener("resize", updateHighlight); // 창 크기 변경 이벤트 리스너 추가
    return () => {
      window.removeEventListener("resize", updateHighlight); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, [selectedTab, tabs]);

  return (
    <div className="container">
      <div className="tabmenu_container">
        <div className="tabMenu">
          <div className="tab-highlight"></div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`tab ${selectedTab === index ? "selected" : ""}`}
              onClick={() => handleTabClick(index)}
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
