// Init
import React from "react";
import { Store, UpdateStore } from "../StoreContext";
export default function Construction({
  openContentRequest,
  setOpenContentRequest,
}) {
  const { user } = Store();
  return (
    <div className="requestContainer">
      <h1 className="requestHeading">Request a Course Content</h1>
      <p className="requestContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa semper mi
        feugiat quis tellus arcu.
        <br className="br" /> Rutrum non vitae id urna nunc, egestas. Tempus
        aliquam, at fus
      </p>

      <button
        className="requestButton"
        disabled
        onClick={() => {
          setOpenContentRequest(true);
        }}
      >
        {/* Request Now */}
        Request Now
      </button>
      {/* {/* {user ? ( */}
      {/* ) : (
      <button
        className="requestButton"
        // onClick={() => {
        //   setOpenContentRequest(true);
        // }}
      >
        Comming Soon
      </button>
      )} */}
    </div>
  );
}
