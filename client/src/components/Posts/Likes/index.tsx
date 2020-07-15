import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { updateLikesRequest } from './../../../redux/posts/postsActions';

const Likes: React.FC<{ _id: string; likes: [{ user: string }] }> = ({
  _id,
  likes,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="c-like">
      <button
        className="c-btn"
        onClick={() => dispatch(updateLikesRequest(_id))}
        type="button"
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <span className="c-like__count">
        {likes.length ? likes.length : null}
      </span>
    </div>
  );
};

export default Likes;
