import React from 'react';
import { delCommentRequest } from './../../../../redux/posts/postsActions';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <img
          src={`data:image/jpeg;base64,${userAvatar}`}
          alt="User"
          className="c-user-avatar__img c-comment__photo"
        />
        <h3 className="c-title-tertiary c-comment__title">{userName}</h3>
        {/* <span className="c-comment__comment-date">1.07.2020</span> */}
        <button
          className="c-btn c-comment__close-btn"
          type="button"
          onClick={() => dispatch(delCommentRequest(postId, commentId))}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <p className="c-comment__text">{commentText}</p>
    </div>
  );
};

export default Comment;
