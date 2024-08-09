import React from "react";
import Slider from "react-slick";
import "./collection.css";
import NextArrow from "../../common/carousel/NextArrow";
import PreviousArrow from "../../common/carousel/PreviousArrow";
import ItemsDelivery from "./ItemsDelivery";

const deliveryItems = [
  {
    id: 1,
    name: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    name: "Burger",
    cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 3,
    name: "Biryani",
    cover: "https://b.zmtcdn.com/data/o2_assets/37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg",
  },
  {
    id: 4,
    name: "Thali",
    cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
  {
    id: 5,
    name: "Rolls",
    cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
  },
  {
    id: 6,
    name: "Cake",
    cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  },
  {
    id: 7,
    name: "North Indian",
    cover: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
  },
  {
    id: 8,
    name: "Paneer",
    cover: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
  },
  {
    id: 9,
    name: "Fried Rice",
    cover: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
  },
  {
    id: 10,
    name: "Noodles",
    cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
  },
  {
    id: 11,
    name: "Momos",
    cover: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
  },

];

function CollectionOfDelivery() {
  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow/>,
  };
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Inspiration for your first order</div>
        <Slider {...settings} >
          {deliveryItems.map((item)=> {
            return <ItemsDelivery item={item}/>;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CollectionOfDelivery;
