// Init
import React, { useState, useEffect } from "react";
import Bodyimg from "../assets/img/Bodyimg.svg";
import BodyBlurimg from "../assets/img/bodyblur.png";
import TopCourses from "./TopCourses";
import LatestCourses from "./LatestCourses";
import TopRatedContent from "./TopRatedContent";
import Request from "./Request";
import RankingList from "./RankingList";
import Blog from "./Blog";
import { Store, UpdateStore } from "../StoreContext";
import api from "../api";
export default function Body({ setOpenSignup }) {
  const [loading, setLoading] = useState(false);
  const updateStore = UpdateStore();
  const { courses, user } = Store();
  let getTopCourses = async () => {
    let res = await api("get", "/courses");
    if (res) {
      updateStore({ courses: res?.data });
    }
    setLoading(true);
    console.log("user", user);
  };
  useEffect(() => {
    // get top courses
    getTopCourses();
  }, []);
  return (
    <>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="Bodycontainer">
          <img
            src={Bodyimg}
            alt="img"
            className="bodyImage"
            style={{ position: "relative" }}
          />

          <div className="textonImg">
            <h1 className="textimgH1">
              We help you becoming
              <br /> a pro player
            </h1>
            <p className="textonImgP">For players who want more</p>
            <button
              className="textonImgbutton"
              onClick={() => setOpenSignup(true)}
            >
              Sign Up For Free
            </button>
          </div>
          {console.log("Courses", courses)}
          <TopCourses courses={courses} />
          <LatestCourses courses={courses} />
          <TopRatedContent />
          <Request />
          <RankingList />
          <Blog />
        </div>
      )}
    </>
  );
}
