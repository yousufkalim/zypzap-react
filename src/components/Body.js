// Init
import React, { useState, useEffect } from "react";
import Bodyimg from "../assets/img/body.png";
import BodyBlurimg from "../assets/img/bodyblur.png";
import TopCourses from "./TopCourses";
import LatestCourses from "./LatestCourses";
import TopRatedContent from "./TopRatedContent";
import Request from "./Request";
import RankingList from "./RankingList";
import Blog from "./Blog";
import LoginFormPopup from "./PopupForms/LoginFormPopup";
import CreateFormPopup from "./PopupForms/CreateFormPopup";

export default function Body() {
  const [openCreateForm, setOpenCreateForm] = useState(false);
  const showPopup = () => {
    setOpenCreateForm(true);
  };
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="Bodycontainer">
        <CreateFormPopup
          open={openCreateForm}
          setOpen={setOpenCreateForm}
          login={openLoginForm}
          setLogin={setOpenLoginForm}
        />
        <LoginFormPopup
          open={openLoginForm}
          setOpen={setOpenLoginForm}
          signup={openCreateForm}
          setSignup={setOpenCreateForm}
        />
        <img src={Bodyimg} alt="img" className="bodyImage" />
        <img src={BodyBlurimg} alt="img" className="blurImg" />
        <div className="textonImg">
          <h1 className="textimgH1">
            We help you becoming
            <br /> a pro player
          </h1>
          <p className="textonImgP">For players who want more</p>
          <button className="textonImgbutton" onClick={showPopup}>
            Sign Up For Free
          </button>
        </div>
        <TopCourses />
        <LatestCourses />
        <TopRatedContent />
        <Request />
        <RankingList />
        <Blog />
      </div>
    </>
  );
}
