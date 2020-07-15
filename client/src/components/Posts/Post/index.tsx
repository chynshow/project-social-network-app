import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faShare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../Common/UserAvatar';
import Overlay from '../../Common/Overlay';
import Comments from '../Comments';
import Likes from '../Likes';
import { PostTypes } from '../../../redux/posts/postsTypes';
import { deletePostRequest } from './../../../redux/posts/postsActions';
import { useDispatch } from 'react-redux';

const Post: React.FC<PostTypes> = ({
  _id,
  name,
  createdAt,
  text,
  avatar,
  likes,
}) => {
  const [showContextMenu, setShowContextMenu] = React.useState(false);
  return (
    <div className="c-post">
      <header className="c-post__header">
        <div className="l-post">
          <UserAvatar size="4rem" src={avatar} alt="User Avatar" />
          <div className="l-post-title-box">
            <h3 className="c-title-tertiary">{name}</h3>
            <span className="c-post__date">{createdAt}</span>
          </div>
        </div>
        <div
          className="c-btn c-post__btn-more"
          onClick={() => setShowContextMenu(!showContextMenu)}
        >
          <FontAwesomeIcon
            className="c-icon c-post__icon-more"
            icon={faEllipsisH}
          />
          {showContextMenu && <ContextMenu _id={_id} />}
        </div>
        {/* {showContextMenu && (
          <Overlay
            opacity={0.2}
            background="#fff"
            zIndex={2}
            onClick={() => setShowContextMenu(false)}
          />
        )} */}
      </header>
      <div className="c-post__text-container">
        <p className="c-post__text">{text}</p>
      </div>
      <div className="c-post__action-panel">
        <Comments />
        <Likes _id={_id} likes={likes} />
      </div>
    </div>
  );
};

type ContextMenu = {
  _id: string;
};

const ContextMenu: React.FC<ContextMenu> = ({ _id }) => {
  const dispatch = useDispatch();

  return (
    <ul className="c-post-context-menu">
      <li className="c-post-context-menu__item">
        <button
          className="c-btn c-post-context-menu__btn"
          type="button"
          onClick={() => dispatch(deletePostRequest(_id))}
        >
          Remove
          <FontAwesomeIcon
            className="c-icon c-post-context-menu__icon"
            icon={faTrash}
          />
        </button>
      </li>
      <li className="c-post-context-menu__item">
        <button
          className="c-btn c-post-context-menu__btn c-post-context-menu__btn--disabled"
          type="button"
          // onClick={() => handleOnClick('Share Post')}
        >
          Share
          <FontAwesomeIcon
            className="c-icon c-post-context-menu__icon"
            icon={faShare}
          />
        </button>
      </li>
    </ul>
  );
};

export default Post;
