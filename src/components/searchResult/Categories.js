import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@mui/material/Checkbox";
// import { pink } from "@mui/material/colors";

const CustomColorCheckbox = withStyles({
  root: {
    color: "#fff",
    "&$checked": {
      color: " #5dcfa09c",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

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
              />
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
