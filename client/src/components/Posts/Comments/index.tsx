import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';
import ModalAddComment from './ModalAddComment';
import Tooltip from '../../Common/Tooltip';

const Comments: React.FC<{}> = () => {
  const [showComments, setShowComments] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="c-comments">
      <div className="c-comments__header">
        <Tooltip label="Add comment">
          <button
            className="c-btn  c-comments__add-comment-btn"
            type="button"
            onClick={() => setShowModal(!showModal)}
          >
            <FontAwesomeIcon className="c-btn__icon" icon={faComment} />
          </button>
        </Tooltip>
        <button
          className="c-btn c-comments__show-comments-btn"
          type="button"
          onClick={() => setShowComments(!showComments)}
        >
          <FontAwesomeIcon icon={showComments ? faChevronUp : faChevronDown} />
        </button>
        {showModal && <ModalAddComment setShowModal={setShowModal} />}
      </div>
      <div
        className={
          showComments
            ? 'c-comments__items-container c-comments__items-container--active'
            : 'c-comments__items-container'
        }
      >
        {/* <Comment /> */}
        <Comment className="c-comment--active" />
        {/* <Comment /> */}
        <Comment className="c-comment--active" />
      </div>
    </div>
  );
};

export default Comments;
