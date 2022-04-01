import React from "react";
import Videoicon from "../../src/assets/icons/Videoicon.png";

const VideoInput = ({ text, onChange }) => {
  const inputRef = React.useRef();

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <>
      <div className="VideoInput">
        <input
          ref={inputRef}
          className="VideoInput_input"
          type="file"
          onChange={onChange}
          accept=".mov,.mp4"
          multiple
          name="files[]"
        />
        <button onClick={handleChoose} className="uploadBtn">
          <img src={Videoicon} alt="" />
          <p className="videoP">{text}</p>
        </button>
      </div>
    </>
  );
};

export default VideoInput;
