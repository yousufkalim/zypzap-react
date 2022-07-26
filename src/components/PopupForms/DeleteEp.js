import React from 'react';
import '../../css/form/UploadSuccessfulPopup.css';
import Dialog from '@mui/material/Dialog';
import DeleteCourseIcon from '../../assets/icons/DeleteCourseIcon.svg';

const DeleteEp = ({ open, setOpen, handleDelete, fileToDelete }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteEp = () => {
    // const newChapter = formDataTwo?.filter((a) => a !== file);
    // setformDataTwo(newChapter);
    handleDelete(fileToDelete);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        setOpen={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="uploadSuccessDiv">
          <div className="uploadSuccess-centerDiv">
            <img src={DeleteCourseIcon} alt="" className="uloadSuccessIMG" />
            <div className="deletePupop-content">
              <p className="deletePupopP">Are you sure you want to delete {fileToDelete.name} ?</p>
              <div className="deletePupop-buttons">
                <button className="deletePupopBtn" onClick={() => handleDeleteEp()}>
                  Yes
                </button>
                <button className="deletePupopBtn" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteEp;
