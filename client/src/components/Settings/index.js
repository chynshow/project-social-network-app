import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../Common/Tooltip';

const Settings = () => {
  return (
    <section className="c-settings">
      <div className="c-settings__items-container">
        <div className="c-settings__item">
          Delete Account
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <Tooltip label="This is tooltip">
          <button
            type="button"
            className="c-btn"
            onClick={() => console.log('this is a tool tip')}
          >
            Test
          </button>
        </Tooltip>
      </div>
    </section>
  );
};

export default Settings;
