import React, { useState } from "react";
import ShowIcon from "../../assets/ShowIcon.svg";
import CloseIcon from "../../assets/CloseIcon.svg";

const ProcessingAllData = (props) => {
  const [showIcons, setShowIcons] = useState(true);
  return (
    <>
      <ol>
        <div className="ProcessingDataH3 process">
          {props.title}
          {/* 2. Traitement et utilisation des données" */}
        </div>
      </ol>
      <div1 className="followwingDataHeading">
        <div className="followwingDataQuandDiv">
          <h3 className="introHeadingH4">{props.heading}</h3>
          {showIcons ? (
            <img
              src={ShowIcon}
              alt=""
              className="introShowIcon"
              onClick={() => setShowIcons(!showIcons)}
            />
          ) : (
            <img
              src={CloseIcon}
              alt=""
              className="introShowIcon"
              onClick={() => setShowIcons(!showIcons)}
            />
          )}
        </div>
        <ul className={showIcons ? "quandUl" : "quandUlActive"}>
          <p className="TraitementP">{props.text1}</p>
          <p className="TraitementP"> {props.text2}</p>
          <p className="TraitementP">{props.text3}</p>
          <p className="TraitementP">{props.text4}</p>
          <p className="TraitementP">{props.text5}</p>
          <p className="TraitementP">{props.text6}</p>
          <p className="TraitementP">{props.text7}</p>
          <p className="TraitementP">{props.text8}</p>
          <p className="TraitementP">{props.text9}</p>
          <br />
          <br />
          <p className="TraitementP">{props.content1}</p>
          <p className="TraitementP">{props.content2}</p>
          <p className="TraitementP"> {props.content3}</p>
          <p className="TraitementP ">{props.content4}</p>
          <p className="TraitementP">{props.content5}</p>
          <p className="TraitementP">{props.content6}</p>
        </ul>
        <p className="TraitementP">{props.content1p}</p>
        <p className="TraitementP">{props.content2p}</p>
        <p className="TraitementP">{props.content3p}</p>
      </div1>
    </>
  );
};

export default ProcessingAllData;
