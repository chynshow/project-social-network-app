import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Like = () => {
  const handleOnClick = (value) => {
    console.log('Like', value);
  };
  return (
    <div className="c-like">
      <button className="c-btn" onClick={() => handleOnClick()} type="button">
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <span className="c-like__count">7</span>
    </div>
  );
};

export default Like;
