import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
const Categories = ({ categories, activeButton, trigerOnClickEmpSideBtn }) => {
  return (
    <>
      {categories.map((item) => {
        const className = activeButton === item.name ? "active" : "";
        return (
          <div
            onClick={() => trigerOnClickEmpSideBtn(item)}
            className={`categories-text ${className}`}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <span className="categories-tegs">
              <Checkbox
                className="categories-tegs2"

                // checked={checked}
                // onChange={handleChange}
                // inputProps={{ "aria-label": "controlled" }}
              />{" "}
              &nbsp;
              {item.name}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Categories;
