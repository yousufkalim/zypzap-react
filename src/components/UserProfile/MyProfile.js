import React, { useState, useEffect } from "react";
const MyProfile = (props) => {
  const { user } = props;
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

  return (
    <>
      <div className="myProfile">
        <div className="myProfile-CenterDiv">
          <p className="myProfileName">My Profile</p>

          <div className="profile-headings">
            <span className="profile-bioP">Bio</span>
            <p className="MyProfileP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis,Lorem ipsum dolor sit
              amet, consectetur adipiscing Lorem ipsum dolor sit amet,
              consectetur adipiscing elit ut aliquam, purus sit amet luctus
              venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing Lorem
              ipsum dolor sit amet,
            </p>
          </div>
          <div className="Bio-container">
            <div className="userButtonGroup">
              <p className="userButton-heading">Favourite Games</p>
              <div className="profile-allButtons">
                {user?.role == "Creator" &&
                  (user?.expertiseGame
                    ? user.expertiseGame.map((tegs) => (
                        <button className="activetypebtn">{tegs}</button>
                      ))
                    : "No favourit Courses")}
                {user?.role == "user" &&
                  (user?.prefrence_games?.favourite_games
                    ? user.prefrence_games.favourite_games.map((tegs) => (
                        <button className="activetypebtn">{tegs}</button>
                      ))
                    : "No favourit Courses")}
              </div>
            </div>
            <div className="userButtonGroup">
              <p className="userButton-heading">Game type</p>
              <div className="profile-allButtons">
                {user?.gameType.map((tegs) => (
                  <button className="activetypebtn">{tegs}</button>
                ))}
              </div>
            </div>
            <div className="userButtonGroup">
              <p className="userButton-heading">Gaming Plateforms</p>
              <div className="profile-allButtons">
                <div className="profile-allButtons">
                  {user?.plateForm?.map((tegs2) => (
                    <button className="activetypebtn">{tegs2}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
