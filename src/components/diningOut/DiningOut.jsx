import React from "react";
import "./dining.css";
import Collection from "../common/diningCollection/Collection";
import Filter from "../common/filter/Filter";
import ExploreMenu from "../common/menu/ExploreMenu";

import { PiSlidersHorizontalDuotone } from "react-icons/pi";
import {Dining} from "../../data/Dining";


const collectionList = [
  {
    id: 1,
    title: "Top Trending Spots",
    cover:
      "https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810183.png",
    place: "29 Places",
  },
  {
    id: 2,
    title: "Best Insta-worthy Places",
    cover:
      "https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1705558245.png",
    place: "39 Places",
  },
  {
    id: 3,
    title: "Newly Opened Places",
    cover:
      "https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1705557723.png",
    place: "16 Places",
  },
  {
    id: 4,
    title: "Best Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810570.png",
    place: "50 Places",
  },
  {
    id: 5,
    title: "Perfect For Monsoon View",
    cover:
      "https://b.zmtcdn.com/data/collections/7a0c7b9413b80a49ce4d7e7355984df0_1720807160.png",
    place: "40 Places",
  },
  {
    id: 6,
    title: "Cozy Cafes for Rainy Days",
    cover:
      "https://b.zmtcdn.com/data/collections/bd99b4d133de596e2a7001f2a2b1f4ed_1721026679.png",
    place: "42 Places",
  },
  {
    id: 7,
    title: "Asian Food For Monsoon",
    cover:
      "https://b.zmtcdn.com/data/collections/4130ef17fc685f46bf1a1356c72bc3f1_1721026464.png",
    place: "45 Places",
  },
];
const diningFilter = [
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

const diningList = Dining;
function DiningOut() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filter filterList={diningFilter} />
      </div>
     <ExploreMenu  list={diningList} collectionName="Trending dining out restaurants in" />
    </div>
  );
}

export default DiningOut;
