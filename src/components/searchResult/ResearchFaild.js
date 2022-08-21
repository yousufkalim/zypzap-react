import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NotFound from '../../assets/img/NotFound.svg';
import Filters from '../../assets/filters.svg';
import { useState } from 'react';

const ResearchFaild = ({ searchInput, setOpen }) => {
  const openSidebar = () => {
    setOpen(true);
  };
  return (
    <>
      <Box className="cards-container2">
        <div className="cards-box">
          <div className="cards-header-text">
            <h3 className="card-header-text-h3">
              {' '}
              {searchInput} <span>0 Result Found</span>
            </h3>
            {/* {window.innerWidth < 601 ? (
              <img
                src={Filters}
                onClick={openSidebar}
                style={{ width: '9vw', marginBottom: '6%' }}
                alt=""
              />
            ) : (
              ''
            )}{' '} */}
          </div>
        </div>
        <Grid
          sx={{ padding: '0 0px' }}
          container
          spacing={{ xs: 1, md: 1 }}
          sty
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <div className="researchErrorImg">
            <img src={NotFound} alt="" className="failedImg" />
            <p className="researchP">Don’t Worry if you didn’t got what you searched for</p>
          </div>
        </Grid>

        <Box textAlign="center">
          <button className="btn-Research"> Coming Soon</button>
        </Box>
      </Box>
    </>
  );
};

export default ResearchFaild;
