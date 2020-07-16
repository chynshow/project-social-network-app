import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UserAvatar from '../../../Common/UserAvatar';
import Overlay from '../../../Common/Overlay';
import AddCommentForm from './AddCommentForm';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux';

interface PropTypes {
  _id: string;
  setShowModal: (value: boolean) => void;
}

const ModalAddComment: React.FC<PropTypes> = ({ setShowModal, _id }) => {
  const photo = useSelector((state: AppState) => state.profile.profile?.photo);
  return (
    <>
      <div className="c-modal-add-message c-comments-modal-add-comment">
        <div className="c-modal-add-message__header c-comments-modal-add-comment__header">
          <UserAvatar size="4rem" src={photo} alt="User Avatar" />
          <h3 className="c-title-tertiary c-modal-add-message__title">
            Jane Moren
          </h3>
          <button
            className="c-btn c-modal-add-message__close-btn c-comments-modal-add-comment__close-btn"
            type="button"
            onClick={() => setShowModal(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="c-modal-add-message__content c-comments-modal-add-comment__content">
          <AddCommentForm _id={_id} />
        </div>
      </div>
      <Overlay
        opacity={0.2}
        background="#fff"
        zIndex={1}
        onClick={() => setShowModal(false)}
      />
    </>
  );
};

export default ModalAddComment;
