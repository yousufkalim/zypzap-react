import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { toast } from "react-toastify";
import ClearIcon from "@mui/icons-material/Clear";
import { useTranslation } from "react-i18next";
import api from "../../api";
const SubscriptionPopup = ({ open, setOpen, Email, heading1, heading2 }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [email, setEmail] = useState(Email ? Email : "");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    checkBoxOne: false,
    checkBoxTwo: false,
  });
  const getCheckboxValues = (e) => {
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
    console.log("submit");

    if (email == "") {
      return toast.error("Veuillez entrer votre e-mail");
    }

    if (!heading1) {
      if (!values.checkBoxOne) {
        return toast.error(
          "Merci d'accepter les conditions pour démarrer le test"
        );
      }
      setEmail("");
    }

    if (!values.checkBoxTwo) {
      return toast.error(
        "Merci d'accepter les conditions pour démarrer le test"
      );
    }

    toast.success("Nous avons bien reçu votre email");
    handleClose();
    // setLoading(true);
    // let res = await api("post", "/users/contact", {
    //   ...formData,
    // });
    // if (res.status === 200) {
    //   toast.success("Soumis avec succès");
    //   setFormData({ name: "", email: "", message: "", description: "" });
    // }
    // setLoading(false);
    // setEmail("");
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <div className="login_form">
          <div className="subs_container">
            <div className="form-header-block">
              <h1 className="subH1">
                {heading1 ? heading1 : t("Sign up here")}
              </h1>
              <p className="subP">
                {heading2
                  ? heading2
                  : "Un an de services offerts aux 10 000 premiers inscrits"}
              </p>
              <ClearIcon className="subsclearIcon" onClick={handleClose} />
            </div>
            {/* <form onSubmit={submitForm}> */}
            <label className="email-label" htmlFor="email">
              {t("Address Email")}
            </label>
            <input
              className="subsinputForm"
              type="email"
              placeholder="e.g.moinheykal@gmail.com"
              value={email}
              onChange={onChange}
              name="email"
            />
            {!heading1 && (
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
                  {t("Register as a Beta Tester")}
                </label>
              </div>
            )}
            <div
              className={`${heading1 && "toppdding"}`}
              style={{
                display: "-webkit-inline-box",
                margin: "0px 80px 30px 0",
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
                {t(`J'accepte`)}
                <span className="subsBold">
                  {/* <span className={`padtop ? "subsBold" "padtop"}`}> */}
                  {t(` La politique de confidentialité `)}
                </span>
                {t(
                  `de ZypZap et j'accepte de recevoir les prochaines mises à jour`
                )}

                {/* {t("I agree passtotrip ")}
                  <span className=" privacy-policy-text">
                    {t("Privacy Policy")}{" "}
                  </span>{" "}
                  {t("and agree to receive upcoming passtotrip updates")} */}
              </label>
            </div>
            <button className="subsformbtn" onClick={() => submitForm()}>
              {t("Subscribe")}
            </button>
            {/* </form> */}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SubscriptionPopup;
