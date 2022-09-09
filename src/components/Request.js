// Init
import React from 'react';
import { Store, UpdateStore } from '../StoreContext';
export default function Construction({
  // openContentRequest,
  setOpenContentRequest,
}) {
  const { user } = Store();
  return (
    <div className="requestContainer">
      <h1 className="requestHeading">Request a Course Content</h1>
      <p className="requestContent">
        Very soon, you will be able to express your needs to the community
      </p>

      {/* <button
        className="requestButton"
        disabled
        onClick={() => {
          setOpenContentRequest(true);
        }}
      >
        
        Coming Soon
      </button> */}
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
