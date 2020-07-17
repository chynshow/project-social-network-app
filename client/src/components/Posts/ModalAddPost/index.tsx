import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Overlay from '../../Common/Overlay';
import AddPostForm from './AddPostForm';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux';

type PropTypes = {
  setShowModal: (value: boolean) => void;
};

const ModalAddPost: React.FC<PropTypes> = ({ setShowModal }) => {
  const photo = useSelector((state: AppState) => state.profile.profile?.photo);
  const name = useSelector((state: AppState) => state.profile.profile?.name);
  return (
    <>
      <div className="c-modal-add-message c-posts-modal-add-post">
        <div className="c-modal-add-message__header c-posts-modal-add-post__header">
          <img
            src={`data:image/jpeg;base64,${photo}`}
            alt="User"
            className="c-user-avatar__img c-modal-add-message__photo"
          />
          <h3 className="c-title-tertiary c-modal-add-message__title">
            {name}
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
        opacity={0.2}
        background="#fff"
        zIndex={2}
        onClick={() => setShowModal(false)}
      />
    </>
  );
};

export default ModalAddPost;
