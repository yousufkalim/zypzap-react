import React from "react";
import Contentimg2 from "../../assets/contentimg2.png";
import CreateDetail from "../../components/PopupForms/LoginDetail";

const ContentLandingPage = () => {
  const [open, setOpen] = React.useState(false);
  const showCreateCoursePopup = () => {
    setOpen(true);
  };
  return (
    <>
      <CreateDetail open={open} setOpen={setOpen} />
      <div className="content_container">
        <img src={Contentimg2} className="content_Image" />

        <div className="textonImgcontent">
          <h1 className="textH1">
            Teach what you are
            <br /> good at
          </h1>
          <p className="textonP">For Gamers who want teach how to play</p>
          <button className="textonbutton" onClick={showCreateCoursePopup}>
            Create a Course
          </button>
        </div>
      </div>
    </>
  );
};
export default ContentLandingPage;
