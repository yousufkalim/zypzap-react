// Init
import React from "react";
import Grid from "@material-ui/core/Grid";
import Maylike5 from "../../assets/img/maylike5.png";
import Maylike6 from "../../assets/img/maylike6.png";
import Maylike7 from "../../assets/img/maylike7.png";
import Maylike8 from "../../assets/img/maylike8.png";
import { Link } from "react-router-dom";

export default function YouMayLike({ blogs, loading }) {
  let newblog = [];
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
  const getblogs = () => {
    newblog = [...blogs];
    return newblog;
  };
  return (
    <div className="articleyouMayLikecontainer">
      <p className="youMayLikeheading">You may Like this:</p>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container spacing={1}>
          {getblogs()
            ?.slice(3, 6)
            .map((item, i) => (
              <>
                <Grid item xs={12} sm={4}>
                  <>
                    <div className="blogdiv1">
                      <img
                        src={process.env.REACT_APP_baseURL + item.blog_images}
                        className="blogdivimg"
                        alt="img"
                      />
                      <div className="blogdiv1text">
                        <h3 className="blogdiv1heading">{item.blog_title}</h3>
                        <p className="bloddiv1detail">
                          {item?.blog_desc.length > 186
                            ? item?.blog_desc.substring(0, 186) + ".."
                            : item?.blog_desc}
                        </p>
                        <p>
                          <Link
                            // to={`blog/${item._id}`}
                            style={{ textDecoration: "none", color: "white" }}
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
