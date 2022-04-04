import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import api from "../../api";
import { Link } from "react-router-dom";
import CongratulationPopup1 from "./CongratulationPopup1";
import ConfirmationPopup2 from "./ConfirmationPopup2";
const SubscriptionPopup = ({
  open,
  setOpen,
  Email,
  heading1,
  isThreeLine,
  title,
  title2,
  content,
  pera,
  type,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [email, setEmail] = useState(Email ? Email : "");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    checkBoxOne: false,
    checkBoxTwo: false,
    checkBoxThree: true,
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
  const submitForm = async (event) => {
    if (email == "") {
      return toast.error("Veuillez entrer votre e-mail");
    }

    if (content) {
      if (!values.checkBoxOne) {
        return toast.error(
          "Merci d'accepter les conditions pour démarrer le test"
        );
      }
    }
    const tester = values.checkBoxTwo;
    setLoading(true);
    let res = await api("post", "/newsletters", {
      email,
      type,
      tester,
    });

    if (res.status === 200) {
      toast.success("Soumis avec succès");
    }

    if (isThreeLine) {
      setShowPopup(true);
    } else {
      setShowPopup2(true);
    }

    setLoading(false);
    setEmail("");
  };
  return (
    <>
      <CongratulationPopup1
        open={showPopup}
        setOpen={() => setShowPopup(!showPopup)}
        closeModal={handleClose}
      />
      <ConfirmationPopup2
        open={showPopup2}
        setOpen={() => setShowPopup2(!showPopup2)}
        closeModal={handleClose}
      />
      <Dialog open={open} onClose={handleClose}>
        <div className="login_form">
          <div className="subs_container">
            <div className="form-header-block">
              <h1 className="subH1">{title}</h1>
              <h1 className="subH1">{title2}</h1>

              <p className="subP">{isThreeLine ? content : ""}</p>
            </div>
            {/* <form onSubmit={submitForm}> */}
            <label className="email-label" htmlFor="email">
              {t("Adresse e-mail")}
            </label>
            <input
              className="subsinputForm"
              type="email"
              placeholder="e.g. example@gmail.com"
              value={email}
              onChange={onChange}
              name="email"
            />
            <div
              className={`${heading1 && "toppdding"}`}
              style={{
                display: "-webkit-inline-box",
                margin: "10px 80px 5px 0",
                paddingTop: "5px",
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
                {t(`J'accepte`)}
                <Link to="/PrivacyPolicy" className="subsBold">
                  {/* <span className={`padtop ? "subsBold" "padtop"}`}> */}
                  {t(` La politique de confidentialité  `)}
                </Link>
                {t(` de ZypZap et`)}
                <br />
                {t(` j'accepte de recevoir les prochaines mises à jour`)}

                {/* {t("I agree passtotrip ")}
                  <span className=" privacy-policy-text">
                    {t("Privacy Policy")}{" "}
                  </span>{" "}
                  {t("and agree to receive upcoming passtotrip updates")} */}
              </label>
            </div>
            <br />

            <div
              style={{
                display: "-webkit-inline-box",
                margin: "10px 0px 10px 0",
                fontSize: "16px",
              }}
            >
              {isThreeLine && (
                <>
                  <input
                    onChange={getCheckboxValues}
                    value={values.checkBoxThree}
                    name="checkBoxThree"
                    className="popup-checkbox"
                    type="checkbox"
                    checked={values.checkBoxThree}
                  />

                  <label className="subsLabel">{pera}</label>
                </>
              )}
            </div>
            <br />

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
                {/* <span className={`padtop ? "subsBold" "padtop"}`}> */}
                {t(` S'inscrire comme bêta-testeur`)}

                {/* {t("I agree passtotrip ")}
                  <span className=" privacy-policy-text">
                    {t("Privacy Policy")}{" "}
                  </span>{" "}
                  {t("and agree to receive upcoming passtotrip updates")} */}
              </label>
            </div>
            <button className="subsformbtn" onClick={() => submitForm()}>
              S’inscrire
            </button>
            {/* </form> */}
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SubscriptionPopup;
