import React, { useState, useEffect } from "react";
import Fireicon from "../../../assets/icons/Fireicon.png";
import AddIcon from "@mui/icons-material/Add";
import api from "../../../api";
import { toast } from "react-toastify";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import { Store, UpdateStore } from "../../../StoreContext";
import DeleteEpisodePUBG from "../../PopupForms/DeleteEpisodePUBG";
import CancleDelete from "../../PopupForms/CancleDelete";
const DeleteEpisode = ({ open, setOpen, course }) => {
  const { creator } = Store();
  const [creatorId, setCreatorId] = useState(creator ? creator._id : null);
  const [lodding, setlodding] = useState(false);
  const [videos, setVideos] = useState(course?.videos ? course.videos : []);
  const [successPopup, setsuccessPopup] = useState(false);
  const [errorPupop, seterrorPupop] = useState(false);
  const [deletedFile, setDeletedFile] = useState({ file: "", index: 0 });
  const [showCancleDeletePopup, setShowCancleDeletePopup] = useState(false);
  //   const [uploadedVideos, setUploadedVideos] = useState([]);
  //   // const [newVideos, setNewVideos] = useState([]);

  //   const handleDelete = (file) => {
  //     const newChapter = formDataTwo?.filter((a) => a !== file);
  //     setformDataTwo(newChapter);
  //   };
  //   const handleSubmit = async () => {
  //     if (formDataTwo.length === 0) {
  //       if (formDataFive.length === 0) {
  //         toast.error("Veuillez sélectionner une vidéo pour ce cours");
  //         setStep(2);
  //       }
  //       setStep(6);
  //     }
  //     setlodding(true);
  //     let newArray = [...formDataFive];
  //     for (let i = formDataFive?.length; i < formDataTwo.length; i++) {
  //       if (formDataTwo[i].name === "") {
  //         formDataTwo[i].name = formDataTwo[i]?.file?.name;
  //       }
  //       let file = await handleSingleVideo(formDataTwo[i]);
  //       // setUploadedVideos([...uploadedVideos, formDataTwo[i]]);
  //       newArray = [...newArray, file._id];
  //       setformDataFive(newArray);
  //       if (formDataTwo.length === 1) setStep(6);
  //       if (i == formDataTwo.length - 1) {
  //         setStep(6);
  //       }
  //     }
  //   };
  //   const handleSingleVideo = async (file) => {
  //     return new Promise(async (resolve, reject) => {
  //       file.creator = creatorId;
  //       let res = await api("post", "/videos", file);
  //       if (res) {
  //         resolve(res.data);
  //       } else {
  //         reject(null);
  //       }
  //     });
  //   };
  //   const handleEdit = (file, index) => {};
  //   const handleChange = (e, index) => {
  //     setformDataTwo((prev) => {
  //       prev[index].name = e.target.value;
  //       return [...prev];
  //     });
  //   };
  useEffect(() => {
    setVideos(course?.videos ? course.videos : []);
  }, [course]);
  const handleClick = (file) => {
    const newChapter = videos?.filter((a) => a !== file);
    setVideos(newChapter);
  };
  const handleSubmit = async (file, index) => {
    console.log("index", index);
    const Id = course?.creator?._id;
    const id = course?._id;
    const data = { video: file, id: Id };
    let res = await api("put", `/courses/${id}`, data);
    console.log("res", res);
    if (res) {
      course = res.data;
      setDeletedFile({ file: file, index: index });
      const newChapter = videos?.filter((a) => a !== file);
      setVideos(newChapter);
      setsuccessPopup(true);
      // setOpen(false);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <div className="mainEpisodeDiv"> */}
      <DeleteEpisodePUBG
        open={successPopup}
        setOpen={setsuccessPopup}
        text={deletedFile}
      />
      <CancleDelete
        open={showCancleDeletePopup}
        setOpen={setShowCancleDeletePopup}
        text={deletedFile}
      />
      <Dialog
        open={open}
        setOpen={setOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="mainEpisodeDiv"
      >
        <div className="formStepOneDiv">
          <h2 className="coursedetail1">Delete Episode</h2>
          <div className="hrLine1" />
          {videos?.map((file, index) => {
            return (
              <div className="step3_container">
                <div className="step3Counting">{index}-</div>
                <div className="step3Img">
                  <img src={Fireicon} alt="" />
                </div>
                <div className="step3Input1">
                  <input
                    id={index}
                    type="text"
                    placeholder="Title"
                    className="step3_inputs"
                    value={file?.title ? file.title : ""}
                    // onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="step3Img1">
                  <button
                    className="continueBtn"
                    onClick={() => handleSubmit(file, index)}
                  >
                    Delete Episode
                  </button>
                </div>
              </div>
            );
          })}
          <div className="coursDetailBtn">
            <button className="continueBtn">
              {lodding ? "lodding" : "Continue"}
            </button>
          </div>
        </div>
      </Dialog>
      {/* </div> */}
    </>
  );
};

export default DeleteEpisode;
