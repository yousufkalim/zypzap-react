import React from "react";
import Mesa from "../../assets/Mesa.png";
import Lcd from "../../assets/Lcd.png";
import GiftBox from "../../assets/GiftBox.png";
const WhyData = (props) => {
  return (
    <>
      <div className="why_box">
        <div
          className="col_1"
          style={{
            textAlign: "left",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <div className="box">
            <h2 className="boxh2">{props.heading}</h2>
            <p className="boxp">{props.pera}</p>
            <p className="boxp">{props.pera2}</p>
          </div>
        </div>
        <div className="box1">
          <img
            className="img1"
            src={Mesa}
            alt=""
            style={{ paddingTop: "50px" }}
          />
        </div>
      </div>
      <div className="why_box">
        <div className="col_2">
          <div className="box2">
            <img
              className="img2"
              src={Lcd}
              alt=""
              style={{ paddingTop: "50px" }}
            />
          </div>
        </div>
        <div className="box2">
          <h2 className="boxh2">Inspire Learners</h2>
          <p className="boxp">{props.pera}</p>
          <p className="boxp">{props.pera2}</p>
        </div>
      </div>
      <div className="why_box">
        <div
          className="col_3"
          style={{
            textAlign: "left",
            paddingLeft: "0px",
            paddingRight: "200px",
          }}
        >
          <div className="box3">
            <h2 className="boxh2">Get Rewarded</h2>
            <p className="boxp">{props.pera}</p>
            <p className="boxp">{props.pera2}</p>
          </div>
        </div>
        <div className="box3">
          <img
            className="img3"
            src={GiftBox}
            alt=""
            style={{ paddingLeft: "80px", width: "120%", paddingTop: "50px" }}
          />
        </div>
      </div>
    </>
  );
};
export default WhyData;
