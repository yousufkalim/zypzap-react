import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

const EmailVarificaiton = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </Dialog>
    </div>
  );
};

export default EmailVarificaiton;
