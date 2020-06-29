import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faPen,
  faDownload,
  faUser,
  faMapMarkerAlt,
  faUserCog,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';

export const UserInfoHeader = ({ setShowContent, showContent }) => {
  return (
    <header className="c-user-info__header">
      <h3 className="c-user-info__user-name">
        Jane Moren <span className="c-user-info__user-position">Designer</span>
      </h3>

      <button className="c-btn" onClick={() => setShowContent(!showContent)}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </header>
  );
};

const UserInfo = () => {
  return (
    <section className="c-user-info">
      <div className="l-user-info-content">
        <div className="c-main-info">
          <div className="c-main-info__header">
            <h4 className="c-main-info__title">Personal information</h4>
            <div className="c-main-info__header-container">
              <button className="c-btn c-main-info__btn">
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button className="c-btn c-main-info__btn">
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>
          <div className="c-main-info__content">
            <p className="c-main-info__text c-main-info__text--about-me">
              <span className="c-main-info__sub-text">
                About Me
                <FontAwesomeIcon
                  className="c-main-info__sub-text-icon"
                  icon={faUser}
                />
              </span>
              Hi my name is Serhii, I'm beginner web developer and I'm looking
              for a job to develop my professional skills. I learn programming
              by using online courses. I like to code things from scratch, and
              enjoy bringing ideas to life in the browser. I value simple
              content structure, clean design patterns, and thoughtful
              interactions.
            </p>
            <p className="c-main-info__text">
              <span className="c-main-info__sub-text">
                Location
                <FontAwesomeIcon
                  className="c-main-info__sub-text-icon"
                  icon={faMapMarkerAlt}
                />
              </span>
              Poland, Poznan.
            </p>
            <p className="c-main-info__text">
              <span className="c-main-info__sub-text">
                Skills
                <FontAwesomeIcon
                  className="c-main-info__sub-text-icon"
                  icon={faUserCog}
                />
              </span>
              HTML, CSS, SASS, BEM, Bootstrap, RWD, Styled components,
              JavaScript, React, Redux, Git, NPM, Nodejs, MongoDB, Express,
              Mongoose, Postman, Linux.
            </p>
            <p className="c-main-info__text">
              <span className="c-main-info__sub-text">
                Lenguages
                <FontAwesomeIcon
                  className="c-main-info__sub-text-icon"
                  icon={faCommentDots}
                />
              </span>
              English (pre-intermediate), Polish (advanced), Russian & Ukrainian
              (native speaker).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
