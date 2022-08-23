import React from 'react';
import Dialog from '@mui/material/Dialog';
import UploadSuccessLog from '../../assets/icons/UploadSuccessLog.svg';
import ClearIcon from '@mui/icons-material/Clear';
import Rating from '@mui/material/Rating';
import api from '../../api';
import { toast } from 'react-toastify';
import { Store, UpdateStore } from '../../StoreContext';

const CongratsYouDidPopup = ({
  showPopup,
  setShowPopup,
  singlCourse,
  rating
}) => {
  const { user } = Store();
  const [value, setValue] = React.useState(5);
  const handleClose = () => {
    setShowPopup(false);
  };
  const handleSubmit = async () => {
    rating = rating?.filter((rat) => rat.rating_by == user?._id);

    if (rating.length >= 1) {
      let res = await api('put', `/ratings/${rating[0]?._id}`, {
        rating: value,
        course: singlCourse._id,
        rating_by: user?._id
      });
      if (res) {
        setShowPopup(false);
      }
      setShowPopup(false);
      return;
    }
    let res = await api('post', `/ratings`, {
      rating: value,
      course: singlCourse._id,
      rating_by: user?._id
    });
    if (res) {
      setShowPopup(false);
    }
  };
  return (
    <div>
      <Dialog
        id="didItPopUp"
        open={showPopup}
        setOpen={setShowPopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <div className="uploadSuccessDiv">
          {window.innerWidth < 601 ? (
            ''
          ) : (
            <ClearIcon className="subsclearIcon" onClick={handleClose} />
          )}
          <div className="uploadSuccess-centerDiv">
            <img src={UploadSuccessLog} alt="" className="uloadSuccessIMG" />
            <p className="congtratsYouP">Congrats You did it!</p>
            <p className="congtratsYouP2">
              Rate your Experience with {singlCourse.course_name}
            </p>
            <div className="congratsStarBar">
              <Rating
                className="congtratsYouPopup"
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <br />
            <button className="uploadSuccessBTN" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default CongratsYouDidPopup;
