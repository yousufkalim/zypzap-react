import React from "react";

const MyProfileData = ({ user, btnTags, gametypebtn, gametypebtn2, seta }) => {
  return (
    <div>
      <div className="profile-headings">
        <span className="profile-bioP">Bio</span>
        <p className="MyProfileP">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis,Lorem ipsum dolor sit amet,
          consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
          adipiscing elit ut aliquam, purus sit amet luctus venenatis,Lorem
          ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit
          amet, */}
        </p>
      </div>
      <div className="Bio-container">
        <div className="userButtonGroup">
          <p className="userButton-heading">Favourite Games</p>
          <div className="profile-allButtons">
            {user?.role == "Creator" &&
              (user?.expertiseGame
                ? user.expertiseGame.map((tegs, i) => (
                    <button key={i} className="activetypebtn">
                      {tegs}
                    </button>
                  ))
                : "No favourit Courses")}
            {user?.role == "User" &&
              (user?.prefrence_games?.favourite_games
                ? user.prefrence_games.favourite_games.map((tegs, i) => (
                    <button key={i} className="activetypebtn">
                      {tegs}
                    </button>
                  ))
                : "No favourit Courses")}
          </div>
        </div>
        <div className="userButtonGroup">
          <p className="userButton-heading">Game type</p>
          <div className="profile-allButtons">
            {user?.gameType.map((tegs, i) => (
              <button key={i} className="activetypebtn">
                {tegs}
              </button>
            ))}
          </div>
        </div>
        <div className="userButtonGroup">
          <p className="userButton-heading">Gaming Plateforms</p>
          <div className="profile-allButtons">
            <div className="profile-allButtons">
              {user?.plateForm?.map((tegs2, i) => (
                <button key={i} className="activetypebtn">
                  {tegs2}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileData;
