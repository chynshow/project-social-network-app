import React from 'react';
import UserAvatar from '../../../Common/UserAvatar';
import { delCommentRequest } from './../../../../redux/posts/postsActions';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type PropTypes = {
  className: string;
  commentText: string;
  userAvatar: string;
  userName: string;
  postId: string;
  commentId: string;
};

const Comment: React.FC<PropTypes> = ({
  className,
  commentText,
  userAvatar,
  userName,
  postId,
  commentId,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={className ? `c-comment ${className}` : 'c-comment'}>
      <div className="c-comment__header">
        <UserAvatar size="4rem" src={userAvatar} alt="User Avatar" />
        <h3 className="c-title-tertiary c-comment__title">{userName}</h3>
        {/* <span className="c-comment__comment-date">1.07.2020</span> */}
      </div>
      <p className="c-comment__text">{commentText}</p>
      <button
        className="c-btn c-comment__close-btn"
        type="button"
        onClick={() => dispatch(delCommentRequest(postId, commentId))}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default Comment;
