// components/main/MenuItem.jsx
import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const MenuItem = ({ label, name, price, imageUrl }) => {
  const displayLabel = label === "soldout" ? "품절" : label;

  return (
    <div className={`menuItem ${label === "soldout" ? "soldout" : ""}`}>
      <div className="menuItem_info">
        {label && (
          <div
            className={`menuItem_label ${
              label === "soldout" ? "soldout" : label.toLowerCase()
            }`}
          >
            {displayLabel}
          </div>
        )}
        <div className="menuItem_name">{name}</div>
        <div className="menuItem_price">{price}원</div>
      </div>
      <div className="menuItem_image">
        <Image
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          quality={75}
          priority
        />
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
