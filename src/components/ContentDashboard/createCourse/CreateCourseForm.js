import React, { useState } from "react";
import FormStepone from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepthree";

const CreateCourseForm = () => {
  const [step, setStep] = useState(1);
  const [formDataOne, setformDataOne] = useState({});
  const [formDataTwo, setformDataTwo] = useState({});
  const [formDataThree, setformDataThree] = useState({});
  return (
    <>
      <div className="createCourseDiv">
        <h2>Create a Course</h2>
        {step == 1 && (
          <FormStepone
            step={step}
            setStep={setStep}
            setformDataOne={setformDataOne}
          />
        )}
        {step == 2 && (
          <FormStepTwo
            step={step}
            setStep={setStep}
            setformDataOne={setformDataOne}
          />
        )}
        {step == 3 && (
          <FormStepThree
            step={step}
            setStep={setStep}
            setformDataOne={setformDataOne}
          />
        )}
      </div>
    </>
  );
};

export default CreateCourseForm;
