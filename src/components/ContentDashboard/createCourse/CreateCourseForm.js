import React, { useState, useEffect } from "react";
import FormStepone from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepthree";
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";
import FormStepSix from "./FormStepSix";
import { Store, UpdateStore } from "../../../StoreContext";
const CreateCourseForm = () => {
  const [step, setStep] = useState(1);
  const [formDataOne, setformDataOne] = useState({
    gamedetails: "",
    gameName: "",
    gameLevel: "",
    gameType: "",
    gameMood: "",
    gamePlateForm: "",
    description: "",
  });
  const [formDataTwo, setformDataTwo] = useState();
  const [formDataSix, setformDataSix] = useState({});
  const { creator } = Store();
  console.log("creator", creator);
  useEffect(() => {
    console.log("creator", creator);
  }, []);
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
        {console.log("step", step)}
        {step == 4 && <FormStepFour step={step} setStep={setStep} />}
        {step == 5 && (
          <FormStepFive
            step={step}
            setStep={setStep}
            formDataTwo={formDataTwo}
            setformDataTwo={setformDataTwo}
          />
        )}
        {step == 6 && (
          <FormStepSix
            step={step}
            formDataOne={formDataOne}
            formDataTwo={formDataTwo}
            formDataSix={formDataSix}
            setformDataSix={setformDataSix}
            creator={creator}
          />
        )}
      </div>
    </>
  );
};

export default CreateCourseForm;
