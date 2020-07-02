import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const UserContacts = () => {
  return (
    <div className="c-user-contacts">
      <div className="c-user-contacts__items">
        <div className="c-user-contacts__item">
          <FontAwesomeIcon
            className="c-user-contacts__item-icon"
            icon={faEnvelope}
          />
          <span className="c-user-contacts__item-text">mail@mail.com</span>
        </div>
        <div className="c-user-contacts__item">
          <FontAwesomeIcon
            className="c-user-contacts__item-icon"
            icon={faGithubSquare}
          />
          <span className="c-user-contacts__item-text">github.account</span>
        </div>
        <div className="c-user-contacts__item">
          <FontAwesomeIcon
            className="c-user-contacts__item-icon"
            icon={faLinkedin}
          />
          <span className="c-user-contacts__item-text">linkedin</span>
        </div>
      </div>
    </div>
  );
};

export default UserContacts;
