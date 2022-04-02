import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DashboardLeftSideBar from "./DashboardLeftSideBar";
import DashboardRightSideBar from "./DashboardRightSideBar";
import settings from "../../assets/img/settings.png";
import dollar from "../../assets/img/dollar.png";
import performance from "../../assets/img/performance.png";
import youtube from "../../assets/img/youtube.png";
import { Store, UpdateStore } from "../../StoreContext";
import api from "../../api";
const Dashboard = () => {
  const updateStore = UpdateStore();
  const [activeButton, setActiveButton] = useState("Course");
  const [defaultCompState, setDefaultCompState] = useState("Course");
  const [createCourse, setcreateCourse] = useState(false);
  const [games, setGames] = useState();

  useEffect(() => {
    getGames();
  }, []);
  const getGames = async () => {
    let res = await api("get", `/games/`);
    console.log("games in home", res.data);
    if (res) {
      updateStore({ Games: res.data });
      setGames(res.data);
    }
  };
  const items = [
    { name: "Course", img: youtube },
    { name: "Performance", img: performance },
    { name: "Earning", img: dollar },
    { name: "Setting", img: settings },
  ];
  const onSideBtnClick = (e) => {
    const course = e.target.textContent;
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
            <DashboardLeftSideBar
              items={items}
              activeButton={activeButton}
              trigerOnClickEmpSideBtn={onSideBtnClick}
            />
          </Grid>
        </Box>
        {/* dashboardBody */}
        <DashboardRightSideBar
          defaultCompState={defaultCompState}
          setDefaultCompState={setDefaultCompState}
          setcreateCourse={setcreateCourse}
          createCourse={createCourse}
          games={games}
        />
      </Box>
    </>
  );
};

export default Dashboard;
