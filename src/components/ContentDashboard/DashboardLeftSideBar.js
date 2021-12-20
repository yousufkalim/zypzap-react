import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
const DashboardLeftSideBar = ({
  items,
  activeButton,
  trigerOnClickEmpSideBtn,
}) => {
  console.log(activeButton);
  return (
    <>
      {items.map((item, i) => {
        const className = activeButton === item.name ? "dashboard" : "";
        return (
          <div
            key={item.course}
            onClick={trigerOnClickEmpSideBtn}
            className={`sidebar-course-opt ${className}`}
          >
            <div className="img-text-container">
              <img src={item.img} />
              {item.name}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DashboardLeftSideBar;
