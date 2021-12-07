import React from "react";
import Contentimg2 from "../../assets/contentimg2.png";

const ContentLandingPage = ({
  openBecomeCreatorPopup,
  setOpenBecomeCreatorPopup,
}) => {
  return (
    <>
      <div className="content_container">
        <img src={Contentimg2} className="content_Image" />

        <div className="textonImgcontent">
          <h1 className="textH1">
            Teach what you are
            <br /> good at
          </h1>
          <p className="textonP">For Gamers who want teach how to play</p>
          <button
            className="textonbutton"
            onClick={() => setOpenBecomeCreatorPopup(true)}
          >
            Create a Course
          </button>
        </div>
      </div>
    </>
  );
};
export default ContentLandingPage;
