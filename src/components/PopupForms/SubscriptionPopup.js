import React,{useState} from 'react'
import Dialog from '@mui/material/Dialog';
import { toast } from "react-toastify"
import ClearIcon from '@mui/icons-material/Clear';
const SubscriptionPopup = ({open, setOpen, Email}) => {
    const [email, setEmail] = useState(Email?Email:"")
    const [values, setValues] = useState({
        checkBoxOne:false,
        checkBoxTwo:false
      });
    const getCheckboxValues =(e)=>{
        console.log(e.target.checked);
        setValues({
          ...values,
          [e.target.name]: e.target.checked,
        });
    
      }
      const getEmail =(e)=>{
        setEmail(e.target.value)
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
        </>
    )
}

export default SubscriptionPopup
