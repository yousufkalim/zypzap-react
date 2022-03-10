import React from "react";
import FollowSocialIcon from "../../assets/img/FollowSocialIcon.svg";
import FollowSocialIcon2 from "../../assets/img/FollowSocialIcon2.svg";
import FollowSocialIcon3 from "../../assets/img/FollowSocialIcon3.svg";

const FollowUs = () => {
  return (
    <>
      <div className="FollowUs">
        <div className="FollowUs_container">
          <h2 className="followUsH2">Suivez-nous sur les reseaux sociaux</h2>
          <div className="followSocialBox">
            <div className="followUs-box">
              <img src={FollowSocialIcon} alt="" className="followUsImg" />
              <div className="followSocialHeading">
                <p className="followSocialP">0</p>
                <p className="followSocialP2">Followers</p>
              </div>
            </div>
            <div className="followUs-box">
              <img src={FollowSocialIcon2} alt="" className="followUsImg" />
              <div className="followSocialHeading">
                <p className="followSocialP">0</p>
                <p className="followSocialP2">Likes</p>
              </div>
            </div>
            <div className="followUs-box">
              <img src={FollowSocialIcon3} alt="" className="followUsImg" />
              <div className="followSocialHeading">
                <p className="followSocialP">0</p>
                <p className="followSocialP2">Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
