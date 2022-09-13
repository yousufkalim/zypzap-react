import React, { useState, useEffect } from 'react';
import FormStepone from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormStepThree from './FormStepthree';
import FormStepFour from './FormStepFour';
import FormStepFive from './FormStepFive';
import FormStepSix from './FormStepSix';
import { Store, UpdateStore } from '../../../StoreContext';
const CreateCourseForm = ({ step, setStep }) => {
  const [formDataOne, setformDataOne] = useState({
    course_name: '',
    gameName: '',
    selectedGamename: '',
    gameLevel: '',
    gameType: '',
    gameMood: '',
    gamePlateForm: '',
    description: ''
  });
  const [formDataTwo, setformDataTwo] = useState([]);
  const [formDataFive, setformDataFive] = useState([]);
  const [formDataSix, setformDataSix] = useState('');
  const [uploading, setUploading] = useState(false);
  const { creator, singleDraft } = Store();
  // console.log('formDataOne', formDataOne);
  // console.log('formDataTwo', formDataTwo);
  // console.log('formDataFive', formDataFive);
  // console.log('formDataSix', formDataSix);

  useEffect(() => {
    console.log('useefect singleDraft', singleDraft, step);
    setformDataOne({
      course_name: singleDraft?.course_name ? singleDraft?.course_name : '',
      selectedGamename: singleDraft?.selectedGamename
        ? singleDraft?.selectedGamename
        : '',
      gameLevel: singleDraft?.level ? singleDraft?.level : '',
      gameType: singleDraft?.gameType ? singleDraft?.gameType : '',
      gameMood: singleDraft?.mode ? singleDraft?.mode : '',
      gamePlateForm: singleDraft?.plateform ? singleDraft?.plateform : '',
      description: singleDraft?.description ? singleDraft?.description : ''
    });
    setformDataFive(singleDraft?.videos ? singleDraft?.videos : []);
    setformDataSix(singleDraft?.thumbnail ? singleDraft?.thumbnail : '');
    setUploading(singleDraft?.thumbnail ? true : false);
    setformDataTwo(singleDraft?.formDataTwo ? singleDraft?.formDataTwo : []);
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
            formDataOne={formDataOne}
            setformDataTwo={setformDataTwo}
          />
        )}
        {/* {step == 3 && <FormStepThree step={step} setStep={setStep} />}
        {step == 4 && <FormStepFour step={step} setStep={setStep} />} */}
        {step == 5 && (
          <FormStepFive
            step={step}
            setStep={setStep}
            formDataTwo={formDataTwo}
            setformDataTwo={setformDataTwo}
            formDataOne={formDataOne}
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
            uploading={uploading}
            setUploading={setUploading}
            singleDraft={singleDraft}
          />
        )}
      </div>
    </>
  );
};

export default CreateCourseForm;
