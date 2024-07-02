// components/main/MenuItem.jsx
import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ label, name, price, imageUrl }) => {
  return (
    <div className="menuItem">
      <div className="menuItem_info">
        {label && (
          <div className={`menuItem_label ${label.toLowerCase()}`}>{label}</div>
        )}
        <div className="menuItem_name">{name}</div>
        <div className="menuItem_price">{price}원</div>
      </div>
      <div className="menuItem_image">
        <img src={imageUrl} alt={name} />
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
