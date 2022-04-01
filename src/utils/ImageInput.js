import React from "react";
import ImageIcon from "../../src/assets/icons/ImageIcon.svg";

const ImageInput = ({ text, onChange }) => {
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
          // accept=".mov,.mp4"
        />
        <button onClick={handleChoose} className="uploadBtn">
          <img src={ImageIcon} alt="" />
          <p className="videoP">{text}</p>
        </button>
      </div>
    </>
  );
};

export default ImageInput;
