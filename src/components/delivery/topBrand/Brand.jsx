import React from 'react';
import "./brand.css";

function Brand({brand}) {
  return (
  
    <div className="Brand-Box-Cover">
      <div className="brand-item-cover">
        <img src={brand.cover} className="brand-image" alt={brand.time} />
      </div>
      <div className="brand-name">{brand.name}</div>
      <div className="brand-name">{brand.time}</div>
    </div>

  )
}

export default Brand
