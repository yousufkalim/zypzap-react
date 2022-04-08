import React from "react";
import Course1 from "../../assets/img/course1.png";
import Course2 from "../../assets/img/course2.png";
import Course3 from "../../assets/img/course3.png";
import Course4 from "../../assets/img/course4.png";
import StarIcon from "@material-ui/icons/Star";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
import { Link } from "react-router-dom";

var items = [
  {
    title: "CS-GO Ep 2 Complete Course 1",
    img: Course1,
    name: "James Wiik",
    rating: "rating",
    price: "19.99 | 50 min",
    test: "1",
  },
  {
    title: "PUBG GamePlay Course",
    img: Course2,
    name: "Ifaf ghori",
    rating: "rating",
    price: "19.99 | 50 min",
    test: "2",
  },
  {
    title: "Taken 5 Fight Course",
    img: Course3,
    name: "Arslan Ash",
    rating: "rating",
    price: "19.99 | 50 min",
    test: "3",
  },
];

const Wishlist = () => {
  return (
    <div className="wishlistDiv">
      <h3 className="wishCardh3">Sarted Courses</h3>
      <div className="carousalOuterDiv2 ">
        {items.map((item, i) => (
          <Link to="#" className="requestBt2" course={item}>
            <a className="courseDetail2" key={i}>
              <div className="cardGrid2">
                <div className="wishCarImgDiv">
                  <img
                    src={item?.thumbnail ? item.thumbnail : Course1}
                    className="courseimg"
                    alt="img"
                  />
                </div>
                <div className="wishList-container">
                  <h4 className="wishListh4">CS-GO Ep 2 Complete Course</h4>
                  <br />
                  <p className="wishlistP">
                    {item?.course_name ? item.course_name : "Fight Course"}
                  </p>
                  <p className="wishlistP2">
                    {item?.creator?.user_id?.username}
                  </p>
                  <p className="wishlistP3">
                    {item?.rating ? item.rating : "0.0"} &nbsp;
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star1
                        className="wishCardStar"
                        style={{
                          key: { item },
                        }}
                      />
                    ))}
                    &nbsp;{" "}
                    {item?.student
                      ? item.student.length + " Student"
                      : 0 + "   Student"}
                  </p>
                  <p className="wishlistP4">{" $" + item?.price}</p>
                </div>
                <div className="wishButtonDiv">
                  <button className="wishListBtn">Continue the course</button>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
