import React, { useState } from "react";
import trendinglogo from "../../assets/img/trendinglogo.png";

import cn from "classnames";

const VerticalCarousel = ({ data }) => {
  console.log("data is", data.length);
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 70;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };
  const hadleClickonlogo = (item, i) => {
    console.log("logo", item);
    setActiveIndex(i);
  };

  return (
    <div className="trendingDiv">
      <section className="outer-container">
        <div className="carousel-wrapper">
          <div className="trendingHeadingDiv">
            <div className="dashDiv"></div>
            <h2>NFT Games</h2>
          </div>
          {/* <button
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick("prev")}
          >
            Prev
          </button> */}

          <div className="carousel">
            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <div
                    onClick={() => hadleClickonlogo(item, i)}
                    className={cn("carousel-item trendinglogoDiv2", {
                      thisactive: activeIndex === i,
                      active: activeIndex === i,

                      visible:
                        Math.abs(determinePlacement(i)) <=
                        visibleStyleThreshold,
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`,
                    }}
                  >
                    <img className="imglogocarosal" src={item.img} />
                    <div className="trendingLogoText1">{item.heading}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="carousel-button next"
            onClick={() => handleClick("next")}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default VerticalCarousel;
