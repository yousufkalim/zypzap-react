import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visa from "../../assets/icons/Visa.svg";
import MasterCard from "../../assets/icons/MasterCard.svg";
import Switch from "@mui/material/Switch";
import HeaderLogoutIcon from "../../assets/icons/HeaderLogoutIcon.svg";
import api from "../../api";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import { Store, UpdateStore } from "../../StoreContext";
const MyPrifileSetting = () => {
  const history = useHistory();
  const updateStore = UpdateStore();
  const { user, creator, searchState, searchInput } = Store();
  const [values, setValues] = React.useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email ? user.email[0] : "",
    // password: user?.password || "",
    card_number: user?.card_number || "",
    expiry_month: user?.expiry_date?.month || "",
    expiry_year: user?.expiry_date?.year || "",
    cvv: user?.cvv || "",
    card_holder_name: user?.card_holder_name || ""
  });

  const {
    username,
    email,
    password,
    card_number,
    expiry_month,
    expiry_year,
    cvv,
    card_holder_name
  } = formData;
  useEffect(() => {
    setFormData({
      username: user?.username || "",
      email: user?.email ? user.email[0] : "",
      // password: user?.password || "",
      card_number: user?.card_number || "",
      expiry_month: user?.expiry_date?.month || "",
      expiry_year: user?.expiry_date?.year || "",
      cvv: user?.cvv || "",
      card_holder_name: user?.card_holder_name || ""
    });
  }, [user]);
  const handleClickShowPassword = () => {
    setValues(!values);
  };
  console.log("first");
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlechange1 = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  const SubmitEvent = async (e) => {
    const d = {
      ...formData,
      expiry_date: {
        month: expiry_month,
        year: expiry_year
      }
    };
    delete d.expiry_month;
    delete d.expiry_year;
    let res = await api("post", `/users/basicInfo/${user?._id}`, d);
    if (res) {
      updateStore({ user: res.data.user });
      console.log("USER", email, password);
      toast.success("Modifier le profil avec succès");
    }
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <div className="profileSetting">
        <div className="profileSetting-centerDiv">
          <div className="profileSetting-Col">
            <div className="profileSetting_Input">
              <label htmlFor="" className="profileSetting-label">
                Edit ID
              </label>
              <input
                type="text"
                className="profileInputs"
                placeholder="@johnsmith1"
                value={username}
                onChange={handlechange1}
                name="username"
              />
              {/* <p className="profileInput-p">This email is already taken</p> */}
            </div>
            <div className="profileSetting_Input passIcon">
              <label htmlFor="" className="profileSetting-label">
                Change The Password
              </label>
              <input
                type={values ? "text" : "password"}
                className="profileInputs "
                placeholder="*************"
                value={password}
                onChange={handlechange1}
                name="password"
              />
              <button
                className="paswordIcon"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>
            <div className="profileSetting_Input">
              <label htmlFor="" className="profileSetting-label">
                Change Email Address
              </label>
              <input
                type="gmail"
                className="profileInputs"
                placeholder="example@gmail.com"
                value={email}
                onChange={handlechange1}
                name="email"
              />
            </div>
            <div>
              <p
                style={{
                  marginTop: "10px"
                }}
              >
                Subscription Status
              </p>{" "}
              <div className="membrship-card">
                <p style={{ color: "#979797", margin: "10px 0px" }}>Monthly</p>
                <h2 style={{ marginBottom: "10px" }}>Active</h2>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#979797",
                    marginTop: "10px"
                  }}
                >
                  Expires soon 31 march, 2022
                </span>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "15px 0px"
                  }}
                >
                  {" "}
                  <button
                    className="formbtnbtn"
                    type="submit"
                    style={{ width: "100px" }}
                  >
                    Renew
                  </button>
                  <button className="formbtn-o" style={{ width: "160px" }}>
                    Suspend Subscription
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p
                style={{
                  marginTop: "10px"
                }}
              >
                Gift Card
              </p>{" "}
              <div className="membrship-card">
                <p style={{ color: "#979797", margin: "10px 0px" }}>You Have</p>
                <h2 style={{ marginBottom: "10px" }}>$10.00</h2>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#979797",
                    marginTop: "10px"
                  }}
                >
                  Expires soon 31 march, 2022
                </span>

                <div
                  style={{
                    margin: "15px 0px"
                  }}
                >
                  <button className="formbtnbtn" style={{ width: "100px" }}>
                    Bye More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /* ---------------------------------- col2 ----------------------------------  */}
          <div className="profileSetting-Col">
            <p className="profileSetting-heading">Edit Payment Information</p>
            <div className="cardTypeDiv">
              <p className="cardType-p">Card Type</p>
              <img className="cardTypeImg" src={Visa} alt="" />
              <img className="cardTypeImg2" src={MasterCard} alt="" />
            </div>
            <div className="profileSetting_Input">
              <label htmlFor="" className="profileSetting-label">
                Card Holder Name
              </label>
              <input
                type="text"
                className="profileInputs"
                placeholder="Walter White"
                name="card_holder_name"
                onChange={handlechange1}
                value={card_holder_name}
              />
            </div>
            <div className="profileSetting_Input">
              <label htmlFor="" className="profileSetting-label">
                Card Number
              </label>
              <input
                type="text"
                className="profileInputs"
                placeholder="XXXX  XXXX  XXXX  1234"
                onChange={handlechange1}
                value={card_number}
                name="card_number"
              />
            </div>
            <div className="empiryDiv">
              <p className="profileSetting-label">Expiry Date</p>
              <div className="empiryColmn">
                <select
                  id="cars"
                  className="empirydata"
                  value={expiry_month}
                  onChange={handlechange1}
                  name="expiry_month"
                >
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>

                <select
                  id="cars"
                  className="empirydata"
                  value={expiry_year}
                  onChange={handlechange1}
                  name="expiry_year"
                >
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
              </div>
            </div>
            <div className="cvvDiv">
              <p className="profileSetting-label">CVV</p>
              <input
                type="text"
                className="empirydata"
                placeholder="123"
                name="cvv"
                onChange={handlechange1}
                value={cvv}
              />
            </div>
            {/* <button
              className="formbtn2"
              type="submit"
              onClick={SubmitEvent}
              style={{
                background: "linear-gradient(326deg, #662F88 8%, #20BF55 132%)",
                color: "white",
                fontWeight: "400",
                borderRadius: " 4px",
                cursor: "pointer",
                border: "none",
                width: " 100px",
                height: "39px",
                fontSize: "14px",
                marginLeft: "4px",
                marginTop: "14px",
              }}
            >
              Save
            </button> */}
          </div>
          {/* /* ---------------------------------- col3 ----------------------------------  */}
          <div className="profileSetting-Col">
            <div className="profile-notificaitonDiv">
              <p className="profile-notification">Notification</p>
              <Switch {...label} defaultChecked size="small" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="formbtn2"
          type="submit"
          onClick={SubmitEvent}
          style={{
            background: "linear-gradient(326deg, #662F88 8%, #20BF55 132%)",
            color: "white",
            fontWeight: "600",
            borderRadius: " 4px",
            cursor: "pointer",
            border: "none",
            width: " 133.93px",
            height: "44px",
            fontSize: "14px",
            display: "bl8ck",
            margin: "25px 4px"
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default MyPrifileSetting;
