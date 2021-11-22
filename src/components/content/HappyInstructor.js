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
              <h2 className="happy_col1h2">Happy Instructor</h2>
              <p className="happy_col1p">
                Feedback from these happy customers <br />
                helps us in reaching the heights
              </p>
            </div>
            <div className="happy_col2">
              <img className="happy_col2img" src={happypic} alt="MyPic" />
              <h3 className="happy_col2h3">Jenny Wilson</h3>
              <p className="happy_col2p">Game Player</p>
              <br />
              <span className="happy_col2span">
                We had an incredible experience working with Landify and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the product concept so
                quickly. It acted as a catalyst to take our design to the next
                level and get more eyes on our product.
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
