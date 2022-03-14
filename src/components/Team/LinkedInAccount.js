import React from "react";
import ValenImg from "../../assets/img/ValenImg.png";
import ValenImg2 from "../../assets/img/ValenImg2.png";
import ValenImg3 from "../../assets/img/ValenImg3.png";
import ValenImg4 from "../../assets/img/ValenImg4.png";
import ValenImg5 from "../../assets/img/ValenImg5.png";
import ValenBg from "../../assets/img/ValenBg.svg";

const teamLeft = [
  {
    imgSrc: ValenImg,
    h3Heading: "Valentin",
    pHeading: "CEO",
    btns: "in",
  },
  {
    imgSrc: ValenImg2,
    h3Heading: "Frederic",
    pHeading: "COO",
    btns: "in",
  },
  {
    imgSrc: ValenImg3,
    h3Heading: "Thomas",
    pHeading: "CMO",
    btns: "in",
  },
  {
    imgSrc: ValenImg4,
    h3Heading: "Blawal",
    pHeading: "CIO",
    btns: "in",
  },
  {
    imgSrc: ValenImg5,
    h3Heading: "Zain",
    pHeading: "CTO",
    btns: "in",
  },
];

const LinkedInAccount = () => {
  return (
    <div>
      <div className="LinkedInAcound">
        <div className="LinkedInAcound-cenerDiv">
          <div className="LinkedInAcound-col1">
            {teamLeft.map((crntVal) => {
              return (
                <>
                  <div className="linded-box">
                    <img
                      src={crntVal.imgSrc}
                      alt=""
                      className="LinkedInAcoundIMG"
                    />
                    <div className="LinkedInAcound-img-content">
                      <h3 className="LinkedInAcoundH3">{crntVal.h3Heading}</h3>
                      <p className="LinkedInAcoundP">{crntVal.pHeading}</p>
                      <button className="LinkedInAcoundButton">
                        {crntVal.btns}
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="LinkedInAcound-col2">
            <img src={ValenBg} alt="" className="LinkedInAcound_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInAccount;
