import React, { useState, useEffect } from "react";
import Createbg from "../../assets/createbg.png";

const CreateHome = () => {
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email is ", email);
  };
  return (
    <>
      <div className="content_container">
        <img src={Createbg} className="content_Image" />
        <div className="textonImgcontent">
          <h1 className="textH1">
            Teach what you are
            <br /> good at
          </h1>
          <p
            className="textonP"
            style={{ color: "#e7411b", fontWeight: "900" }}
          >
            Its time to make your hobbie an asset
          </p>
          <form class="flex-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={email}
              onChange={onChange}
            />
            <input type="submit" value="Get Started" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateHome;
