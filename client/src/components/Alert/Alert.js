import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationTriangle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

const Alert = () => {
  const { msg, styles } = useSelector((state) => state.alertReducer);

  const renderSwitch = (key) => {
    switch (key) {
      case 'success':
        return (
          <FontAwesomeIcon className="c-alert__icon" icon={faCheckCircle} />
        );
      case 'danger':
        return (
          <FontAwesomeIcon className="c-alert__icon" icon={faTimesCircle} />
        );
      case 'warning':
        return (
          <FontAwesomeIcon
            className="c-alert__icon"
            icon={faExclamationTriangle}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {msg && (
        <div className={styles ? `c-alert c-alert--${styles}` : 'c-alert'}>
          <div className="c-alert__message">
            <span className="c-alert__icon-container">
              {renderSwitch(styles)}
            </span>
            {msg}
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
