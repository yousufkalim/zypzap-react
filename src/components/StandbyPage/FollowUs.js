import React from "react";
import Discord from "../../assets/img/Discord.svg";
import Twitter from "../../assets/img/Twitter.svg";
import Reddit from "../../assets/img/Reddit.svg";
import Facebook from "../../assets/img/Facebook.svg";

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
                <a
                  href="https://discord.gg/GtsvfSV79U"
                  target="_blank"
                  className="followUsLinks"
                >
                  <img src={Discord} alt="" className="followUsImg" />
                  <div className="followSocialHeading2">
                    <p className="followSocialP">0</p>
                    <p className="followSocialP2">Membres</p>
                  </div>
                </a>
              </div>
              <div className="followUs-box2">
                <a
                  href="https://twitter.com/ZypZapCommunity"
                  target="_blank"
                  className="followUsLinks"
                >
                  <img src={Twitter} alt="" className="followUsImg" />
                  <div className="followSocialHeading2">
                    <p className="followSocialP">0</p>
                    <p className="followSocialP2">Followers</p>
                  </div>
                </a>
              </div>
            </div>
            {/* this */}
            {/* <div className="followDiv"> */}
            {/* <div className="followUs-box2"> */}
            {/* <a href="" className="followUsLinks"> */}
            {/* <button className="comming-soonBTn">Coming Soon</button>
                <img src={Reddit} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP" style={{ marginTop: "0px" }}>
                    0
                  </p>
                  <p className="followSocialP2">Followers</p>
                </div> */}
            {/* </a> */}
            {/* </div> */}
            {/* <div className="followUs-box2"> */}
            {/* <a
                  href="https://www.facebook.com/zypzap.media"
                  target="_blank"
                  className="followUsLinks"
                > */}
            {/* <button className="comming-soonBTn">Coming Soon</button>
                <img src={Facebook} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">0</p>
                  <p className="followSocialP2">Likes</p>
                </div> */}
            {/* </a> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
