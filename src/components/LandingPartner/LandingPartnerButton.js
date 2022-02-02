import React from "react";
import { useTranslation, Trans } from "react-i18next";
import SubscriptionPopup from "../PopupForms/SubscriptionPopup";

const ButtonBecomeAPartner = () => {
  const [open, setOpen] = React.useState(false);

  const showPartnerPopup = () => {
    setOpen(true);
  };

  const { t, i18n } = useTranslation();
  const { language } = i18n;
  return (
    <>
      {open && (
        <SubscriptionPopup
          open={open}
          setOpen={setOpen}
          heading1="On Vous Contacte Trés Vite  !"
          heading2="Laissez nous votre adresse mail, on s’occupe du reste"
        />
      )}
      <button className="btn-landing-partner" onClick={showPartnerPopup}>
        {t("Become a Partner")}
      </button>
    </>
  );
};

export default ButtonBecomeAPartner;
