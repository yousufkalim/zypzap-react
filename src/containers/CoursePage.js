import React, { useState } from "react";
import Header from "../components/Header";
import CompleteCourse from "../components/CoursePage/CompleteCourse";
import "../components/CoursePage/CoursePage.css";
import OverViewMenu from "../components/OverView/OverViewMenu";
import OverviewButton from "../components/OverView/OverviewButton";
import Curriculum from "../components/OverView/Curriculum";
import Instructor from "../components/OverView/Instructor";
import Reviews from "../components/OverView/Reviews";
import Footer from "../components/blog/BlogFooter";

let btns = [
  { text: "Overview" },
  { text: "Curriculum" },
  { text: "Instructor" },
  { text: "Reviews" },
];

const CoursePage = () => {
  const [overView, setOverView] = useState(false);
  const [activebtn, setActivebtn] = useState("Overview");
  console.log("activebtn", activebtn);

  const [openlogin, setOpenLogin] = React.useState(false);
  const [opensignup, setOpenSignup] = React.useState(false);
  const [openBecomeCreatorPopup, setOpenBecomeCreatorPopup] =
    React.useState(false);
  return (
    <div>
      <Header
        openlogin={openlogin}
        setOpenLogin={setOpenLogin}
        opensignup={opensignup}
        setOpenSignup={setOpenSignup}
        openBecomeCreatorPopup={openBecomeCreatorPopup}
        setOpenBecomeCreatorPopup={setOpenBecomeCreatorPopup}
      />
      <CompleteCourse />
      <OverViewMenu
        btns={btns}
        setActivebtn={setActivebtn}
        activebtn={activebtn}
      />
      {activebtn == "Overview" && <OverviewButton />}

      {activebtn == "Curriculum" && <Curriculum />}

      {activebtn == "Instructor" && <Instructor />}

      {activebtn == "Reviews" && <Reviews />}

      <Footer overView={overView} />
    </div>
  );
};

export default CoursePage;
