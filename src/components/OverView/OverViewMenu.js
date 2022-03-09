import React from "react";
import { NavLink } from "react-router-dom";

const OverViewMenu = ({ setActivebtn, btns, activebtn }) => {
  return (
    <>
      <div className="overViewMenu">
        <div className="overViewMene_centerDiv">
          <div>
            {btns.map((btn) => (
              <>
                <NavLink
                  to="#"
                  className={`overViewMenuButton ${
                    activebtn == btn.text && "activebtn"
                  }`}
                  onClick={() => setActivebtn(btn.text)}
                >
                  {btn.text}
                </NavLink>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OverViewMenu;
