import React from "react";
import "./collection.css";

function ItemsDelivery({ item }) {
  return (
    
      <div className="BoxCover">
        <div className="delivery-item-cover">
          <img src={item.cover} className="item-image" alt={item.name} />
        </div>
        <div className="item-name">{item.name}</div>
      </div>
  
  );
}

export default ItemsDelivery;
