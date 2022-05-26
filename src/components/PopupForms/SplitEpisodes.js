import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Dialog from "@mui/material/Dialog";
import "../../css/form/SplitEpisodes.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const SplitEpisodes = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        setOpen={setOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <div className="uploadSuccessDiv">
          <ClearIcon className="clearIcons" onClick={handleClose} />
          <div className="uploadSuccess-centerDiv">
            <div className="split-Div">
              <div className="split-center-div">
                <div className="split-Col1">
                  <div className="splitInto">
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group">
                        <FormControlLabel value="SplitInto" control={<Radio />} label="Split Into" className="splitAddSpace" />
                        <br />
                        <FormControlLabel value="SplitByDuration" control={<Radio />} label="Split By Duration" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="split-Col2">
                  <div className="splitInto2">
                    <input type="number" className="partsInput" />
                    <p className="parts-p">Parts</p>
                  </div>
                  <br />
                  <div className="splitPart-contrainer">
                    <div1 className="splitParts">
                      <input type="number" className="partsInput2" name="" id="" />:
                      <div>
                        <p className="PartsInputLabel">Horse</p>
                      </div>
                    </div1>
                    <div1 className="splitParts">
                      <input type="number" name="" id="" className="partsInput2" />:<p className="PartsInputLabel">Min.</p>
                    </div1>
                    <div1 className="splitParts">
                      <input type="number" name="" id="" className="partsInput2" />
                      <p className="PartsInputLabel">Sec.</p>
                    </div1>
                  </div>
                </div>
              </div>
            </div>
            <button className="uploadSuccessBTNs">Apply</button>
            <button className="uploadSuccessBTN">Cancel</button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SplitEpisodes;
