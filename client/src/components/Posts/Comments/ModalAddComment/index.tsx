import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Overlay from '../../../Common/Overlay';
import AddCommentForm from './AddCommentForm';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux';

const ModalAddComment: React.FC<TModalAddCommentProps> = ({
  setShowModal,
  _id,
}) => {
  const photo = useSelector((state: AppState) => state.profile.profile?.photo);

  const name = useSelector((state: AppState) => state.profile.profile?.name);

  return (
    <>
      <div className="c-modal-add-message c-comments-modal-add-comment">
        <div className="c-modal-add-message__header c-comments-modal-add-comment__header">
          <img
            src={`data:image/jpeg;base64,${photo}`}
            alt="User"
            className="c-user-avatar__img c-modal-add-message__photo"
          />
          <h3 className="c-title-tertiary c-modal-add-message__title">
            {name}
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
          <AddCommentForm _id={_id} setShowModal={setShowModal} />
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

type TModalAddCommentProps = {
  _id: string;
  setShowModal: (value: boolean) => void;
};
