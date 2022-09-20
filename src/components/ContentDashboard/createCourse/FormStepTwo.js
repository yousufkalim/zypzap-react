import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import VideoInput from '../../../utils/VideoInput';
import api from '../../../api';
import RequestSuccessfullyPopup from '../../PopupForms/RequestSuccessfullyPopup';
import UploadingTheCourse from '../../PopupForms/UploadingTheCourse';
import { toast } from 'react-toastify';
import { Store, UpdateStore } from '../../../StoreContext';
import { uploadVideo } from '../../../utils/uploadMedia';
import { controller } from '../../../utils/uploadMedia';
import { useHistory } from 'react-router-dom';

const FormStepTwo = ({ step, setStep, formDataOne, formDataTwo, setformDataTwo }) => {
  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = useState(0);
  const [opens, setOpens] = React.useState(false);
  const [activeUploadButton, setActiveUploadButton] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [imgUrl, setImgUrl] = useState([]);
  const [videoName, setVideoName] = useState('');
  const [mbPerSecond, setmbPerSecond] = useState(0);
  const [timeUploadRemaining, setTimeUploadRemaining] = useState(0);
  const { creator, singleDraft } = Store();
  const updateStore = UpdateStore();
  const history = useHistory();

  const getVideoDuration = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const media = new Audio(reader.result);
        media.onloadedmetadata = () => resolve(media.duration);
      };
      reader.readAsDataURL(file);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (file) => {
    // e.preventDefault();
    const files = file.target.files;
    if (!files) return;

    let newArray = ([] = formDataTwo);

    let aborted = false;

    controller.signal.addEventListener('abort', () => {
      aborted = true;
    });

    for (let i = 0; i < files.length; i++) {
      if (aborted) {
        break;
      }
      const duration = await getVideoDuration(files[i]);
      var filename = files[i].name;
      if (!filename.match(/\.(mp4|mpeg|mov)$/)) {
        toast.error('Please select video files. Only video files will be uploaded');
        setUploading(false);
        setProgress(0);
        setOpen(false);
      } else {
        try {
          const url = await uploadVideo(
            files[i],
            creator._id,
            setVideoName,
            setOpens,
            setmbPerSecond,
            setTimeUploadRemaining,
            setProgress
          );
          setImgUrl(...imgUrl, url);
          const fileData = {
            name: files[i].name,
            path: url,
            file: files[i],
            duration: duration?.toFixed(2),
          };

          newArray = [...newArray, fileData];
          setformDataTwo(newArray);

          setUploading(true);
        } catch (err) {
          console.log(err);
        }

        if (i !== files.length - 1) setProgress(0);
        setTimeUploadRemaining(`0 sec left`);
      }
    }

    file.target.value = '';
  };
  console.log('formDatatwo with dur', formDataTwo);

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
  const handleDraft = async () => {
    console.log('step on 2/4', step);
    let data = { formDataOne, formDataTwo, step, id: creator._id };
    if (singleDraft) {
      let res = await api('put', '/draft', {
        ...data,
        draftId: singleDraft?._id,
      });
      if (res) {
        // updateStore({ draft: res?.data });
        updateStore({ contentDashboardButton: 'Courses' });
        history.push('/dashboard');
      }
    } else {
      let res = await api('post', '/draft', data);
      if (res) {
        updateStore({ draft: res?.data });
        updateStore({ contentDashboardButton: 'Courses' });
        history.push('/dashboard');
        // setBtnState(2);
      }
    }
  };
  return (
    <>
      <UploadingTheCourse
        open={opens}
        setOpen={setOpens}
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
        <p>Step 2/4</p>
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
              <p className="success">Video Uploaded Successfully, Please Continue!</p>
            )}
          </>
        ) : (
          <div>
            <h1>Record Course</h1>
          </div>
        )}

        <div className="coursDetailBtn">
          <button className="drafBtn" onClick={handleDraft}>
            Draft
          </button>
          <button
            className="draftBtn1"
            style={{ border: '1px solid #662F88' }}
            onClick={() => setStep(1)}
          >
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
