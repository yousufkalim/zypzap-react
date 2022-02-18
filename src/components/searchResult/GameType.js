import React from "react";

const GameType = ({ GameTypes, gameBtn, trigerOnClickEmpSideBtn2 }) => {
  return (
    <>
      {GameTypes.map((item) => {
        const className = gameBtn === item.name ? "active" : "";
        return (
          <div
            onClick={trigerOnClickEmpSideBtn2}
            key={item.name}
            className={`categories-text ${className}`}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <span>{item.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default GameType;
