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
import ContentRequest from "../components/PopupForms/ContentRequest";
import { Store, UpdateStore } from "../StoreContext";
import api from "../api";
import { useHistory } from "react-router-dom";

export default function Body({ setOpenSignup }) {
  const [loading, setLoading] = useState(false);
  const [openContentRequest, setOpenContentRequest] = useState(false);
  const updateStore = UpdateStore();
  const history = useHistory();
  const { courses, user, topRatedContentCreator } = Store();

  let getTopCourses = async () => {
    setLoading(true);
    let res = await api("get", "/courses");
    if (res) {
      updateStore({ courses: res?.data });
    }
    setLoading(false);
  };
  let getTopRatedContentCreator = async () => {
    let res = await api("get", "/creators/topRatedCreator");
    if (res) {
      console.log("res.data c", res?.data);
      updateStore({ topRatedContentCreator: res?.data });
    }
  };
  console.log("topRatedContentCreator", topRatedContentCreator);
  useEffect(() => {
    // get top courses
    getTopCourses();
    getTopRatedContentCreator();
  }, []);
  const handleviewTopCourses = () => {
    history.push({
      pathname: "/searchResult",
      param: {
        name: "Top 10 Games",
        value: "1"
      }
    });
  };
  return (
    <>
      <ContentRequest
        openContentRequest={openContentRequest}
        setOpenContentRequest={setOpenContentRequest}
      />
      {loading ? (
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
            {user ? (
              <button
                className="textonImgbutton"
                // onClick={() => setOpenSignup(true)}
                onClick={handleviewTopCourses}
              >
                Explore Courses
              </button>
            ) : (
              <button
                className="textonImgbutton"
                onClick={() => setOpenSignup(true)}
              >
                Sign Up For Free
              </button>
            )}
          </div>
          <TopCourses courses={courses} user={user} />
          <LatestCourses courses={courses} user={user} />
          <TopRatedContent topRatedContentCreator={topRatedContentCreator} />
          <Request
            openContentRequest={openContentRequest}
            setOpenContentRequest={setOpenContentRequest}
            user={user}
          />
          {/* x */}
          {/* <RankingList /> */}
          {/* <Blog /> */}
        </div>
      )}
    </>
  );
}
