import React from "react";
import PaymentPic from "../../../assets/icons/PaymentPic.png";

const Payments = () => {
  return (
    <>
      <div className="dash_col2">
        <div className="basic_info">
          <h3 className="basicH3">Payment method</h3>
          <hr className="hr_password" />
          <div className="payment_container">
            <img className="patmentImg" src={PaymentPic} alt="" />
            <p className="patment_pera">
              You don’t have any saved payment method
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
