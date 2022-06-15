import React from "react";
import "../../css/form/PaymentOptionPopup.css";
import Dialog from "@mui/material/Dialog";
import PaymentImg from "../../assets/icons/PaymentImg.svg";
import GooglePay from "../../assets/icons/GooglePay.svg";
import PayPal from "../../assets/icons/PayPal.svg";

const PaymentOptionPopup = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        <div
          className="paymentOption-mainDiv"
          style={{ backgroundColor: "#1D1F38" }}
        >
          <p className="paymentOption-heading">Payment Option</p>
          <div className="payment-bank-div">
            {/* bank details */}
            <div className="payment-bank-heading">
              <p className="payment-BankP">Bank Details</p>
            </div>
            <div className="payment-bank-cetagory">
              <div className="payment-bank-colm">
                <img src={PaymentImg} alt="" />
              </div>
              <div className="payment-bank-colm">
                <img src={GooglePay} alt="" />
              </div>
              <div className="payment-bank-colm">
                <img src={PayPal} alt="" />
              </div>
            </div>
            {/* bank details */}
            {/* payment Email */}
            <div className="payment-bank-cetagory2">
              <div className="payment-bank-colm2">
                <label className="payment-label" htmlFor="">
                  Email
                </label>
                <input
                  className="payment-input"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            {/* payment Email */}
            {/* card information */}
            <div className="payment-bank-cetagory3">
              <div className="payment-bank-colm3">
                <label className="card-info-label" htmlFor="">
                  Card information
                </label>
                <input
                  className="card-info-input"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                />
                <div className="card-Info-colmn">
                  <input
                    className="card-info-input2"
                    type="text"
                    placeholder="MM/YY"
                  />
                  <input
                    className="card-info-input3"
                    type="text"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>
            {/* card information */}
            {/* Name on card */}
            <div className="payment-bank-cetagory4">
              <div className="payment-bank-colm4">
                <label className="payment-label2" htmlFor="">
                  Name on card
                </label>
                <input
                  className="payment-input"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            {/* Name on card */}
            {/* payment button */}
            <div className="payment-bank-cetagory5">
              <div className="payment-bank-colm5">
                <button className="payment-purchase-btn">Purchase</button>
              </div>
            </div>
            {/* payment button */}
            {/* payment Skip button */}
            <div className="payment-bank-cetagory6">
              <div className="payment-bank-colm6">
                <button className="payment-skip-btn">Skip</button>
              </div>
            </div>
            {/* payment Skip button */}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default PaymentOptionPopup;
