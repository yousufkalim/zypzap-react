import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import ImageInput from '../../../utils/ImageInput';
import VideoInput from '../../../utils/VideoInput';
import api from '../../../api';
import { Store, UpdateStore } from '../../../StoreContext';
import { toast } from 'react-toastify';
import successPopup from '../../PopupForms/RequestSuccessfullyPopup';
import { useHistory } from 'react-router-dom';
import CourseAproved from '../../PopupForms/CourseAproved';
import { uploadPhoto } from '../../../utils/uploadMedia';
const FormStepsix = ({
  step,
  formDataOne,
  formDataTwo,
  formDataSix,
  setformDataOne,
  setformDataTwo,
  setformDataSix,
  formDataFive,
  setStep,
  setformDataFive,
}) => {
  const history = useHistory();
  const updateStore = UpdateStore();
  const { creator } = Store();
  const [uploading, setUploading] = useState(false);
  const [btnState, setBtnState] = useState(0);
  const [opens, setOpens] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  // const [videoName, setVideoName] = useState("");
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setformDataSix(file);
  //   setUploading(true);
  // };
  const handleSubmitImage = async (e) => {
    e.preventDefault();
    setBtnState(3);
    const file = e.target.files[0];
    if (!file) return;
    var fileName = file.name;
    var idxDot = fileName.lastIndexOf('.') + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

    if (
      !(
        extFile == 'jpg' ||
        extFile == 'jpeg' ||
        extFile == 'png' ||
        extFile == 'webp' ||
        extFile == 'gif' ||
        extFile == 'svg'
      )
    )
      toast.error('Only image file should be selected!');
    else {
      const formData = new FormData();
      formData.append('photos', file);
      let data = await uploadPhoto(formData, 'thumbnails');
      setformDataSix(data.url);
      setImgUrl(data.url);
      setUploading(true);
      setBtnState(0);
    }
  };

  const handleSubmitVideo = async (e) => {
    e.preventDefault();
    setBtnState(3);
    const file = e.target.files[0];
    if (!file) return;

    var fileName = file.name;
    var idxDot = fileName.lastIndexOf('.') + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

    if (!(extFile == 'mp4' || extFile == 'mov' || extFile == 'mkv'))
      toast.error('Only video files should be selected');
    else {
      const formData = new FormData();
      formData.append('photos', file);
      let data = await uploadPhoto(formData, 'thumbnails');
      setformDataSix(data.url);
      setImgUrl(data.url);
      setUploading(true);

      setBtnState(0);
    }
  };

  const handleSubmitCourse = async () => {
    console.log('Submitted');
    if (imgUrl == '') {
      return toast.error('Veuillez entrer la vignette du cours');
    }

    setBtnState(1);

    let modifiedFormDataOne = { ...formDataOne };
    modifiedFormDataOne.selectedGamename = formDataOne.selectedGamename.label;
    let data = { formDataOne: modifiedFormDataOne, formDataFive, formDataSix, id: creator._id };
    let res = await api('post', '/courses', data);
    if (res) {
      updateStore({ creator: res?.data?.creator });
      setformDataOne({
        course_name: '',
        gameName: '',
        gameLevel: '',
        gameType: '',
        gameMood: '',
        gamePlateForm: '',
        description: '',
      });
      setformDataFive([]);
      setformDataSix('');
      setBtnState(2);
      setOpens(true);
      updateStore({ contentDashboardButton: 'Courses' });
      history.push('/dashboard');
    } else {
      toast.error('Enter your email');
    }
  };
  const handleClose = () => {
    setOpens(false);
  };
  return (
    <>
      <CourseAproved
        open={opens}
        setOpen={setOpens}
        closeModal={handleClose}
        setStep={setStep}
        text=""
      />
      {/* <successPopup
        open={showPopup}
        setOpen={() => setShowPopup(!showPopup)}
        closeModal={handleClose}
      /> */}
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <br />

        <p className="stapPr">Add intro video and Thumbnail</p>
        <div className={` hrLine1`} />
        {!uploading ? (
          <div className="step6-upload-div">
            <Grid container spacing={2}>
              <div className="step_container">
                <div className="step1">
                  <p className="step1-p">Upload Course Thumbnail</p>
                  <ImageInput text="Select Image" onChange={handleSubmitImage} />
                </div>
              </div>
            </Grid>
            <Grid container spacing={2}>
              <div className="step_container">
                <div className="step1">
                  <p className="step1-p">Upload Course Introduction</p>
                  <VideoInput text="Select Video" onChange={handleSubmitVideo} />
                </div>
              </div>
            </Grid>
          </div>
        ) : (
          <p className="success">Thumnail Upload Successfully Now Submit Course</p>
        )}

        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button
            className="drafBtn"
            style={{ background: 'none', border: '1px solid #662F88' }}
            onClick={() => setStep(5)}
          >
            Previous
          </button>
          <button
            className="continueBtn"
            onClick={handleSubmitCourse}
            disabled={btnState == 0 ? false : true}
          >
            {btnState === 0
              ? 'Submit For Approval'
              : btnState === 1
              ? 'Loading'
              : btnState === 2
              ? 'Submited'
              : 'Uploading Thumnail'}
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepsix;
