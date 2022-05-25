import React, { useState, useEffect } from "react";
import api from "../../api";
import Gamers from "../../assets/img/Gamers.svg";
import Creators from "../../assets/img/Creators.svg";
import MobileGame from "../../assets/img/MobileGame.svg";
import DisplayCourse from "../../assets/img/DisplayCourse.svg";

const JoinedUs = () => {
  const [allMembers, setAllMembers] = useState(0);
  const [allCreator, setAllCreator] = useState(0);

  useEffect(() => {
    setMembers();
    setCreator();
  }, []);
  const setMembers = async () => {
    let res = await api("get", "/newsletters/all");
    if (res) {
      setAllMembers(res.data.allMembers);
    }
  };

  const setCreator = async () => {
    let res = await api("get", "/newsletters/creator");
    if (res) {
      setAllCreator(res.data.totalCreator);
    }
  };
  return (
    <div>
      {" "}
      <div className="FollowUs">
        <div className="FollowUs_container">
          <h2 className="followUsH2-div2">Ils nous ont rejoint</h2>
          <div className="followSocialBox">
            <div1 className="followDiv">
              <div className="followUs-box2">
                <img src={Gamers} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">{allMembers ? allMembers : 0}</p>
                  <p className="followSocialP2">Membres</p>
                </div>
              </div>
              <div className="followUs-box2">
                <img src={Creators} alt="" className="followUsImg" />
                <div className="followSocialHeading2">
                  <p className="followSocialP">{allCreator ? allCreator : 0}</p>
                  <p className="followSocialP2">Createurs</p>
                </div>
              </div>
            </div1>
            <div className="followDiv">
              <div className="followUs-box2">
                <img
                  src={MobileGame}
                  alt=""
                  className="followUsImg"
                  style={{ marginTop: "7px" }}
                />
                <div className="followSocialHeading2">
                  <p className="followSocialP" style={{ padding: "6px" }}>
                    0
                  </p>
                  <p className="followSocialP2">Jeux traités</p>
                </div>
              </div>
              <div className="followUs-box2">
                <img src={DisplayCourse} alt="" className="followUsImg" />
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
