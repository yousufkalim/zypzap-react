import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";
import { useTranslation } from "react-i18next";
const SubscriptionPopup = ({ open, setOpen, Email }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [email, setEmail] = useState(Email ? Email : "");
  const [values, setValues] = useState({
    checkBoxOne: false,
    checkBoxTwo: false,
  });
  const getCheckboxValues = (e) => {
    console.log(e.target.checked);
    setValues({
      ...values,
      [e.target.name]: e.target.checked,
    });
  };
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (values.checkBoxTwo === false) {
      return toast.error("Please checked the checkbox!");
    } else if (values.checkBoxOne === true || values.checkBoxTwo === true)
      setEmail("");
    setOpen(false);
  };
  return (
    <>
      <Dialog className="form-box" open={open} onClose={handleClose}>
        <div className="login_form">
          <div className="subs_container">
            <div className="form-header-block">
              <h1 className="subH1">{t("Sign up here")}</h1>
              <ClearIcon className="subsclearIcon" onClick={handleClose} />
            </div>
            <form onSubmit={submitForm}>
              <label className="email-label" htmlFor="email">
                {t("Email")}
              </label>
              <input
                className="subsinputForm"
                type="email"
                placeholder="e.g.moinheykal@gmail.com"
                value={email}
                onChange={onChange}
                name="email"
                required
              />
              <div
                style={{
                  display: "-webkit-inline-box",
                  margin: "10px 0px 10px 0",
                  fontSize: "16px",
                }}
              >
                <input
                  onChange={getCheckboxValues}
                  value={values.checkBoxOne}
                  name="checkBoxOne"
                  className="popup-checkbox"
                  type="checkbox"
                />
                <label className="subsLabel">
                  {t("Register as a beta tester")}
                </label>
              </div>
              <div
                style={{
                  display: "-webkit-inline-box",
                  margin: "0px 0px 30px 0",
                  paddingTop: "5px",
                  fontSize: "16px",
                }}
              >
                <input
                  onChange={getCheckboxValues}
                  value={values.checkBoxTwo}
                  name="checkBoxTwo"
                  className="popup-checkbox"
                  type="checkbox"
                />
                <label className="subsLabel">
                  {t("I agree passtotrip ")}
                  <span className=" privacy-policy-text">
                    {t("Privacy Policy")}{" "}
                  </span>{" "}
                  {t("and agree to receive upcoming passtotrip updates")}
                </label>
              </div>
              <button className="subsformbtn" type="submit">
                {t("Subscribe")}
              </button>
            </form>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SubscriptionPopup;
