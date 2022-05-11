import React, { useState, useEffect } from "react";
import FormStepone from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepthree";
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";
import FormStepSix from "./FormStepSix";
import { Store, UpdateStore } from "../../../StoreContext";
const CreateCourseForm = ({ games, setDefaultCompState }) => {
  const [step, setStep] = useState(1);
  const [formDataOne, setformDataOne] = useState({
    course_name: "",
    gameName: "",
    gameLevel: "Casual",
    gameType: "Action",
    gameMood: "Single",
    gamePlateForm: "Mobile Games",
    description: "",
  });
  const [formDataTwo, setformDataTwo] = useState([]);
  const [formDataFive, setformDataFive] = useState([]);
  const [formDataSix, setformDataSix] = useState();
  const { creator } = Store();

  return (
    <>
      <div className="createCourseDiv">
        <h2>Create a Course</h2>
        {step == 1 && (
          <FormStepone
            step={step}
            setStep={setStep}
            formDataOne={formDataOne}
            setformDataOne={setformDataOne}
            games={games}
            setDefaultCompState={setDefaultCompState}
          />
        )}
        {step == 2 && (
          <FormStepTwo
            step={step}
            setStep={setStep}
            formDataTwo={formDataTwo}
            setformDataTwo={setformDataTwo}
          />
        )}
        {step == 3 && <FormStepThree step={step} setStep={setStep} />}
        {step == 4 && <FormStepFour step={step} setStep={setStep} />}
        {step == 5 && (
          <FormStepFive
            step={step}
            setStep={setStep}
            formDataTwo={formDataTwo}
            setformDataTwo={setformDataTwo}
            formDataFive={formDataFive}
            setformDataFive={setformDataFive}
          />
        )}
        {step == 6 && (
          <FormStepSix
            step={step}
            setStep={setStep}
            formDataOne={formDataOne}
            formDataFive={formDataFive}
            formDataSix={formDataSix}
            setformDataOne={setformDataOne}
            formDataFive={formDataFive}
            setformDataFive={setformDataFive}
            setformDataSix={setformDataSix}
            creator={creator}
            setDefaultCompState={setDefaultCompState}
          />
        )}
      </div>
    </>
  );
};

export default CreateCourseForm;
