import React from "react";
import Checkbox from "@mui/material/Checkbox";

const Level = ({
  PlateformsAry,
  PlateformsBtn,
  trigerOnClickEmpSideBtn3,
  change,
  name,
  value,
}) => {
  return (
    <>
      {PlateformsAry.map((item) => {
        const className = PlateformsBtn === item.name ? "active" : "";
        return (
          <div
            onClick={trigerOnClickEmpSideBtn3}
            key={item.name}
            className={`categories-text ${className}`}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <span className="categories-tegs">
              <Checkbox
                inputProps={{ "aria-label": "controlled" }}
                name={name}
                value={item.name}
                checked={item.name === value}
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

export default Level;
