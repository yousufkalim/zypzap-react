import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MyProfileData from "./MyProfileData";
import MyPrifileSetting from "./MyPrifileSetting";
const MyProfile = (props) => {
  const { user } = props;
  const [profileBtn, setProfileBtn] = useState(1);
  const [a, seta] = useState(false);
  let btnTags = [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Multiplayer game" },
    { name: "Car Racing" },
    { name: "FPS" },
    { name: "Simulation" },
    { name: "Sports" },
    { name: "Puzzle" },
    { name: "RPG" },
    { name: "RTS" },
  ];
  let gametypebtn = [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Multiplayer game" },
    { name: "Car Racing" },
    { name: "FPS" },
    { name: "Simulation" },
    { name: "Sports" },
    { name: "Puzzle" },
    { name: "RPG" },
    { name: "RTS" },
    { name: "Car Racing" },
  ];
  let gametypebtn2 = [
    { name: "Retro Consoles" },
    { name: "PS1/2/3/4/5" },
    { name: "Xbox/360/One/X" },
    { name: "Mobile Games" },
    { name: "Portable Consoles" },
    { name: "PC" },
  ];

  const handeClick = (i) => {
    setProfileBtn(i);
  };

  return (
    <>
      <div className="myProfile">
        <div className="myProfile-CenterDiv">
          <div className="myPofileContents myProfileName">
            <NavLink
              exact
              activeClassName="active_profile"
              to="#"
              className={profileBtn == 1 ? "myProfileNames" : null}
              onClick={() => handeClick(1)}
            >
              My Profile
            </NavLink>
            <NavLink
              activeClassName="active_profile"
              to="#"
              className={profileBtn == 2 ? "myProfileNames" : null}
              onClick={() => handeClick(2)}
            >
              Setting
            </NavLink>
          </div>
          {profileBtn == 1 ? (
            <>
              <MyProfileData
                user={user}
                btnTags="btnTags"
                gametypebtn="gametypebtn"
                gametypebtn2="gametypebtn2"
                seta="seta"
              />
            </>
          ) : (
            <></>
          )}
          {profileBtn == 2 ? (
            <>
              <MyPrifileSetting />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default MyProfile;
