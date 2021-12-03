// Init
import React from "react";
import AboutLandingPageImg from "../../assets/img/aboutlandingpage2.png";
import Aboutimg from "../../assets/img/about02.png";
import WhoWeAre from "./WhoWeAre";

export default function About() {
  return (
    <>
      <div className="aboutcontainer">
        <div className="aboutimgcontainer">
          <img src={AboutLandingPageImg} className="aboutLeftimg" />
          <img src={Aboutimg} className="aboutRightimg" />
        </div>
        <div className="AbouttextonImg">
          <h1 className="AbouttextimgH1">About</h1>
          <p className="AbouttextonImgP">
            It is a long established fact that a reader will be distracted by
            the readable content of a page this is when loovking at its layout
            game is best. The point of using Lorem Ipsum is that.
          </p>
        </div>
      </div>
      <WhoWeAre />
    </>
  );
}
