import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DashboardLeftSideBar2 from "./DashboardLeftSideBar2";
import DashboardRightSideBar2 from "./DashboardRightSideBar2";
import settings from "../../assets/img/settings.png";
import dollar from "../../assets/img/dollar.png";
import performance from "../../assets/img/performance.png";
import youtube from "../../assets/img/youtube.png";
import ProgressionIcon from "../../assets/img/ProgressionIcon.svg";
import { Store, UpdateStore } from "../../StoreContext";

import api from "../../api";
const Dashboard2 = ({ id }) => {
  const { creator } = Store();
  const updateStore = UpdateStore();
  const [activeButton, setActiveButton] = useState("Course");
  const [defaultCompState, setDefaultCompState] = useState("Course");
  const [defaultCompStatedrop, setDefaultCompStatedrop] = useState("");
  const [createCourse, setcreateCourse] = useState(false);
  const [games, setGames] = useState();
  useEffect(() => {
    getGames();
    // getCreator();
  }, []);
  const getCreator = async () => {
    let res = await api("get", `/creators/${creator._id}`);
    if (res) {
      updateStore({ creator: res.data });
    }
  };
  const getGames = async () => {
    let res = await api("get", `/games/`);
    if (res) {
      updateStore({ Games: res.data });
      setGames(res.data);
    }
  };
  const items = [
    {
      name: "Course ",
      img: youtube,
      drop: ["Started courses", "Enrolled courses"],
    },
    { name: "Wishlist", img: performance },
    { name: "My Wallet", img: dollar },
    { name: "Progression Roadmap", img: ProgressionIcon },
    { name: "Setting", img: settings },
  ];
  const onSideBtnClick = (e) => {
    const course = e.target.textContent;
    console.log(course, "course");
    setDefaultCompState(course);
    setcreateCourse(false);
    setActiveButton(course);
  };
  return (
    <>
      <Box
        className="dashboard-container"
        sx={{ flexGrow: 1, display: "flex" }}
      >
        {/* dashboard SideBar */}
        <Box className="dashboard-sidebar">
          <Grid>
            <DashboardLeftSideBar2
              items={items}
              activeButton={activeButton}
              trigerOnClickEmpSideBtn={onSideBtnClick}
              setDefaultCompStatedrop={setDefaultCompState}
            />
          </Grid>
        </Box>
        {/* dashboardBody */}
        <DashboardRightSideBar2
          defaultCompState={defaultCompState}
          setDefaultCompState={setDefaultCompState}
          setcreateCourse={setcreateCourse}
          createCourse={createCourse}
          games={games}
          creator={creator}
          defaultCompStatedrop={defaultCompStatedrop}
        />
      </Box>
    </>
  );
};

export default Dashboard2;
