import React, { useRef } from "react";

const HeartIcon = ({ id, FvrtIconCount }) => {
  const box = useRef(0);
  const onClickIcon = (e) => {
    const list = e.target.classList;
    const iconId = e.target.id;
    if (list.contains("favourite-icon-fill")) {
      box.current.classList.remove("favourite-icon-fill");
    } else {
      box.current.classList.add("favourite-icon-fill");
    }
    // like and unlike cards filter
    if (!FvrtIconCount.includes(iconId)) {
      //checking weather array contain the id
      FvrtIconCount.push(iconId); //adding to array because value doesnt exists
    } else {
      FvrtIconCount.splice(FvrtIconCount.indexOf(iconId), 1); //deleting
    }
  };
  return (
    <>
      {
        <span className="favourite-icon-container">
          <i
            ref={box}
            onClick={onClickIcon}
            className={`fa fa-heart favourite-icon`}
            id={id}
          ></i>
        </span>
      }
    </>
  );
};

export default HeartIcon;
