import React from "react";

const Cookies = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(88 88 108 / 98%)",
          color: "white",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "10px 40px 10px 10px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <h2>Cookies</h2>
            <p>Accept all cookies</p>
          </div>
          <div>
            <button>Accept</button>
            <button>Reject</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
