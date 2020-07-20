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
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux';

const Comments: React.FC<TComments> = ({
  _id,
  comments,
  setShowComments,
  showComments,
}) => {
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
    </div>
  );
};

export const CommentsContainer: React.FC<TCommentsContainerProps> = ({
  _id,
  comments,
  showComments,
}) => {
  const ownerId = useSelector((state: AppState) => state.auth.user?._id);
  return (
    <div
      className={
        showComments
          ? 'c-comments__items-container c-comments__items-container--active'
          : 'c-comments__items-container'
      }
    >
      {comments.map((comment) => (
        <Comment
          className={
            ownerId === comment.user ? 'c-comment--active' : 'c-comment'
          }
          key={comment._id}
          commentId={comment._id}
          postId={_id}
          commentText={comment.text}
          userAvatar={comment.avatar}
          userName={comment.name}
          commentUserId={comment.user}
        />
      ))}
    </div>
  );
};

export default Comments;

interface TCommentsContainerProps {
  _id: string;
  comments: Array<TComment>;
  showComments: boolean;
}

interface TComments extends TCommentsContainerProps {
  setShowComments: (value: boolean) => void;
}
