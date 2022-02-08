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

  const getblogs = () => {
    newblog = [...blogs];
    const shuffled = newblog.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    return selected;
  };
  return (
    <div className="articleyouMayLikecontainer">
      <p className="youMayLikeheading">Lisez aussi</p>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container spacing={1}>
          {getblogs()?.map((item, i) => (
            <>
              <Grid item xs={12} sm={4}>
                <>
                  <div className="blogdiv1">
                    <Link
                      to={`${item._id}`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <img
                        src={process.env.REACT_APP_baseURL + item.blog_images}
                        className="blogdivimg"
                        alt="img"
                      />
                    </Link>
                    <div className="blogdiv1text">
                      <h3 className="blogdiv1heading">
                        {item.blog_title.length > 30
                          ? item.blog_title.substring(0, 30) + "..."
                          : item.blog_title}
                      </h3>
                      <p className="bloddiv1detail">
                        {item?.blog_desc.length > 186
                          ? item?.blog_desc.substring(0, 186) + ".."
                          : item?.blog_desc}
                      </p>
                      <p>
                        <Link
                          to={`${item._id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          {" "}
                          <span
                            className="seemore"
                            style={{ color: "#E7411B" }}
                          >
                            {" "}
                            Read More
                          </span>
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
