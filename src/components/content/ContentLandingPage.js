import React from "react";
import Group9775 from "../../assets/Group9775.png";
import Rectangle from "../../assets/Rectangle.png";
const ContentLandingPage = () => {
  return (
    <>
      <div className="content_container">
        <img src={Group9775} className="content_Image" />
        <img src={Rectangle} className="blurIm" />
        <div className="textonImgcontent">
          <h1 className="textH1">
            Teach what you are
            <br /> good at
          </h1>
          <p className="textonP">For Gamers who want teach how to play</p>
          <button className="textonbutton">Create a Course</button>
        </div>
      </div>
    </>
  );
};
export default ContentLandingPage;
