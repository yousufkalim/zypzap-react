import React from "react";
import OverViewImg from "../../assets/img/OverviewImg.svg";
import OverViewCardImg from "../../assets/img/OverViewCardImg.svg";
import overViewIcon1 from "../../assets/icons/overViewIcon1.svg";
import overViewIcon2 from "../../assets/icons/overViewIcon2.svg";
import overViewIcon3 from "../../assets/icons/overViewIcon3.svg";
import overViewIcon4 from "../../assets/icons/overViewIcon4.svg";
import OverCardLogo1 from "../../assets/icons/OverCardLogo1.svg";
import OverCardLogo2 from "../../assets/icons/OverCardLogo2.svg";
import OverCardLogo3 from "../../assets/icons/OverCardLogo3.svg";
import OverCardHurtLogo from "../../assets/icons/OverCardHurtLogo.svg";
import OverCardSocialIcon1 from "../../assets/icons/OverCardSocialIcon1.svg";
import OverCardSocialIcon2 from "../../assets/icons/OverCardSocialIcon2.svg";
import OverCardSocialIcon3 from "../../assets/icons/OverCardSocialIcon3.svg";
import { NavLink } from "react-router-dom";

const OverViewHome = () => {
  return (
    <>
      <div className="OverView">
        <div className="center_overViewDiv">
          <div className="overViewImage">
            <img className="overIMG" src={OverViewImg} alt="" />
          </div>
          <div className="overView_heading">
            <div className="overViewContent">
              <h1 className="overViewH1">Beat the Opponent CS-GO Gameplay</h1>
              <p className="overViewP">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit
                amet, consectetur adipiscing
              </p>
            </div>
            <div className="overViewTags">
              <li className="overViewLi">
                <img src={overViewIcon1} alt="" className="overViewIcon-1" />
                <p className="overViewIconP">10 Weeks</p>
              </li>
              <li className="overViewLi">
                <img src={overViewIcon2} alt="" className="overViewIcon" />
                <p className="overViewIconP">All Levels</p>
              </li>
              <li className="overViewLi">
                <img src={overViewIcon3} alt="" className="overViewIcon" />
                <p className="overViewIconP">8 Lessons</p>
              </li>
              <li className="overViewLi">
                <img src={overViewIcon4} alt="" className="overViewIcon" />
                <p className="overViewIconP">2287 Students</p>
              </li>
            </div>
          </div>

          {/* ratting div */}
          <div className="overViewCard">
            <div className="overViewCenterdiv">
              <div className="overViewCarImage">
                <img src={OverViewCardImg} alt="" className="overViewCardIMG" />
              </div>
              <div className="overViewBuy">
                <div className="overViewRateContent">
                  <p className="cardP1">$19.99</p>
                  <p className="cardP2">$39.99</p>
                  <img src={OverCardHurtLogo} alt="" className="cardHurtLogo" />
                </div>
                <NavLink to="#" className="CardBuyBtn">
                  Buy
                </NavLink>
                <NavLink to="#" className="CardBuyBtn2">
                  Stock It In The Caddy
                </NavLink>
              </div>
              <div className="overViewCard-content">
                <p className="overViewCard-contentP">The course includes</p>
                <li className="overContentLi">
                  <img
                    src={OverCardLogo1}
                    alt=""
                    className="overContentLiLogo"
                  />
                  Language
                </li>
                <li className="overContentLi">
                  <img
                    src={OverCardLogo2}
                    alt=""
                    className="overContentLiLogo"
                  />
                  Use on desktop, tablet & mobile
                </li>
                <li className="overContentLi">
                  <img
                    src={OverCardLogo3}
                    alt=""
                    className="overContentLiLogo"
                  />
                  Lifetime access
                </li>
                <p className="overViewCard-contentP">Share this course</p>
              </div>
              <div className="overViewSocialIcon">
                <img
                  src={OverCardSocialIcon1}
                  alt=""
                  className="overSocialIcon"
                />
                <img
                  src={OverCardSocialIcon2}
                  alt=""
                  className="overSocialIcon"
                />
                <img
                  src={OverCardSocialIcon3}
                  alt=""
                  className="overSocialIcon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverViewHome;
