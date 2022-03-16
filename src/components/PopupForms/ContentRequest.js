import React from "react";
import Dialog from "@mui/material/Dialog";
const ContentRequest = ({ openContentRequest, setOpenContentRequest }) => {
  //   useEffect(() => {
  //     if (!openContentRequest) {
  //       setValues({ username: "", email: "", password: "" });
  //     }
  //   }, []);
  const handleClose = () => {
    setOpenContentRequest(false);
  };
  return (
    <>
      <Dialog open={openContentRequest} onClose={handleClose}>
        <div>ContentRequest</div>
      </Dialog>
    </>
  );
};

export default ContentRequest;
