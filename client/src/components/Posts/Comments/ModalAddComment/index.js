import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faPaperclip,
  faExpandAlt,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../../Common/UserAvatar';
import TextArea from '../../../Common/TextArea';
import Overlay from '../../../Common/Overlay';

const ModalAddComment = ({ setShowModal }) => {
  return (
    <>
      <div className="c-modal-add-comment">
        <div className="c-modal-add-comment__header">
          <UserAvatar
            size="4rem"
            src="/assets/images/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
            alt="User Avatar"
          />
          <h3 className="c-title-tertiary c-modal-add-comment__title">
            Jane Moren
          </h3>
          <button
            className="c-btn c-modal-add-comment__close-btn"
            type="button"
            onClick={() => setShowModal(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="c-modal-add-comment__content">
          <TextArea
            placeholder="New comment"
            className="c-text-area c-modal-add-comment__text-area"
          />
          <div className="c-modal-add-comment__action-panel">
            <button className="c-btn" type="button">
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
        zIndex="1"
        onClick={() => setShowModal(false)}
      />
    </>
  );
};

export default ModalAddComment;
