import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";

const StoreInfo = ({ name, tableNumber }) => {
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const socket = io();

    socket.on("viewers", (viewersCount) => {
      setViewers(viewersCount);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <div className="store_info">
        <div className="store_left">
          <div className="store_info_name">{name}</div>
          <div className="watch_together">{viewers}명이 같이 보고 있어요</div>
        </div>
        {/* store_left */}
        <div className="store_right">
          <div className="store_table">테이블: {tableNumber}번</div>
        </div>
      </div>
    </div>
  );
};

// PropTypes를 사용하여 props의 유형을 정의
StoreInfo.propTypes = {
  name: PropTypes.string.isRequired, // name은 문자열이며 필수
  tableNumber: PropTypes.string.isRequired, // tableNumber는 문자열이며 필수
};

export default StoreInfo; // StoreInfo 컴포넌트를 export
