import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import VideoInput from '../../utils/VideoInput';
import Fireicon from '../../assets/icons/Fireicon.png';
import '../../css/form/EditCoursePopup.css';
import Grid from '@mui/material/Grid';
import UploadSuccessfulPopup from './UploadSuccessfulPopup';
import { toast } from 'react-toastify';
import { Store, UpdateStore } from '../../StoreContext';
import UploadingTheCourse from '../PopupForms/UploadingTheCourse';
import { uploadVideo } from '../../utils/uploadMedia';
import { controller } from '../../utils/uploadMedia';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';

import api from '../../api';
import { gameApi } from '../../config';
const EditCoursePopup = ({ open, setOpen, course, setOpenS }) => {
  const { Games, creator } = Store();
  const [values, setValues] = useState([]);
  const [showPopup, setShowPopup] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [mbPerSecond, setmbPerSecond] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imgUrl, setImgUrl] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [videoName, setVideoName] = useState('');
  const [game, setGame] = useState(Games ? Games : []);
  const [timeUploadRemaining, setTimeUploadRemaining] = useState(0);
  const [formDataTwo, setformDataTwo] = useState([]);
  const [formDataFive, setformDataFive] = useState([]);

  const [videouploaded, setvideouploaded] = React.useState(false);
  const [formDataOne, setformDataOne] = useState({
    course_name: course?.course_name,
    gameName: '',
    selectedGamename: course?.selectedGamename,
    gameLevel: course?.gameLevel,
    gameType: course?.gameType,
    gameMood: course?.gameMood,
    gamePlateForm: course?.gamePlateForm,
    description: course?.description
  });
  console.log('courseforEdit', course);
  console.log('formDataTwo for edit', formDataTwo);
  console.log('formDatafive for edit', formDataFive);
  const useStyles = makeStyles({
    customTextField: {
      '& input': { color: 'white' },
      '&:hover': {
        border: 'red !important'
      },
      '& input::placeholder': {
        color: 'white',
        '@media (max-width: 780px)': {
          paddingLeft: '-2px'
        }
      }
    },
    option: {
      background: '#242635 ',
      color: 'white',
      '&:hover': {
        backgroundColor: '#9198a5 !important'
      }
    },
    noOptions: {
      display: `${'inherit'}`,
      color: 'white'
    }
  });
  const classes = useStyles();
  const {
    course_name,
    gameName,
    selectedGamename,
    gameLevel,
    gameType,
    gameMood,
    gamePlateForm,
    description
  } = formDataOne;

  useEffect(() => {
    setformDataOne({
      course_name: course?.course_name,
      selectedGamename: course?.selectedGamename,
      gameLevel: course?.level,
      gameType: course?.gameType,
      gameMood: course?.mode,
      gamePlateForm: course?.plateform,
      description: course?.description
    });
  }, [course]);
  useEffect(() => {
    setGame(Games ? Games : []);
  }, [Games]);
  const chnageEvent = (e) => {
    setformDataOne({
      ...formDataOne,
      [e.target.name]: e.target.value
    });
  };
  const handleSave = async () => {
    const data = { formDataOne, formDataFive, id: course?._id };
    let res = await api('put', '/courses', data);
    if (res) {
      // setShowPopup(true);
      setformDataTwo([]);
      setformDataFive([]);
      setOpen(false);
      // setOpens(true);
    } else {
      return toast.error('Courses not update try again');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        toast.error(
          'Please select video files. Only video files will be uploaded'
        );
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
            duration: duration?.toFixed(2)
          };

          newArray = [...newArray, fileData];
          setformDataTwo(newArray);
          setUploading(true);
          // now upload video and get id for formdatagive
          let newArrayfive = [...formDataFive];
          for (let i = formDataFive?.length; i < newArray?.length; i++) {
            if (newArray[i]?.name === '') {
              newArray[i].name = newArray[i]?.file?.name;
            }
            let file = await handleSingleVideo(newArray[i]);
            // setUploadedVideos([...uploadedVideos, newArray[i]]);
            newArrayfive = [...newArrayfive, file._id];
            setformDataFive(newArrayfive);
          }
        } catch (err) {
          console.log(err);
        }

        if (i !== files.length - 1) setProgress(0);
        setTimeUploadRemaining(`0 sec left`);
      }
    }

    file.target.value = '';
  };

  const getAllGames = async (e) => {
    setformDataOne({
      ...formDataOne,
      [e.target.name]: e.target.value
    });

    const res = await axios.get(
      `https://api.rawg.io/api/games?key=${gameApi}=` +
        e.target.value +
        '&page=1&page_size=10',
      {
        withCredentials: false
      }
    );

    var gamesToSet = res?.data?.results?.map((game) => {
      return game.name;
    });

    setValues(gamesToSet);
  };
  const setGamefiled = async (item, value) => {
    setformDataOne({
      ...formDataOne,
      ['selectedGamename']: value,
      ['gameName']: value
    });
  };
  const handleSingleVideo = async (file) => {
    return new Promise(async (resolve, reject) => {
      file.creator = creator._id;
      let res = await api('post', '/videos', file);
      if (res) {
        resolve(res.data);
      } else {
        reject(null);
      }
    });
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
        setvideouploaded={setvideouploaded}
      />
      {/* <RequestSuccessfullyPopup open={open} setOpen={setOpen} /> */}
      <div>
        <Dialog
          fullWidth="true"
          maxWidth="md"
          open={open}
          className="editCoursePopup"
          style={{ backdropFilter: 'blur(20px)' }}
        >
          {/* /* -------------------------------- main div --------------------------------  */}
          <div className="formStepOneDiv" style={{ margin: '0px' }}>
            <p className="coursedetail2">Edit the course</p>
            <div className="hrLine1" />
            <div className="courseDivContainer">
              {/* /* -------------------------------- main div --------------------------------  */}

              <div className="courseDiv">
                <div className="step_container" style={{ display: 'block' }}>
                  <Grid xs={12} sm={6}>
                    <div>
                      <p className="stepLabel">Course Details </p>
                      <input
                        name="course_name"
                        type="text"
                        className="coursInput"
                        placeholder="learn how to play minacraft"
                        value={course_name ? course_name : ''}
                        onChange={chnageEvent}
                      />
                    </div>
                  </Grid>
                </div>
                <Grid xs={12} sm={6}>
                  <div>
                    <p className="stepLabel">Game Name</p>
                    <Autocomplete
                      options={values}
                      value={formDataOne.selectedGamename}
                      classes={{
                        option: classes.option
                      }}
                      id="controllable-states-demo"
                      className="coursInputAutofiled"
                      noOptionsText={
                        <div style={{ color: 'white', fontSize: '12px' }}>
                          {' '}
                          no option{' '}
                        </div>
                      }
                      PaperComponent={({ children }) => (
                        <Paper style={{ background: '#242635' }}>
                          {children}
                        </Paper>
                      )}
                      getOptionLabel={(option) => option || ''}
                      onChange={setGamefiled}
                      hiddenLabel="true"
                      style={{
                        margin: 'auto'
                      }}
                      renderInput={(params) => (
                        <TextField
                          classes={{ root: classes.customTextField }}
                          {...params}
                          placeholder="Game Name "
                          style={{ color: 'white' }}
                          variant="outlined"
                          onChange={getAllGames}
                          value={gameName}
                          name="gameName"
                        />
                      )}
                    />
                  </div>
                </Grid>
                <Grid container>
                  <Grid xs={12} sm={12}>
                    <div>
                      <p className="stepLabel">Gameplay level</p>
                      <select
                        id="gameLevel"
                        name="gameLevel"
                        className="stepSelect"
                        value={gameLevel}
                        onChange={chnageEvent}
                      >
                        <option value="Casual" className="setepOption">
                          Casual
                        </option>
                        <option value="Confirmed" className="setepOption">
                          Confirmed
                        </option>
                        <option value="Hardcore" className="setepOption">
                          Hardcore
                        </option>
                        <option value="Esporter" className="setepOption">
                          Esporter
                        </option>
                      </select>
                    </div>
                  </Grid>
                </Grid>
              </div>
              {/* /* -------------------------------- main div --------------------------------  */}
              {/* /* -------------------------------- main div --------------------------------  */}
              <div></div>
              <div className="courseDiv">
                <Grid container className="step_container">
                  {/* <Grid container> */}
                  <Grid xs={12} sm={12}>
                    <div>
                      <p className="stepLabel">Game Type</p>

                      <select
                        id="gameType"
                        name="gameType"
                        className="stepSelect"
                        value={gameType}
                        onChange={chnageEvent}
                      >
                        <option value="Action" className="setepOption">
                          Action
                        </option>
                        <option value="Adventure" className="setepOption">
                          Adventure
                        </option>
                        <option value="Metaverse" className="setepOption">
                          MetaVerse
                        </option>
                        <option value="MMOG" className="setepOption">
                          MMOG
                        </option>
                        <option value="Car Racing" className="setepOption">
                          Car Racing
                        </option>
                        <option value="Versus Fighting" className="setepOption">
                          Versus Fighting
                        </option>
                        <option value="FPS" className="setepOption">
                          FPS
                        </option>
                        <option value="RTS" className="setepOption">
                          RTS
                        </option>
                        <option value="RPG" className="setepOption">
                          RPG
                        </option>
                        <option
                          value="Turn by Turn Strategy"
                          className="setepOption"
                        >
                          Turn by Turn Strategy
                        </option>
                        <option value="Simulation" className="setepOption">
                          Simulation
                        </option>
                        <option value="Sports" className="setepOption">
                          Sport
                        </option>
                        <option value="Trading Card" className="setepOption">
                          Trading Card
                        </option>
                        <option value="Puzzle" className="setepOption">
                          Puzzle
                        </option>
                      </select>
                    </div>
                  </Grid>
                  <Grid xs={12} sm={12}>
                    <div>
                      <p className="stepLabel">Gaming Mode</p>
                      <select
                        id="gameMood"
                        name="gameMood"
                        className="stepSelect"
                        value={gameMood}
                        onChange={chnageEvent}
                      >
                        <option value="Single" className="setepOption">
                          Single
                        </option>
                        <option value="Multiplayer" className="setepOption">
                          Multiplayer
                        </option>
                        <option value="Both" className="setepOption">
                          Both
                        </option>
                      </select>
                    </div>
                  </Grid>
                  <Grid xs={12} sm={12}>
                    <div>
                      <p className="stepLabel">Gaming Platform</p>
                      <select
                        id="gamePlateForm"
                        name="gamePlateForm"
                        className="stepSelect"
                        value={gamePlateForm}
                        onChange={chnageEvent}
                      >
                        <option value="Retro Consoles" className="setepOption">
                          Retro Consoles
                        </option>
                        <option value="PS1/2/3/4/5" className="setepOption">
                          PS1/2/3/4/5
                        </option>
                        <option value="Xbox/360/One/X" className="setepOption">
                          Xbox/360/One/X
                        </option>
                        <option value="Mobile Games" className="setepOption">
                          Mobile Games
                        </option>
                        <option
                          value="Portable Consoles"
                          className="setepOption"
                        >
                          Portable Consoles
                        </option>
                        <option value="PC" className="setepOption">
                          PC
                        </option>
                      </select>
                    </div>
                  </Grid>
                </Grid>
                {/* </Grid> */}
              </div>
              {/* /* -------------------------------- main div --------------------------------  */}
            </div>
            <label htmlFor="" className="stepLabel">
              Course description
            </label>
            <textarea
              name="description"
              id=""
              cols="200"
              rows="20"
              placeholder="300 characters maximum"
              className="courstexarea"
              value={description}
              onChange={chnageEvent}
            ></textarea>
            {videouploaded ? (
              <>
                {' '}
                {formDataTwo?.map((file, index) => {
                  return (
                    <>
                      <div>Vide uploaded</div>
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
                            disabled
                            value={file?.name ? file.name : ''}
                            // onChange={(e) => handleChange(e, index)}
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <Grid container spacing={2}>
                <div className="step_container2">
                  <div className="step1">
                    <p className="stapPr">Upload Full Course</p>
                    <VideoInput
                      id="1"
                      text="Select Video"
                      onChange={handleSubmit}
                    />
                  </div>
                  <div className="step2"></div>
                </div>
              </Grid>
            )}
            <div className="coursDetailBtn">
              <button className="drafBtn" onClick={handleClose}>
                Cancel
              </button>
              <button className="continueBtn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
          {/* /* -------------------------------- main div --------------------------------  */}
        </Dialog>
      </div>
    </>
  );
};

export default EditCoursePopup;
