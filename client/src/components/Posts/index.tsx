import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import Post from './Post';
import ModalAddPost from './ModalAddPost';
import Tooltip from '../Common/Tooltip';

const Posts: React.FC<{}> = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="c-posts">
      <div className="c-posts__header">
        <h3 className="c-title-secondary c-posts__title">
          Posts
          <FontAwesomeIcon
            className="c-icon c-posts__title-icon"
            icon={faCommentAlt}
          />
        </h3>
        <Tooltip label="Add post">
          <button
            type="button"
            className="c-btn c-posts__add-post-btn"
            onClick={() => setShowModal(!showModal)}
          >
            <FontAwesomeIcon className="c-icon" icon={faPlus} />
          </button>
        </Tooltip>
      </div>
      <div className="c-posts__items-container">
        <p className="c-posts__info">You don't have any posts yet!</p>
        {/* <Post /> */}
        {/* <Post /> */}

        {showModal && <ModalAddPost setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Posts;
