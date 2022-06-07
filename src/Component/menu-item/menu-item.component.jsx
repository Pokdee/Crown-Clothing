import React from "react";
import "../menu-item/menu-item.style.scss";

export const Menuitem = ({ id, title, image }) => {
  return (
    <div
      className={`product product-${id}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* <div className="bg-img"></div> */}

      <div className="info">
        <div className="product_name">{title}</div>
        <p className="text">shop now</p>
      </div>
    </div>
  );
};
