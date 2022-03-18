import React from "react";
import JoinLogo1 from "../../assets/img/JoinLogo1.svg";
import JoinLogo2 from "../../assets/img/JoinLogo2.svg";
import JoinLogo3 from "../../assets/img/JoinLogo3.svg";
import JoinLogo4 from "../../assets/img/JoinLogo4.svg";

const JoinedUs = () => {
  return (
    <div>
      {" "}
      <div className="FollowUs">
        <div className="FollowUs_container">
          <h2 className="followUsH2">Ils nous ont rejoint</h2>
          <div className="followSocialBox">
            <div className="followDiv">
              <div className="followUs-box2">
                <img src={JoinLogo1} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">0</p>
                  <p className="followSocialP2">Membres</p>
                </div>
              </div>
              <div className="followUs-box2">
                <img src={JoinLogo2} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">0</p>
                  <p className="followSocialP2">Createurs</p>
                </div>
              </div>
            </div>
            <div className="followDiv">
              <div className="followUs-box2">
                <img
                  src={JoinLogo3}
                  alt=""
                  className="followUsImg"
                  style={{ marginTop: "7px" }}
                />
                <div className="followSocialHeading2">
                  <p className="followSocialP">0</p>
                  <p className="followSocialP2">Jeux traités</p>
                </div>
              </div>
              <div className="followUs-box2">
                <img src={JoinLogo4} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">0</p>
                  <p className="followSocialP2">Nombre de cours disponibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinedUs;
