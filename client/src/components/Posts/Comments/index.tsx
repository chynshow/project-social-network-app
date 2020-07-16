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
import { CommentType } from './../../../redux/posts/postsTypes';

type PropTypes = {
  _id: string;
  comments: Array<CommentType>;
};

const Comments: React.FC<PropTypes> = ({ _id, comments }) => {
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
        {showModal && <ModalAddComment _id={_id} setShowModal={setShowModal} />}
      </div>
      <div
        className={
          showComments
            ? 'c-comments__items-container c-comments__items-container--active'
            : 'c-comments__items-container'
        }
      >
        {comments.map((comment) => (
          <Comment
            className={'c-comment--active'}
            key={comment._id}
            commentId={comment._id}
            postId={_id}
            commentText={comment.text}
            userAvatar={comment.avatar}
            userName={comment.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
