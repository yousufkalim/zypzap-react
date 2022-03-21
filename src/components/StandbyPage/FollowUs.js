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
                {/* <a href="" className="followUsLinks"> */}
                <img src={SocialIcon1} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">0</p>
                  <p className="followSocialP2">Membres</p>
                </div>
                {/* </a> */}
              </div>
              <div className="followUs-box2">
                <a
                  href="https://twitter.com/ZypZap_com"
                  target="_blank"
                  className="followUsLinks"
                >
                  <img src={SocialIcon2} alt="" className="followUsImg" />
                  <div className="followSocialHeading2">
                    <p className="followSocialP">0</p>
                    <p className="followSocialP2">Followers</p>
                  </div>
                </a>
              </div>
            </div>
            {/* this */}
            <div className="followDiv">
              <div className="followUs-box2">
                {/* <a href="" className="followUsLinks"> */}
                <button className="comming-soonBTn">Coming Soon</button>
                <img src={SocialIcon3} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP" style={{ marginTop: "0px" }}>
                    0
                  </p>
                  <p className="followSocialP2">Followers</p>
                </div>
                {/* </a> */}
              </div>
              <div className="followUs-box2">
                <a
                  href="https://www.facebook.com/zypzap.media"
                  target="_blank"
                  className="followUsLinks"
                >
                  <img src={SocialIcon4} alt="" className="followUsImg" />
                  <div className="followSocialHeading2">
                    <p className="followSocialP">0</p>
                    <p className="followSocialP2">Likes</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
