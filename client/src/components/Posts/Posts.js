import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const Posts = () => {
  return (
    <div className="c-posts">
      <header className="c-posts__header">
        <h3 className="c-posts__title">Posts <FontAwesomeIcon className="c-icon c-posts__title-icon"  icon={faCommentAlt} /></h3>
        <button className="c-btn c-posts__add-post-btn">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </header>
      <div className="c-posts__container">
        <p className="c-posts__info">You don't have any posts yet!</p>
      </div>
    </div>
  );
};

export default Posts;
