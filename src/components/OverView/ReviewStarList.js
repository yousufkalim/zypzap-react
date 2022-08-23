import React from 'react';
import { ReactComponent as Star1 } from '../../assets/icons/star2.svg';

const ReviewStarList = (props) => {
  return (
    <div>
      <li className="reviewStarLi">
        {' '}
        {props.star.map((i) => (
          <Star1 className="starID" />
        ))}
        <p className="ReviewsPersntage">{props.text}</p>
      </li>
    </div>
  );
};

export default ReviewStarList;
