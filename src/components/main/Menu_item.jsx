import React from "react";
import PropTypes from "prop-types";
import Image from "next/image"; //이미지 최적화

const MenuItem = ({ label, name, price, imageUrl }) => {
  return (
    <div className={`menuItem ${label === "품절" ? "품절" : ""}`}>
      <div className="menuItem_info">
        {label && (
          <div className={`menuItem_label ${label.toLowerCase()}`}>{label}</div>
        )}
        <div className="menuItem_name">{name}</div>
        <div className="menuItem_price">{price}원</div>
      </div>
      <div className="menuItem_image">
        <Image src={imageUrl} alt={name} width={80} height={80} quality={75} />{" "}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MenuItem;
