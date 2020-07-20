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
import { TComment } from './../../../redux/posts/postsActionCreators';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Comments: React.FC<TCommentsProps> = ({ _id, comments }) => {
  const [showComments, setShowComments] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);
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
        {comments.length > 0 && (
          <button
            className="c-btn c-comments__show-comments-btn"
            type="button"
            onClick={() => setShowComments(!showComments)}
          >
            <FontAwesomeIcon
              icon={showComments ? faChevronUp : faChevronDown}
            />
          </button>
        )}
        <TransitionGroup>
          {showModal && (
            <CSSTransition
              in={showModal}
              timeout={200}
              classNames="c-modal-add-message"
            >
              <ModalAddComment _id={_id} setShowModal={setShowModal} />
            </CSSTransition>
          )}
        </TransitionGroup>
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

type TCommentsProps = {
  _id: string;
  comments: Array<TComment>;
};
