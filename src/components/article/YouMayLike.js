// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import Maylike5 from "../../assets/img/maylike5.png";
import Maylike6 from "../../assets/img/maylike6.png";
import Maylike7 from "../../assets/img/maylike7.png";
import Maylike8 from "../../assets/img/maylike8.png";

export default function YouMayLike({ blogs }) {
  let data = [
    {
      heading: "Hitman 3",
      img: Maylike5,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
    {
      heading: "WWWe 2k21",
      img: Maylike6,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
    {
      heading: "Counter Strike Go",
      img: Maylike7,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
  ];
  return (
    <div className="articleyouMayLikecontainer">
      <p className="youMayLikeheading">You may Like this:</p>
      <Grid container spacing={1}>
        {data.map((item, i) => (
          <>
            <Grid item xs={12} sm={4}>
              <>
                <div className="blogdiv1">
                  <img src={item.img} className="blogdivimg" alt="img" />
                  <div className="blogdiv1text">
                    <h3 className="blogdiv1heading">{item.heading}</h3>
                    <p className="bloddiv1detail">{item.detail}</p>
                    <p>
                      <span className="seemore"> Read More</span>
                    </p>
                  </div>
                </div>
              </>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
}
