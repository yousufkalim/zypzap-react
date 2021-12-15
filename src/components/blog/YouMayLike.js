// Init
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Maylike1 from "../../assets/img/maylike1.png";
import Maylike2 from "../../assets/img/maylike2.png";
import Maylike3 from "../../assets/img/maylike3.png";
import Maylike4 from "../../assets/img/maylike4.png";
import Maylike5 from "../../assets/img/maylike5.png";
import Maylike6 from "../../assets/img/maylike6.png";
import Maylike7 from "../../assets/img/maylike7.png";
import Maylike8 from "../../assets/img/maylike8.png";
import { Link } from "react-router-dom";

export default function YouMayLike({ blogs, loading, setLoading }) {
  let newblog = [];
  let data = [
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
    {
      heading: "Dota 2 Valve",
      img: Maylike8,
      detail:
        "It is a long established fact that a reader will be distracted by the readable content of a page  this is when loovking at its layout game is best. The point of using Lorem Ipsum is that.",
      date: "December 17, 2021",
      By: " Moin Khan",
    },
  ];
  const getblogs = () => {
    newblog = [...blogs];
    return newblog;
  };
  return (
    <div className="youMayLikecontainer">
      <p className="youMayLikeheading">You may Like this:</p>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container spacing={1}>
          {getblogs()
            ?.slice(4, 8)
            .map((item) => (
              <>
                <Grid item xs={12} sm={3}>
                  <>
                    <div className="blogdiv1">
                      <img
                        src={process.env.REACT_APP_baseURL + item.blog_images}
                        className="blogdivimg"
                      />
                      <div className="blogdiv1text">
                        <h3 className="blogdiv1heading">
                          {item?.blog_title.length > 20
                            ? item?.blog_title.substring(0, 19) + "..."
                            : item?.blog_title}
                        </h3>

                        <p className="bloddiv1detail">
                          {item?.blog_desc.length > 147
                            ? item?.blog_desc.substring(0, 146) + ".."
                            : item?.blog_desc}
                        </p>
                        <p>
                          <Link
                            to={`blog/${item._id}`}
                            params={{ testvalue: "hello" }}
                            style={{ textDecoration: "none" }}
                          >
                            {" "}
                            <span className="seemore"> Read More</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </>
                </Grid>
              </>
            ))}
        </Grid>
      )}
    </div>
  );
}
