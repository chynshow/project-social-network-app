import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeAccountRequest } from '../../redux/auth/authActions';

const Settings: React.FC<{}> = () => {
  const dispatch = useDispatch();

  return (
    <section className="c-settings">
      <div className="c-settings__items-container">
        <button
          className="c-btn c-settings__item"
          onClick={() => dispatch(removeAccountRequest())}
        >
          Delete Account
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default Settings;
