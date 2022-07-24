import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import VideoInput from '../../../utils/VideoInput';
import api from '../../../api';
import RequestSuccessfullyPopup from '../../PopupForms/RequestSuccessfullyPopup';
import UploadingTheCourse from '../../PopupForms/UploadingTheCourse';
import { toast } from 'react-toastify';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../utils/firebase';
import axios from 'axios';
import { mediaServerUrl } from '../../../config';

const FormStepTwo = ({ step, setStep, formDataTwo, setformDataTwo }) => {
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = useState(0);
  const [opens, setOpens] = React.useState(false);
  const [activeUploadButton, setActiveUploadButton] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState([]);
  const [videoName, setVideoName] = useState('');
  const [mbPerSecond, setmbPerSecond] = useState(0);
  const [timeUploadRemaining, setTimeUploadRemaining] = useState(0);
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  const handleSubmit = async (file) => {
    // e.preventDefault();
    const files = file.target.files;
    if (!files) return;
    let newArray = ([] = formDataTwo);
    for (let i = 0; i < files.length; i++) {
      const url = await singlefileUpload(files[i]);
      setImgUrl(...imgUrl, url);
      const fileData = { name: files[i].name, path: url, file: files[i] };
      newArray = [...newArray, fileData];
      setformDataTwo(newArray);
      if (i !== files.length - 1) setProgress(0);
      setUploading(true);
      setTimeUploadRemaining(`0 sec left`);
    }
  };

  const singlefileUpload = async (file) => {
    if (!file) return;
    return new Promise(async (resolve, reject) => {
      setVideoName(file.name);
      setOpens(true);

      const formData = new FormData();
      formData.append('videos', file);

      // file upload speed code
      let bytesTransferred = null;
      let bytesTransferredTime = null; //new Date().getTime();
      let totalBytesTransferred = 0;
      let updateDurationThreshold = 2000;
      let speed = 0;

      try {
        const response = await axios.post(`${mediaServerUrl}/uploads/videos/coursetwo`, formData, {
          withCredentials: false,
          cancelToken: source.token,
          onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            if (bytesTransferredTime == null) {
              bytesTransferred = loaded;
              bytesTransferredTime = new Date().getTime();
              totalBytesTransferred += loaded;
              speed = 0;
            } else {
              let now = new Date().getTime();
              let _duration = now - bytesTransferredTime;
              if (_duration > updateDurationThreshold) {
                let bytesPerSecond = (loaded - bytesTransferred) / updateDurationThreshold;

                bytesTransferred = loaded;

                bytesTransferredTime = now;
                let newbytesPerSecond = bytesPerSecond / 1024;
                setmbPerSecond(newbytesPerSecond.toFixed(3));
                let remTime = (((total - loaded) / bytesPerSecond) * 2) / (updateDurationThreshold - 1000);
                totalBytesTransferred += bytesTransferred;
                remTime = remTime.toFixed(0);
                if (remTime <= 60) remTime = `${remTime} sec left`;
                if (remTime > 60 && remTime < 3600) {
                  remTime = (remTime / 60).toFixed(2);
                  remTime = `${remTime} min left`;
                }

                if (remTime > 3600) {
                  remTime = (remTime / 3600).toFixed(2);
                  remTime = `${remTime} hour left`;
                }
                setTimeUploadRemaining(remTime);
              }
            }
            const progress = Math.round((loaded / total) * 100);
            setProgress(progress);
          },
        });

        const url = response.data.url;
        resolve(url);
      } catch (err) {
        toast.error('Error uploading file');
        reject();
      }
    });
  };

  // const handleClick = () => {};
  const handleActiveUploadButton = (i) => {
    setActiveUploadButton(i);
  };

  const handleFileChange1 = (event) => {
    const files = [...event.target.files];
    if (files) {
      setUploading(true);
    }
    setformDataTwo(files);
  };
  const handleVideo = () => {
    if (formDataTwo.length === 0) {
      return toast.error('Sélectionnez la vidéo pour la prochaine étape');
    }
    setStep(5);
  };
  return (
    <>
      <UploadingTheCourse
        open={opens}
        setOpen={setOpens}
        handleAbort={() => source.cancel()}
        progress={progress}
        setProgress={setProgress}
        videoName={videoName}
        imgUrl={imgUrl}
        uploading={uploading}
        mbPerSecond={mbPerSecond}
        timeUploadRemaining={timeUploadRemaining}
        setformDataTwo={setformDataTwo}
      />
      <RequestSuccessfullyPopup open={open} setOpen={setOpen} />
      <div className="formStepOneDiv">
        <p>Step {step}/6</p>
        <div className="uploadBtnDiv">
          <h2
            className={`
             ${activeUploadButton == 1 && 'ActiveLine'} 
            uploadCoursebtn`}
            onClick={() => handleActiveUploadButton(1)}
          >
            Upload Course
          </h2>

          <h2
            className={`
             ${activeUploadButton == 2 && 'ActiveLine'} 
            RecordButton`}
            onClick={() => handleActiveUploadButton(2)}
          >
            Record Course
          </h2>
          <button className="coming-SoonBYN">Coming soon</button>
        </div>
        <div className={` hrLine1`} />

        {activeUploadButton == 1 ? (
          <>
            {!uploading ? (
              <Grid container spacing={2}>
                <div className="step_container2">
                  <div className="step1">
                    <p className="stapPr">Upload Full Course</p>
                    <VideoInput id="1" text="Select Video" onChange={handleSubmit} />
                  </div>
                  <p className="step_or" onClick={() => setOpens(true)}>
                    or
                  </p>
                  <div className="step2">
                    <p className="stapPr2">Upload Chapters</p>
                    <VideoInput
                      id="2"
                      text="Select Chapter"
                      // onChange={handleFileChange1}
                    />
                  </div>
                </div>
              </Grid>
            ) : (
              <p className="success">Video Upload Successfully Please Continue!</p>
            )}
          </>
        ) : (
          <div>
            <h1>Record Course</h1>
          </div>
        )}

        <div className="coursDetailBtn">
          <button className="drafBtn">Draft</button>
          <button className="drafBtn" style={{ background: 'none', border: '1px solid #662F88' }} onClick={() => setStep(1)}>
            Previous
          </button>
          <button onClick={handleVideo} className="continueBtn">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FormStepTwo;
