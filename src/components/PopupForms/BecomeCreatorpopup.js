import React, { useState } from "react";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const BecomeCreatorpopup = ({ open, setOpen }) => {
  const [data, setData] = useState({
    text: "",
    radio1: "",
    radio2: "",
    radio3: "",
  });

  const handleChange = (e) => {
    console.log("e is ", e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const backBtn = () => {
    setOpen(false);
  };
  const SubmitEvent = (e) => {
    e.preventDefault();
    if (data.text == "") {
      return toast.error("CS-GO");
    }
    if (data.radio1 == "") {
      return toast.error("Yes : No");
    }
    if (data.radio2 == "") {
      return toast.error("What you gameplay");
    }
    if (data.radio3 == "") {
      return toast.error("Do you have audience");
    }

    setData({ text: "" });
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} className="login_data">
        <div className="login_Details">
          <div className="Details_container">
            <h1 className="detailH1">Creator Details</h1>
            <p className="detail_pera">Input your expertise here</p>
            <form action="" onSubmit={SubmitEvent}>
              <label htmlFor="text" className="teachP">
                Game you are goot at
              </label>
              <input
                className="detailInput"
                type="text"
                placeholder="e.g. CS-GO"
                name="text"
                value={data.text}
                onChange={handleChange}
              />
              <FormLabel
                component="legend"
                style={{ color: "#fff" }}
                className="labelP"
              >
                Have you done online teaching before
              </FormLabel>
              <RadioGroup
                className="cInput"
                row
                aria-label="circle"
                name="radio1"
                value={data.radio1}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <FormLabel
                component="legend"
                style={{ color: "#fff" }}
                className="labelP"
              >
                What is your gameplay level
              </FormLabel>
              <RadioGroup
                aria-label="circle"
                className="cirleInput"
                name="radio2"
                value={data.radio2}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Entry"
                  control={<Radio />}
                  label="Entry Level"
                />
                <FormControlLabel
                  value="Intermediate"
                  control={<Radio />}
                  label="Intermediate Level"
                />
                <FormControlLabel
                  value="Advance"
                  control={<Radio />}
                  label="Advance Level"
                />
              </RadioGroup>
              <FormLabel
                component="legend"
                style={{ color: "#fff" }}
                className="labelP"
              >
                Do you have any audience
              </FormLabel>
              <RadioGroup
                aria-label="circle"
                className="cirleInput"
                name="radio3"
                value={data.radio3}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="no"
                  control={<Radio style={{ fontSize: "10px" }} />}
                  label="No"
                />
                <FormControlLabel
                  value="Small"
                  control={<Radio />}
                  label="Small Audience"
                />
                <FormControlLabel
                  value="Huge"
                  control={<Radio />}
                  label="Huge Audience"
                />
              </RadioGroup>
              <button type="submit" className="contBTN">
                Continue
              </button>
            </form>
            <button className="backBTN" onClick={backBtn}>
              Back
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

// export default LoginDetail;
export default BecomeCreatorpopup;
