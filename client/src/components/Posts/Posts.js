import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Posts = () => {
  return (
    <div className="c-posts">
      <header className="c-posts__header">
        <h3 className="c-posts__title">This is the posts contaniner</h3>
        <button className="c-btn c-posts__btn">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </header>
      <div className="c-posts__container"></div>
    </div>
  );
};

export default Posts;
