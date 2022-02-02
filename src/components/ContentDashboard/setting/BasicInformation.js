import React from "react";
import DeshProfile from "../../../assets/icons/deshProfile.png";
import { toast } from "react-toastify";

const BasicInformation = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const { firstName, lastName, email, phone } = formData;

  const chnageEvent = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const SubmitEvent = (e) => {
    e.preventDefault();

    if (firstName == "") {
      return toast.error("Enter your first name");
    }
    if (lastName == "") {
      return toast.error("Enter your second name ");
    }
    if (email == "") {
      return toast.error("Enter your email");
    }
    if (phone == "") {
      return toast.error("Enter your Phone Number");
    }
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  return (
    <>
      <div className="dash_col2">
        <div className="basic_info">
          <h3 className="basicH3">Basic Information</h3>
          <div>
            <img src={DeshProfile} alt="" className="desh_profilePic" />
          </div>
          <form action="" className="deshForm">
            <input
              type="text"
              className="dashInput"
              placeholder="First name"
              onChange={chnageEvent}
              value={firstName}
              name="firstName"
            />
            <input
              type="text"
              className="dashInput"
              placeholder="Last name"
              onChange={chnageEvent}
              name="lastName"
              value={lastName}
            />
            <input
              type="email"
              className="dashInput"
              placeholder="Email address"
              onChange={chnageEvent}
              name="email"
              value={email}
            />
            <input
              type="phone"
              className="dashInput"
              placeholder="Phone number"
              onChange={chnageEvent}
              name="phone"
              value={phone}
            />
          </form>
          <button className="dashBtn" onClick={SubmitEvent}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
