// components/main/Tab_menu.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";

const TabMenu = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabRefs = useRef([]);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  useEffect(() => {
    const selectedTabElement = tabRefs.current[selectedTab];
    if (selectedTabElement) {
      const offsetLeft = selectedTabElement.offsetLeft;
      const offsetWidth = selectedTabElement.offsetWidth;
      const afterElement = document.querySelector(".tabMenu .tab-highlight");
      if (afterElement) {
        afterElement.style.transform = `translateX(${offsetLeft}px)`;
        afterElement.style.width = `${offsetWidth}px`;
      }
    }
  }, [selectedTab]);

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
