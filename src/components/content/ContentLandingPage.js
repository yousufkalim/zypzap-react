import React, { useState, useEffect } from "react";
import Contentimg2 from "../../assets/contentimg2.png";

import { Link } from "react-router-dom";
import CreateYourCourse from "../ContentDashboard/courses/CreateYourCourse";
import { useHistory, useLocation } from "react-router-dom";

const ContentLandingPage = ({
  openBecomeCreatorPopup,
  setOpenBecomeCreatorPopup,
}) => {
  const history = useHistory();

  const openCourse = () => {
    history.push({ pathname: "/dashboard", state: { createCourse: true } });
  };

  return (
    <>
      <div className="content_container">
        <img src={Contentimg2} className="content_Image" />

        <div className="textonImgcontent">
          <h1 className="textH1">
            Teach what you are
            <br /> good at
          </h1>
          <p className="textonP">For Gamers who want teach how to play</p>{" "}
          <button
            className="textonbutton"
            // onClick={() => setOpenBecomeCreatorPopup(true)}
            onClick={openCourse}
          >
            Create a Course
          </button>{" "}
        </div>
      </div>
    </>
  );
};
export default ContentLandingPage;
