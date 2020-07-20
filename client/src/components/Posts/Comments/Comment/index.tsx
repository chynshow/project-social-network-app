import React from 'react';
import { delCommentRequest } from './../../../../redux/posts/postsActions';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AppState } from '../../../../redux';

const Comment: React.FC<TCommentProps> = ({
  className,
  commentText,
  userAvatar,
  userName,
  postId,
  commentId,
  commentUserId,
}) => {
  const dispatch = useDispatch();

  const ownerId = useSelector((state: AppState) => state.auth.user?._id);

  return (
    <div className={className ? `c-comment ${className}` : 'c-comment'}>
      <div className="c-comment__header">
        <img
          src={`data:image/jpeg;base64,${userAvatar}`}
          alt="User"
          className="c-user-avatar__img c-comment__photo"
        />
        <h3 className="c-title-tertiary c-comment__title">{userName}</h3>
        {ownerId === commentUserId && (
          <button
            className="c-btn c-comment__close-btn"
            type="button"
            onClick={() => dispatch(delCommentRequest(postId, commentId))}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
      <p className="c-comment__text">{commentText}</p>
    </div>
  );
};

export default Comment;

type TCommentProps = {
  className: string;
  commentText: string;
  userAvatar: string;
  userName: string;
  postId: string;
  commentId: string;
  commentUserId: string;
};
