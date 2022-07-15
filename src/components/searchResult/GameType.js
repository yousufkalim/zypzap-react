import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const GameType = ({ GameTypes, gameBtn, trigerOnClickEmpSideBtn2, change, name, values }) => {
  return (
    <>
      {GameTypes.map((item) => {
        const className = gameBtn === item.name ? 'active' : '';
        return (
          <div
            onClick={trigerOnClickEmpSideBtn2}
            key={item.name}
            className={`categories-text ${className}`}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <span className="categories-tegs">
              <Checkbox
                // onChange={handleChange}
                id={`${item.name}-${name}`}
                name={name}
                value={item.name}
                checked={values.includes(item.name)}
                inputProps={{ 'aria-label': 'controlled' }}
                onChange={change}
              />
              &nbsp;
              <label style={{ cursor: 'pointer' }} htmlFor={`${item.name}-${name}`}>
                {item.name}
              </label>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default GameType;
