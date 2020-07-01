import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TextArea from '../../Common/TextArea';
import Overlay from '../../Common/Overlay';

const ModalAddPost = ({ setShowModal }) => {
  return (
    <>
      <div className="c-modal-add-post">
        <div className="c-modal-add-post__header">
          <h3 className="c-title-tertiary">New Post</h3>
          <button
            className="c-btn c-modal-add-post__close-btn"
            type="button"
            onClick={() => setShowModal(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="c-modal-add-post__content">
          <TextArea
            placeholder="Post text"
            className="c-text-area c-modal-add-post__text-area"
          />
        </div>
        <div className="c-modal-add-post__action-panel">
          <button className="c-btn c-btn--primary" type="button">
            Add Post
          </button>
        </div>
      </div>
      <Overlay onClick={() => setShowModal(false)} />
    </>
  );
};

ModalAddPost.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default ModalAddPost;
