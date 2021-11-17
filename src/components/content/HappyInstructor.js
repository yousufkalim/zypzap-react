import React from "react";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import happypic from "../../assets/happypic.png";
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
        <div className="happy_container">
          <div className="happy_box">
            <div className="happy_col1">
              <h2>Happy Instructor</h2>
              <p className="hapy_pera">
                Lorem ipsum dolor sit, amet consectetur{" "}
              </p>
              <p className="hapy_pera">Lorem ipsum dolor consectetur</p>
            </div>
            <div className="happy_col2">
              <img src={happypic} alt="My Pic" />
              <h3>javari williams</h3>
              {/* <br /> */}
              <p>Lorem, ipsum.</p>
              <br />
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus doloribus facilis laboriosam maiores ut non? Nemo
                consequuntur minima vitae, totam corporis molestias aliquid
                quibusdam sed ipsum optio modi reprehenderit. Minus.Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Voluptatibus
                doloribus facilis laboriosam maiores ut non? Nemo consequuntur
                minima vitae, totam corporis molestias aliquid quibusdam sed
                ipsum optio modi reprehenderit. Minus.
              </span>
            </div>
          </div>
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
        className="topcoursecarousal2"
      >
        {items.map((item, i) => (
          <Reviews key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};
export default HappyInstructor;
