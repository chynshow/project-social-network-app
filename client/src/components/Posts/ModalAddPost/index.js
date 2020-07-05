import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Overlay from '../../Common/Overlay';
import UserAvatar from '../../Common/UserAvatar';
import AddPostForm from './AddPostForm';

const ModalAddPost = ({ setShowModal }) => {
  return (
    <>
      <div className="c-modal-add-message c-posts-modal-add-post">
        <div className="c-modal-add-message__header c-posts-modal-add-post__header">
          <UserAvatar
            size="4rem"
            src="/assets/images/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
            alt="User Avatar"
          />
          <h3 className="c-title-tertiary c-modal-add-comment__title">
            Jane Moren
          </h3>
          <button
            className="c-btn c-modal-add-message__close-btn c-posts-modal-add-post__close-btn"
            type="button"
            onClick={() => setShowModal(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="c-modal-add-message__content c-posts-modal-add-post__content">
          <AddPostForm />
        </div>
      </div>
      <Overlay
        opacity=".2"
        background="#fff"
        zIndex="2"
        onClick={() => setShowModal(false)}
      />
    </>
  );
};

export default ModalAddPost;
