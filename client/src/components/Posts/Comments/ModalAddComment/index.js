import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../../Common/UserAvatar';
import TextArea from '../../../Common/TextArea';
import Overlay from '../../../Common/Overlay';

const ModalAddComment = ({ setShowModal }) => {
  return (
    <>
      <div className="c-modal-add-comment">
        <div className="c-modal-add-comment__header">
          <div className="l-modal-add-comment">
            <UserAvatar
              size="4rem"
              src="/assets/images/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
              alt="User Avatar"
            />
            <h3 className="c-title-tertiary c-modal-add-comment__title">
              Jane Moren
            </h3>
          </div>
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
        </div>
        <div className="c-modal-add-comment__action-panel">
          <button className="c-btn" type="button">
            <FontAwesomeIcon icon={faPaperclip} />
          </button>
          <button className="c-btn c-btn--primary" type="button">
            Add comment
          </button>
        </div>
      </div>
      <Overlay zIndex="2" onClick={() => setShowModal(false)} />
    </>
  );
};

export default ModalAddComment;
