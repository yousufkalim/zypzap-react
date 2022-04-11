import React, { useState } from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
const DashboardLeftSideBar2 = ({
  items,
  activeButton,
  trigerOnClickEmpSideBtn,
  setDefaultCompStatedrop,
}) => {
  const [flag, setFlag] = useState(false);

  const handelClick = () => {
    setFlag(!flag);
  };
  const handleClick2 = (i) => {
    console.log(i, "------->i");
    setDefaultCompStatedrop(i);
  };

  return (
    <>
      {items.map((item, i) => {
        const className = activeButton === item.name ? "dashboard" : "";
        return (
          <>
            <div
              key={item.course}
              onClick={trigerOnClickEmpSideBtn}
              className={`sidebar-course-opt ${className}`}
            >
              <div className="img-text-container">
                <img src={item.img} />
                {item.name}
                {item?.drop && (
                  <div style={{ color: "white" }} onClick={() => handelClick()}>
                    <i
                      style={{ marginLeft: "100px" }}
                      class="fa-solid fa-angle-down"
                    ></i>
                  </div>
                )}
              </div>
            </div>
            {/* {flag === item?.} */}
            <div>
              {item?.drop && flag && (
                <div>
                  {item.drop.map((i) => (
                    <div
                      style={{
                        marginLeft: "40px",
                        paddingBottom: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClick2(i)}
                    >
                      {i}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* <div>
              {item?.drop2 && (
                <div>
                  {item.drop2.map((i) => (
                    <div
                      style={{
                        marginLeft: "30px",
                        opacity: "0.5",
                        cursor: "pointer",
                      }}
                      // onClick={() => handleClick2(i)}
                    >
                      {i}
                    </div>
                  ))}
                </div>
              )}
            </div> */}
          </>
        );
      })}
    </>
  );
};

export default DashboardLeftSideBar2;
