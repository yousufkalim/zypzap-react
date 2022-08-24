import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import '../../css/form/UploadSuccessfulPopup.css';
import UploadSuccessLog from '../../assets/icons/UploadSuccessLog.svg';
import UploadedEpisodePopup from './UploadedEpisodePopup';

const UploadCancalled = ({ open, setOpen, setUploading, setProgress }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleClick = () => {
    setShowDeletePopup(true);
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
    // setUploading(false);
    // setProgress(0);
  };
  return (
    <div>
      <UploadedEpisodePopup
        open={showDeletePopup}
        setOpen={setShowDeletePopup}
      />
      <Dialog
        open={open}
        setOpe={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv">
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            <p className="uploadSuccessP">Upload successfull</p>
            <button className="uploadSuccessBTN" onClick={handleClose}>
              Done
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UploadCancalled;
