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
import Like from '../Like';

const Post = () => {
  const [showContextMenu, setShowContextMenu] = React.useState(false);

  return (
    <div className="c-post">
      <header className="c-post__header">
        <div className="l-post">
          <UserAvatar
            size="4rem"
            src="/assets/images/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
            alt="User Avatar"
          />
          <div className="l-post-title-box">
            <h3 className="c-title-tertiary">Jane Moren</h3>
            <span className="c-post__date">30-06-2020</span>
          </div>
        </div>
        <button
          className="c-btn c-post__btn-more"
          type="button"
          onClick={() => setShowContextMenu(!showContextMenu)}
        >
          <FontAwesomeIcon
            className="c-icon c-post__icon-more"
            icon={faEllipsisH}
          />
          {showContextMenu && <ContextMenu />}
        </button>
        {showContextMenu && (
          <Overlay zIndex="2" onClick={() => setShowContextMenu(false)} />
        )}
      </header>
      <div className="c-post__text-container">
        <p className="c-post__text">
          This is the posts textlore Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Unde nisi ab voluptas doloribus omnis sunt cumque
          saepe corrupti repellendus repudiandae? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Tenetur necessitatibus eaque quisquam
          culpa autem eius dolorem perspiciatis voluptas exercitationem eveniet
          fuga praesentium provident officia, deleniti minus quibusdam
          obcaecati, esse doloremque facere officiis sapiente maxime. Omnis
          sapiente nesciunt cupiditate at vel autem enim dignissimos esse et
          quis in hic porro, quam est numquam consequuntur sequi provident
          voluptates consectetur similique dicta voluptas.
        </p>
      </div>
      <div className="c-post__action-panel">
        <Comments />
        <Like />
      </div>
    </div>
  );
};

const ContextMenu = () => {
  const handleOnClick = (value) => {
    console.log('ContextMenu', value);
  };

  return (
    <ul className="c-post-context-menu">
      <li className="c-post-context-menu__item">
        <button
          className="c-btn c-post-context-menu__btn"
          type="button"
          onClick={() => handleOnClick('Remove Post')}
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
          onClick={() => handleOnClick('Share Post')}
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
