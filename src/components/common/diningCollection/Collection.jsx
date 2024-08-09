import React from "react";
import Slider from "react-slick";
import "./diningcollection.css";
import { FaCaretRight } from "react-icons/fa";
import NextArrow from "../../common/carousel/NextArrow";
import PreviousArrow from "../../common/carousel/PreviousArrow";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PreviousArrow />,
};
function Collection({ list }) {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </div>
          <div classsName="collection-location">
            All collection in Delhi NCR
            <FaCaretRight className="absolute-center" />
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  className="collection-image"
                  alt={item.title}
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                  <div>{item.place}</div>
                  <FaCaretRight className="absolute-center" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Collection;
