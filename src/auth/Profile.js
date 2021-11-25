import React, { useState } from "react";
import { toast } from "react-toastify"
import Dialog from '@mui/material/Dialog';
import ImageUploading from 'react-images-uploading';
import Img from "../assets/profile.png"

const Profile = ({ open, setOpen }) => {
  const [data, setData] = useState({
    text: "",
    learning: "",
    learning2: "",
    learning3: "",
    images: "",

  })
  const [images, setImages] = React.useState();
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const handleChange = (e) => {
    // console.log("e is ", e.target.value)
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  const SubmitEvent = (e) => {
    e.preventDefault()
    // alert("form submit")
    if (data.text == "") {
      return toast.error("Fortnite Games")
    }
    // if (data.learning == "") {
    //   return toast.error("fill learning")
    // }
    // if (data.learning2 == "") {
    //   return toast.error("fil box ")
    // }
    // if (data.learning3 == "") {
    //   return toast.error("fil input")
    // }

    setData({ text: "" , images : "" })

  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <div className="profile_Details">
          <div className="profile_container">
            <h1 className="profileH1">Profile Information</h1>
            <p className="profile_pera">Input your details</p>

            <div className="profile">
            </div> <ImageUploading
              // multiple
              name="images"
              value={data.images}
              onChange={handleChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <img src={Img}
                    style={isDragging ? { color: 'red', } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                    className="profile_pic"
                  />
                  <p className="proP" style={{ display: "inline" }} >Upload Pichure</p>
                  &nbsp;

                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      {/* <img src={Img}/> */}
                      {/* <img src={Img} alt="" /> */}
                      <img className="img_div" src={image['data_url']} alt="" width="100" onClick={() => onImageUpdate(index)} />
                      <div className="image-item__btn-wrapper">
                        {/* <button >Update</button> */}

                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
            <form action="" onSubmit={SubmitEvent}>
              {/* 1 */}
              <label htmlFor="text" className="profileP">Favorite Games</label>
              <input className="profileInput" type="text" placeholder="Fortnite"
                name="text"
                value={data.text}
                onChange={handleChange} />
              {/* 2 */}
              <label className="selectformControl" for="cars">Learning Rythm</label>
              <select id="leaning" className="selectforeducation1"
                name="learning"
                value={data.learning}
                onChange={handleChange}
              >
                <option className="learnOpt" value="volvo">Per Week</option>
                <option className="learnOpt" value="saab">Saab</option>
                <option className="learnOpt" value="opel">Opel</option>
                <option className="learnOpt" value="audi">Audi</option>
              </select>
              <select id="leaning" className="selectforeducation2"
                name="learning"
                value={data.learning}
                onChange={handleChange}
              >
                <option className="learnOpt" value="volvo">2 Hours</option>
                <option className="learnOpt" value="saab">Saab</option>
                <option className="learnOpt" value="opel">Opel</option>
                <option className="learnOpt" value="audi">Audi</option>
              </select>
              {/* 3 */}
              <div className="selectformControl2">
                <label for="cars">Current Level</label>
              </div>
              <br />
              <select id="leaning" className="selectforeducation1"
                name="learning2"
                value={data.learning2}
                onChange={handleChange}
              >
                <option className="learnOpt" value="volvo">Medium</option>
                <option className="learnOpt" value="saab">Saab</option>
                <option className="learnOpt" value="opel">Opel</option>
                <option className="learnOpt" value="audi">Audi</option>
              </select>
              <labspael className="target_level" for="cars">Target Level</labspael>
              <select id="leaning" className="selectforeducation2"
                name="learning3"
                value={data.learning3}
                onChange={handleChange}
              >
                <option className="learnOpt" value="volvo">Pro</option>
                <option className="learnOpt" value="saab">Saab</option>
                <option className="learnOpt" value="opel">Opel</option>
                <option className="learnOpt" value="audi">Audi</option>
              </select>
              <button type="submit" className="profileBTN">Continue</button>
              <button className="backBTN2">Back</button>
            </form>
          </div>
        </div>

      </Dialog>
    </>
  )
}

export default Profile
