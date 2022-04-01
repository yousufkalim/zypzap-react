import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import VideoInput from "../../utils/VideoInput";
import "../../css/form/EditCoursePopup.css";
import Grid from "@mui/material/Grid";
import UploadSuccessfulPopup from "./UploadSuccessfulPopup";

const EditCoursePopup = ({ open, setOpen, step, setStep, setformDataOne }) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handleClickOpen = () => {
    setShowPopup(true);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <UploadSuccessfulPopup open={showPopup} setOpen={setShowPopup} />
      <div>
        <Dialog
          fullWidth="true"
          maxWidth="lg"
          open={open}
          onClose={handleClose}
          className="editCoursePopup"
        >
          {/* /* -------------------------------- main div --------------------------------  */}
          <div className="formStepOneDiv">
            <p className="coursedetail2">Edit the course</p>
            <div className="hrLine1" />
            <div className="courseDivContainer">
              {/* /* -------------------------------- main div --------------------------------  */}

              <div className="courseDiv">
                <div className="step_container">
                  <Grid xs={12} sm={6}>
                    <div>
                      <p className="stepLabel">Course Details </p>
                      <input
                        type="text"
                        className="coursInput"
                        placeholder="learn how to play minacraft"
                      />
                    </div>
                  </Grid>
                </div>
                <Grid xs={12} sm={6}>
                  <div>
                    <p className="stepLabel">Game Name</p>
                    <input
                      type="text"
                      className="coursInput"
                      placeholder="PUBG GamePlay "
                    />
                  </div>
                </Grid>
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6}>
                    <div>
                      <p className="stepLabel">Gameplay level</p>
                      <select id="cars" name="cars" className="stepSelect">
                        <option value="volvo" className="setepOption">
                          select level
                        </option>
                        <option value="saab" className="setepOption">
                          Saab 95
                        </option>
                        <option value="mercedes" className="setepOption">
                          Mercedes SLK
                        </option>
                        <option value="audi" className="setepOption">
                          Audi TT
                        </option>
                      </select>
                    </div>
                  </Grid>
                </Grid>
              </div>
              {/* /* -------------------------------- main div --------------------------------  */}
              {/* /* -------------------------------- main div --------------------------------  */}
              <div></div>
              <div className="courseDiv">
                <Grid container spacing={2} className="step_container">
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}>
                      <div>
                        <p className="stepLabel">Game Type</p>
                        <select id="cars" name="cars" className="stepSelect">
                          <option value="volvo" className="setepOption">
                            select category
                          </option>
                          <option value="saab" className="setepOption">
                            Saab 95
                          </option>
                          <option value="mercedes" className="setepOption">
                            Mercedes SLK
                          </option>
                          <option value="audi" className="setepOption">
                            Audi TT
                          </option>
                        </select>
                      </div>
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <div>
                        <p className="stepLabel">Gaming Mode</p>
                        <select id="cars" name="cars" className="stepSelect">
                          <option value="volvo" className="setepOption">
                            Select Mode
                          </option>
                          <option value="saab" className="setepOption">
                            Saab 95
                          </option>
                          <option value="mercedes" className="setepOption">
                            Mercedes SLK
                          </option>
                          <option value="audi" className="setepOption">
                            Audi TT
                          </option>
                        </select>
                      </div>
                    </Grid>
                    <Grid xs={12} sm={6}>
                      <div>
                        <p className="stepLabel">Gaming Platform</p>
                        <select id="cars" name="cars" className="stepSelect">
                          <option value="volvo" className="setepOption">
                            Retro Consoles
                          </option>
                          <option value="saab" className="setepOption">
                            Saab 95
                          </option>
                          <option value="mercedes" className="setepOption">
                            Mercedes SLK
                          </option>
                          <option value="audi" className="setepOption">
                            Audi TT
                          </option>
                        </select>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              {/* /* -------------------------------- main div --------------------------------  */}
            </div>
            <label htmlFor="" className="stepLabel">
              Course description
            </label>
            <textarea
              name=""
              id=""
              cols="200"
              rows="20"
              placeholder="300 characters maximum"
              className="courstexarea"
            ></textarea>
            <Grid container spacing={2}>
              <div className="step_container2">
                <div className="step1">
                  <p className="stapPr">Re-upload full course</p>
                  <VideoInput text="Select Video" />
                </div>
                <p className="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <div className="step2">
                  <p className="stapPr2">Re-upload Chapters</p>
                  <VideoInput text="Select Video" />
                </div>
              </div>
            </Grid>
            <div className="coursDetailBtn">
              <button className="drafBtn" onClick={handleClose}>
                Cancel
              </button>
              <button className="continueBtn" onClick={handleClickOpen}>
                Save
              </button>
            </div>
          </div>
          {/* /* -------------------------------- main div --------------------------------  */}
        </Dialog>
      </div>
    </>
  );
};

export default EditCoursePopup;
