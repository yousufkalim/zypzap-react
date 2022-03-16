import React from "react";
import FollowSocialIcon from "../../assets/img/FollowSocialIcon.svg";
import FollowSocialIcon2 from "../../assets/img/FollowSocialIcon2.svg";
import FollowSocialIcon3 from "../../assets/img/FollowSocialIcon3.svg";
import SocialIcon1 from "../../assets/img/SocialIcon1.svg";
import SocialIcon2 from "../../assets/img/SocialIcon2.svg";
import SocialIcon3 from "../../assets/img/SocialIcon3.svg";
import SocialIcon4 from "../../assets/img/SocialIcon4.svg";

const FollowUs = () => {
  return (
    <>
      <div className="FollowUs">
        <div className="FollowUs_container">
          <h2 className="followUsH2">Suivez-nous sur les reseaux sociaux</h2>
          <div className="followSocialBox">
            {/* this */}
            <div className="followDiv">
              <div className="followUs-box2">
                <img src={SocialIcon1} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">0</p>
                  <p className="followSocialP2">Membres</p>
                </div>
              </div>
              <div className="followUs-box2">
                <img src={SocialIcon2} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">0</p>
                  <p className="followSocialP2">Followers</p>
                </div>
              </div>
            </div>
            {/* this */}
            <div className="followDiv">
              <div className="followUs-box2">
                <img
                  src={SocialIcon3}
                  alt=""
                  className="followUsImg"
                  style={{ marginTop: "7px" }}
                />
                <div className="followSocialHeading2">
                  <p className="followSocialP" style={{ marginTop: "7px" }}>
                    0
                  </p>
                  <p className="followSocialP2">Followers</p>
                </div>
              </div>
              <div className="followUs-box2">
                <img src={SocialIcon4} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">0</p>
                  <p className="followSocialP2">Likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
