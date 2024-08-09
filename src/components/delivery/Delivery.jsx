import React from "react";
import "./delivery.css";

import { restaurant } from "../../data/Restaurent";
import Filter from "../common/filter/Filter";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import CollectionOfDelivery from "./collection/CollectionOfDelivery";
import TopBrands from "./topBrand/TopBrands";
import ExploreMenu from "../common/menu/ExploreMenu";

const deliveryFilter = [
  {
    id: 1,
    icon: <PiSlidersHorizontalDuotone className="absolute-center" />,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Cuisines",
  },

  {
    id: 4,
    title: "Pure Veg",
  },

  {
    id: 5,
    title: "Delivery Time",
  },

  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurant;
function Delivery() {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilter} />
      </div>
      <CollectionOfDelivery />
      <TopBrands />
      <ExploreMenu
        list={restaurantList}
        collectionName="Delivery restaurant in Bangalore"
      />
    </div>
  );
}

export default Delivery;
