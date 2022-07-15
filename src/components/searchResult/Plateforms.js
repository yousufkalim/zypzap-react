import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const Plateforms = ({ PlateformsAry, PlateformsBtn, trigerOnClickEmpSideBtn3, change, name, values }) => {
  return (
    <>
      {PlateformsAry.map((item) => {
        const className = PlateformsBtn === item.name ? 'active' : '';
        return (
          <div
            onClick={trigerOnClickEmpSideBtn3}
            key={item.name}
            className={`categories-text ${className}`}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <span className="categories-tegs">
              <Checkbox
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

export default Plateforms;
