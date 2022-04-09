import React from "react";
import ArslanAshIMG from "../../assets/img/ArslanAshIMG.svg";
import Course2 from "../../assets/img/course2.png";
import { ReactComponent as Star1 } from "../../assets/icons/star2.svg";
import { Link } from "react-router-dom";

var items = [
  {
    title: "CS-GO Ep 2 Complete Course 1",
    img: ArslanAshIMG,
    name: "James Wiik",
    rating: "5.0",
    // price: "19.99 | 50 min",
    test: "1",
  },
  {
    title: "PUBG GamePlay Course",
    img: Course2,
    name: "Ifaf ghori",
    rating: "rating",
    // price: "19.99 | 50 min",
    test: "2",
  },
];

const MyWallet = () => {
  return (
    <>
      <div className="followList">
        <div className="followCenerDiv">
          {/* div col 1 */}
          <div className="followCol1">
            <div className="followerNames">
              <h3 className="followH3">Arslan</h3>
              <p className="follow-P">5 result Found</p>
            </div>
            <div className="followDrowDown">
              <select
                name="cars"
                id="cars"
                style={{ border: "none", background: "none", color: "white" }}
              >
                <option value="volvo">Sort By</option>
                <option value="saab">Sort By</option>
                <option value="opel">Sort By</option>
                <option value="audi">Sort By</option>
              </select>
            </div>
          </div>
          {/* div col 2 */}
          <div className="followCol2">
            <div1 className="following-div ">
              {items.map((item, i) => (
                <Link to="#" className="following-link" course={item}>
                  <a className="followingAnker" key={i}>
                    <div className="following-card">
                      <div className="followingImgDiv">
                        <img
                          src={item?.thumbnail ? item.thumbnail : ArslanAshIMG}
                          className="followingIMG"
                          alt="img"
                        />
                      </div>
                      <div className="following-container">
                        <p className="followingh4">Arslan Ash</p>

                        <p className="following_P">
                          {item?.course_name
                            ? item.course_name
                            : "fighting game player of Tekken"}
                        </p>
                        <p className="followingP2">
                          {item?.creator?.user_id?.username}
                        </p>
                        <p className="followingP3">
                          {item?.rating ? item.rating : "0.0"} &nbsp;
                          {[1, 2, 3, 4, 5].map((item) => (
                            <Star1
                              className="wishCardStar"
                              style={{
                                key: { item },
                              }}
                            />
                          ))}
                          <br />
                          {item?.student
                            ? item.student.length + "500000+ Students"
                            : "500000+ Students"}
                        </p>
                      </div>
                      <div className="followingButtonDiv">
                        <button className="followingBtn">Follow</button>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWallet;
