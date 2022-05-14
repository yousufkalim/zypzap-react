import React from "react";
import Checkbox from "@mui/material/Checkbox";

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
            <span className="categories-tegs">
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              &nbsp;{item.name}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default GameType;
