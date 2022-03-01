import React from "react";

const MyProfile = () => {
  let gametypebtn = [
    { name: "Action" },
    { name: "Adventure" },
    { name: "Multiplayer game" },
    { name: "Car Racing" },
    { name: "FPS" },
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
          {/* heading */}
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
          {/* heading */}
          <div className="Bio-container">
            {/* group button */}

            <div className="userButtonGroup">
              <p className="userButton-heading">Favourite Games</p>
              <div className="profile-allButtons">
                <button className="userTagsAllButton">Fortnite</button>
                <button className="userTagsAllButton">GTA V</button>
                <button className="userTagsAllButton">Call Of Duty</button>
              </div>
            </div>
            {/* group button */}
            {/* group button */}

            <div className="userButtonGroup">
              <p className="userButton-heading">Game type</p>
              <div className="profile-allButtons">
                {gametypebtn.map((tegs) => (
                  <button className="userTagsAllButton">{tegs.name}</button>
                ))}
              </div>
            </div>
            {/* group button */}
            {/* group button2 */}
            <div className="userButtonGroup">
              <p className="userButton-heading">Gaming Plateforms</p>
              <div className="profile-allButtons">
                <div className="profile-allButtons">
                  {gametypebtn2.map((tegs2) => (
                    <button className="userTagsAllButton">{tegs2.name}</button>
                  ))}
                </div>
              </div>
            </div>
            {/* group button2 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
