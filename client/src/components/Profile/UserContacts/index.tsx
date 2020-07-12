import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AppState } from './../../../redux';
import { useSelector } from 'react-redux';

const UserContacts: React.FC<{}> = () => {
  const contacts = useSelector(
    (state: AppState) => state.profile.profile?.contacts
  );
  const userEmail = useSelector(
    (state: AppState) => state.profile.profile?.user.email
  );
  return (
    <div className="c-user-contacts">
      <div className="c-user-contacts__items">
        {userEmail && (
          <div className="c-user-contacts__item">
            <FontAwesomeIcon
              className="c-user-contacts__item-icon"
              icon={faEnvelope}
            />
            <span className="c-user-contacts__item-text">{userEmail}</span>
          </div>
        )}
        {contacts?.github && (
          <div className="c-user-contacts__item">
            <FontAwesomeIcon
              className="c-user-contacts__item-icon"
              icon={faGithubSquare}
            />
            <span className="c-user-contacts__item-text">
              {contacts?.github}
            </span>
          </div>
        )}
        {contacts?.linkedin && (
          <div className="c-user-contacts__item">
            <FontAwesomeIcon
              className="c-user-contacts__item-icon"
              icon={faLinkedin}
            />
            <span className="c-user-contacts__item-text">
              {contacts?.linkedin}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserContacts;
