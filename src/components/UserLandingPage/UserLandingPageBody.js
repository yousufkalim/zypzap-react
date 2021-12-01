import React, { useState } from "react";
import { toast } from "react-toastify"
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import AboutLandingPageImg from "../../assets/img/aboutlandingpage.png";
import UserLandingPageAdvantages from "../UserLandingPage/UserLandingPageAdvantages";
import UserLandingPageCommunity from "../UserLandingPage/UserLandingPageCommunity";
import UserLandingPageTrending from "../UserLandingPage/UserLandingPageTrending";
import UserLandingPageBlog from "../UserLandingPage/UserLandingPageBlog";
import Aboutimg from "../../assets/img/kk.png";

const UserLandingPageBody = () => {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [values, setValues] = useState({
    checkBoxOne:false,
    checkBoxTwo:false
  });
  const getEmail =(e)=>{
    setEmail(e.target.value)
  }
  const getCheckboxValues =(e)=>{
    console.log(e.target.checked);
    setValues({
      ...values,
      [e.target.name]: e.target.checked,
    });

  }
  const postEmail =(e)=>{
    e.preventDefault();
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false);
  };
  const submitForm = (event) => {
    console.log(values,email);
    event.preventDefault()
    if (values.checkBoxOne ===false || values.checkBoxTwo ===false) {
      return toast.error("Please fill the checkboxes!")
    }
    else if(values.checkBoxOne ===true || values.checkBoxTwo ===true)
    setEmail("")
    setOpen(false)
  }
  
  return (
    <>
      <div>
      <Dialog className="form-box" open={open} onClose={handleClose}>
          <div className="login_form">
            <div className="form_container">
              <div className="form-header-block">  
              <h1>Sign up here</h1>
              <ClearIcon className="clearIcon" onClick={handleClose} />
              </div>
              <form onSubmit={submitForm}>
                <label className="email-label" htmlFor="email">Email</label>
                <input className="inputForm" type="email" placeholder="e.g.moinheykal@gmail.com"
                  value={email}
                  onChange={getEmail}
                  name="email"
                  required
                />
                <div style={{ display: "-webkit-inline-box", margin:"20px 0px" }}>
                  <input onChange={getCheckboxValues} value={values.checkBoxOne} name="checkBoxOne" className="popup-checkbox" type="checkbox"/>
                  <label>Register as a beta tester</label>
                </div>
                <div style={{ display: "-webkit-inline-box", margin:"10px 0px" }}>
                  <input onChange={getCheckboxValues} value={values.checkBoxTwo} name="checkBoxTwo" className="popup-checkbox" type="checkbox"/>
                  <label>I agree passtotrip <span className="privacy-policy-text">Privacy Policy </span> and agree to receive
                    upcoming passtotrip updates </label>
                </div>
                <button className="formbtn" type="submit" >Subscribe</button>
              </form>
            </div>
          </div>
        </Dialog>  
      </div>
      <div className="user-landingpage-container">
        <div className="user-landing-page-img-container">
          <img src={AboutLandingPageImg} className="aboutLeftimg" />
          <img src={Aboutimg} className="user-landing-page-right-img" />
        </div>
        <div className="user-landing-page-text-on-img">
          <h1 className="UserLandingPageAboutTextImgH1">
            Welcome to the Gamer's Learning 3.0{" "}
          </h1>
          <p className="user-landing-page-text-on-imgP">
            Join our Online Courses community and become a pro game
          </p>
          <form className="flex-form" onSubmit={postEmail}>
            <input className="user-landing-page-email-input" value={email} name="email" onChange={getEmail} type="email" placeholder="Email address" required/>
            <input className="user-landing-page-submit-input"  type="submit" value="Get Early Access" />
          </form>
        </div>
      </div>
      <UserLandingPageAdvantages />
      <UserLandingPageCommunity />
      <UserLandingPageTrending />
      <UserLandingPageBlog />
    </>
  );
};

export default UserLandingPageBody;
