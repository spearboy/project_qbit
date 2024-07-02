import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./Menu_item";

const Menu = ({ title, items }) => {
  return (
    <div className="container">
      <div className="menu">
        <h2 className="menu-title">{title}</h2>
        <div className="menu-items">
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;
