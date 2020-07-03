import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  faExpandAlt,
  faPaperPlane,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import TextArea from '../../Common/TextArea';
import Overlay from '../../Common/Overlay';
import UserAvatar from '../../Common/UserAvatar';

const ModalAddPost = ({ setShowModal }) => {
  const [expandModal, setExpandModal] = React.useState(false);
  return (
    <>
      <div className="c-modal-add-post">
        <div className="c-modal-add-post__header">
          <UserAvatar
            size="4rem"
            src="/assets/images/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
            alt="User Avatar"
          />
          <h3 className="c-title-tertiary c-modal-add-comment__title">
            Jane Moren
          </h3>
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
            placeholder="New post"
            className={
              expandModal
                ? 'c-text-area c-modal-add-post__text-area c-modal-add-post__text-area--expand'
                : 'c-text-area c-modal-add-post__text-area'
            }
          />
          <div className="c-modal-add-post__action-panel">
            <button
              className="c-btn c-btn--primary"
              type="button"
              onClick={() => setExpandModal(!expandModal)}
            >
              <FontAwesomeIcon icon={faExpandAlt} />
            </button>
            <button className="c-btn c-btn--primary" type="button">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
      <Overlay
        opacity=".2"
        background="#fff"
        onClick={() => setShowModal(false)}
      />
    </>
  );
};

ModalAddPost.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default ModalAddPost;
