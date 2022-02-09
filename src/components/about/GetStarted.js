import react, { useState } from "react";
import Get1 from "../../assets/icons/get1.png";
import Get2 from "../../assets/icons/get2.png";
import Get3 from "../../assets/icons/get3.png";
import { toast } from "react-toastify";
export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    detail: "",
  });
  const { name, email, detail } = formData;
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name == "") {
      return toast.error("S'il vous plaît entrez votre nom");
    }

    if (email == "") {
      return toast.error("Veuillez entrer votre email");
    }
    if (detail == "") {
      return toast.error("Veuillez saisir vos coordonnées");
    }
    setFormData({
      name: "",
      email: "",
      detail: "",
    });
  };
  return (
    <>
      <div className="GetInTech">
        <div className="GetInTech_container">
          <h2 className="get_heading">Ils nous ont rejoint</h2>
          <div className="get_social">
            <div className="socialIncons">
              <img src={Get1} alt="" />
              <p className="getP">100 Street, Toronto</p>
            </div>
            <div className="socialIncons">
              <img src={Get2} alt="" />
              <p className="getP">(613) 699 5550</p>
            </div>
            <div className="socialIncons">
              <img src={Get3} alt="" />
              <p className="getP">Support@Passtotrip.com</p>
            </div>
          </div>
          <div className="getForm">
            <label className="getInTout_label" htmlFor="">
              Your Name
            </label>
            <input
              placeholder="Enter your name"
              className="inputName"
              type="text"
              onChange={onChange}
              name="name"
              value={name}
            />
            <label className="getInTout_label" htmlFor="">
              Email Address
            </label>
            <input
              placeholder="Enter your email here"
              className="inputEmail"
              type="email"
              onChange={onChange}
              name="email"
              value={email}
            />
            <label className="getInTout_label" htmlFor="">
              Your Message
            </label>
            <textarea
              placeholder="Write here"
              name="detail"
              cols="100"
              rows="10"
              className="get_textArea"
              type="text"
              onChange={onChange}
              value={detail}
            ></textarea>
            <button className="getIn_btn" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
