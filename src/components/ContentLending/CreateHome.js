import React, { useState, useEffect } from "react";
import Createbg from "../../assets/createbg2.png";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";
import { useTranslation } from "react-i18next";
const CreateHome = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const showPopup = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <div className="content_container">
        {open && (
          <SubscriptionPopup open={open} Email={email} setOpen={setOpen} />
        )}
        <img src={Createbg} className="content_Image" />
        <div className="textonImgcontent">
          <h1 className="textH1">
            {t("Teach what you are")}
            <br />
            {t("good at")}
          </h1>
          <p
            className="textonP"
            style={{ color: "#e7411b", fontWeight: "900" }}
          >
            {t("Its time to make your hobbie an asset")}
          </p>
          <form onSubmit={showPopup} class="flex-form">
            <input
              className="user-landing-page-email-input"
              type="email"
              placeholder={t("Email address")}
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <input
              className="user-landing-page-submit-input"
              type="submit"
              value={t("Get Started")}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateHome;
