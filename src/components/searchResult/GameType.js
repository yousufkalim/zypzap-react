import React from "react";
import Checkbox from "@mui/material/Checkbox";

const GameType = ({
  GameTypes,
  gameBtn,
  trigerOnClickEmpSideBtn2,
  change,
  name,
  value,
}) => {
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
                // onChange={handleChange}
                name={name}
                value={item.name}
                checked={item.name === value}
                inputProps={{ "aria-label": "controlled" }}
                onChange={change}
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
