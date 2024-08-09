import React from 'react';
import "./menu.css";
import Cards from './card/Cards';

function ExploreMenu({list, collectionName}) {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {
            list.map((restaurant) =>{
                return <Cards restaurant={restaurant} />
            })
        }
      </div>
    </div>
  )
}

export default ExploreMenu;
