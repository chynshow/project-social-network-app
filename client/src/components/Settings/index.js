import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { showAlert } from '../../redux/alert/alertActions';
import { useDispatch } from 'react-redux';

const Settings = () => {
  const dispatch = useDispatch();
  const onHandleClick = () => {
    dispatch(
      showAlert('This is warning', 'This is warning2', 5000, 'c-alert--danger')
    );

    console.log('Click');
  };
  return (
    <section className="c-settings">
      <div className="c-settings__items-container">
        <div className="c-settings__item" onClick={() => onHandleClick()}>
          Delete Account
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </section>
  );
};

export default Settings;
