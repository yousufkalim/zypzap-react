import React from "react";

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
            <span>{item.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default Plateforms;
