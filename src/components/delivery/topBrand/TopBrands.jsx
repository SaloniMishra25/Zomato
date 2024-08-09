import React from "react";
import Slider from "react-slick";
import "./brand.css";
import NextArrow from "../../common/carousel/NextArrow";
import PreviousArrow from "../../common/carousel/PreviousArrow";
import Brand from "./Brand";

const brandList = [
  {
    id: 1,
    name:"Haldiram's",
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
  },
  {
    id: 2,
    name:"Domino's Pizza",
    time: "24 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp",
  },
  {
    id: 3,
    name:"Burger King",
    time: "43 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp",
  },
  {
    id: 4,
    name:"Subway",
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
  },
  {
    id: 5,
    name:"KFC",
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
  },
  {
    id: 6,
    name:"Pizza Hut",
    time: "37 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp",
  },
  {
    id: 7,
    name:"VEER JI",
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a4b9158807263b1fc0fa980ec9737f4d1714625812.png?output-format=webp",
  },
  {
    id: 8,
    name:"Burger Singh",
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1625244343.png?output-format=webp",
  },
  {
    id: 9,
    name:"Rolls King",
    time: "27 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1cbe03ee1c6933e8fb2021cd835e889d_1624021602.png?output-format=webp",
  },
  {
    id: 10,
    name:"Khadak Singh",
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/bb3db39305a0dfbbd729837f04d6249e_1656137122.png?output-format=webp",
  },
];

function TopBrands() {
  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {brandList.map((brand) => {
          return <Brand brand={brand} />;
        })}
      </Slider>
    </div>
  );
}

export default TopBrands;
