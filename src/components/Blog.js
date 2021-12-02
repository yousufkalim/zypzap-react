// Init
import React from "react";

import Maylike1 from "../assets/img/maylike1.png";
import Maylike2 from "../assets/img/maylike2.png";
import Maylike3 from "../assets/img/maylike3.png";
import Maylike4 from "../assets/img/maylike4.png";

import "react-multi-carousel/lib/styles.css";
import Grid from "@material-ui/core/Grid";

export default function TopRatedContent() {
  let items = [
    {
      heading: "Call of Duty || 2021",
      img: Maylike1,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: "Baig Irfan",
    },
    {
      heading: "Gears of War",
      img: Maylike2,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
    {
      heading: "Uncharted Amoung Thieves",
      img: Maylike3,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
    {
      heading: "Kill Zone 2",
      img: Maylike4,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
  ];
  return (
    <div className="blogcontainer">
      <div className="blogHeadingDiv">
        <p className="blogheading">Blog</p>
        <p className="blogheading">View All</p>
      </div>
      <div className="blogGridOuterDiv">
        <Grid container spacing={4} style={{ width: "auto" }}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={3}>
              <>
                <div className="blogdiv1">
                  <img src={item.img} className="blogdivimg" />
                  <div className="blogdiv1text">
                    <h3 className="blogdiv1heading">
                      {item?.heading.length > 25
                        ? item?.heading.substring(0, 22) + "..."
                        : item?.heading}
                    </h3>

                    <p className="bloddiv1detail">
                      {item?.detail.length > 147
                        ? item?.detail.substring(0, 146) + ".."
                        : item?.detail}
                    </p>
                    <p>
                      {" "}
                      <span className="seemore"> Read More</span>
                    </p>
                  </div>
                </div>
              </>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
