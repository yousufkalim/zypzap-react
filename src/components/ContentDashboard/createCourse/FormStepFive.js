import React, { useState, useEffect } from 'react';
import Fireicon from '../../../assets/icons/Fireicon.png';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '../../../assets/icons/EditIcon.svg';
import DeleteIcon from '../../../assets/icons/DeleteIcon.svg';
import api from '../../../api';
import { toast } from 'react-toastify';
import { Store, UpdateStore } from '../../../StoreContext';
import { CircularProgress } from '@material-ui/core';
import DeleteEp from '../../PopupForms/DeleteEp';
import { useHistory } from 'react-router-dom';

const FormStepFive = ({
  step,
  setStep,
  setformDataTwo,
  formDataTwo,
  formDataFive,
  formDataOne,
  setformDataFive
}) => {
  const { creator, singleDraft } = Store();
  const history = useHistory();
  const updateStore = UpdateStore();
  const [creatorId, setCreatorId] = useState(creator ? creator?._id : null);
  const [lodding, setlodding] = useState(false);
  const [fileToDelete, setFileToDelete] = useState({});
  const [open, setOpen] = useState(false);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  // const [newVideos, setNewVideos] = useState([]);

  const handleDelete = (file) => {
    const newChapter = formDataTwo?.filter((a) => a !== file);
    setformDataTwo(newChapter);
  };

  const handleSubmit = async () => {
    if (formDataTwo.length === 0) {
      toast.error('Veuillez sélectionner une vidéo pour ce cours');
      setStep(2);
    } else {
      let newArray = [...formDataFive];
      if (formDataFive.length < formDataTwo.length) {
        setlodding(true);
        for (let i = formDataFive?.length; i < formDataTwo?.length; i++) {
          if (formDataTwo[i]?.name === '') {
            formDataTwo[i].name = formDataTwo[i]?.file?.name;
          }
          let file = await handleSingleVideo(formDataTwo[i]);
          // setUploadedVideos([...uploadedVideos, formDataTwo[i]]);
          newArray = [...newArray, file._id];
          setformDataFive(newArray);
          if (formDataTwo.length === 1) setStep(6);
          if (i == formDataTwo.length - 1) {
            setStep(6);
          }
        }
      } else {
        setStep(6);
      }
    }
  };
  const handleSingleVideo = async (file) => {
    return new Promise(async (resolve, reject) => {
      file.creator = creatorId;
      let res = await api('post', '/videos', file);
      if (res) {
        resolve(res.data);
      } else {
        reject(null);
      }
    });
  };
  const handleEdit = (file, index) => {};
  const handleChange = (e, index) => {
    setformDataTwo((prev) => {
      prev[index].name = e.target.value;
      return [...prev];
    });
  };

  const handleDraft = async () => {
    let data = {
      formDataOne,
      formDataTwo,
      formDataFive,
      step,
      id: creator._id
    };
    if (singleDraft) {
      let res = await api('put', '/draft', {
        ...data,
        draftId: singleDraft?._id
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
      <DeleteEp
        open={open}
        setOpen={setOpen}
        formDataTwo={formDataTwo}
        setformDataTwo={setformDataTwo}
        handleDelete={handleDelete}
        fileToDelete={fileToDelete}
      />
      <div className={!lodding ? 'formStepOneDiv' : 'disableDiv'}>
        <p>Step 3/4</p>
        <h2 className="coursedetail">Uploaded Episode</h2>
        <div className="hrLine1" />
        {formDataTwo?.map((file, index) => {
          return (
            <div className="step3_container">
              <div className="step3Counting">{index + 1}-</div>
              <div className="step3Img">
                <img src={Fireicon} alt="" />
              </div>
              <div className="step3Input">
                <input
                  id={index}
                  type="text"
                  placeholder="Title"
                  className="step3_inputs"
                  value={file?.name ? file.name : ''}
                  onChange={(e) => handleChange(e, index)}
                />
                <img
                  className="editIcon"
                  src={EditIcon}
                  alt=""
                  onClick={() => handleEdit(file)}
                />
                <img
                  className="deleteIcon"
                  src={DeleteIcon}
                  alt=""
                  onClick={() => {
                    setOpen(true);
                    setFileToDelete(file);
                  }}
                />
              </div>
            </div>
          );
        })}
        <div className="coursDetailBtn">
          <button disabled={lodding} className="drafBtn" onClick={handleDraft}>
            Draft
          </button>
          <button
            className="drafBtn"
            disabled={lodding}
            style={{ background: 'none', border: '1px solid #662F88' }}
            onClick={() => setStep(2)}
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            disabled={lodding}
            className="continueBtn"
          >
            {lodding ? 'Loading' : 'Continue'}
          </button>
        </div>
        {lodding ? (
          <CircularProgress
            size={70}
            thickness={3.5}
            style={{
              position: 'absolute',
              top: '50%',
              left: '55%',
              color: 'white'
            }}
          />
        ) : (
          ''
        )}
      </div>
      {/* <DeleteEpisodePUBG /> */}
    </>
  );
};

export default FormStepFive;
