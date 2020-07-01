import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
  return (
    <section className="c-settings">
      <div className="c-settings__items-container">
        <div className="c-settings__item">
          Delete Account <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </section>
  );
};

export default Settings;
