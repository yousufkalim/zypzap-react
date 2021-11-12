import React from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";

const HappyInstructor = () => {
    var items = [
        {
          name: "PUBG gameplay full course1",
          description: "Probably the most random thing you have ever seen!",
        },
        {
          name: "Taken gameplay full course2",
          description: "Hello World!",
        },
        {
          name: "Speed3",
          description: "Hello World!",
          
        },
      ];
function Reviews({ item }) {
    return (
      <>
        <div className="reviewHeadings">
          <h1>
            What our users say
          </h1>
        </div>
        
      </>
    );
  }
    return (
        <>
    
    
          <Carousel
            autoPlay={false}
            // navButtonsAlwaysVisible={true}
            animation={"fade"}
            activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
            className="topcoursecarousal"
          >
            {items.map((item, i) => (
              <Reviews key={i} item={item} />
            ))}
          </Carousel>


        </>
    )
}

export default HappyInstructor


