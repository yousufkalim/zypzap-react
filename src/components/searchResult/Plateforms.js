import React from "react";
import Checkbox from "@mui/material/Checkbox";

const Plateforms = ({
  PlateformsAry,
  PlateformsBtn,
  trigerOnClickEmpSideBtn3,
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

export default Plateforms;
