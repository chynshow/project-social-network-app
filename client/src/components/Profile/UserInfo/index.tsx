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
  faChevronUp,
  faFileUpload,
} from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../../Common/Tooltip';
import ModalAddUserInfo from '../ModalAddUserInfo';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux';

interface UserInfoHeader {
  setShowContent: (value: boolean) => void;
  showContent: boolean;
}

export const UserInfoHeader: React.FC<UserInfoHeader> = ({
  setShowContent,
  showContent,
}) => {
  const userName = useSelector(
    (state: AppState) => state.profile.profile?.name
  );

  return (
    <header className="c-user-info__header">
      <h3 className="c-title-secondary c-user-info__user-name">
        {userName}
        <span className="c-user-info__user-position">Designer</span>
      </h3>
      <Tooltip label="User information">
        <button
          className="c-btn c-user-info__show-more-btn"
          type="button"
          onClick={() => setShowContent(!showContent)}
        >
          <FontAwesomeIcon icon={showContent ? faChevronUp : faChevronDown} />
        </button>
      </Tooltip>
    </header>
  );
};

interface UserInfo {
  showContent: boolean;
}

const UserInfo: React.FC<UserInfo> = ({ showContent }) => {
  const [showModal, setShowModal] = React.useState(false);
  const mainInfo = useSelector(
    (state: AppState) => state.profile.profile?.mainInfo
  );
  const handlerDownloadCV = () => {
    console.log('DownloadCV');
  };
  return (
    <section
      className={
        showContent ? 'c-user-info c-user-info--active' : 'c-user-info'
      }
    >
      <div className="l-user-info-content">
        <div className="c-main-info">
          <div className="c-main-info__header">
            <h3 className="c-title-tertiary">Personal information</h3>
            <div className="l-main-info__header-container">
              <Tooltip label="Edit">
                <button
                  className="c-btn c-main-info__btn"
                  type="button"
                  onClick={() => setShowModal(!showModal)}
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </Tooltip>
              <Tooltip label="Upload CV">
                <button
                  className="c-btn c-main-info__btn"
                  type="button"
                  onClick={() => handlerDownloadCV()}
                >
                  <FontAwesomeIcon icon={faFileUpload} />
                </button>
              </Tooltip>
            </div>
            {showModal && <ModalAddUserInfo setShowModal={setShowModal} />}
          </div>
          <div className="c-main-info__content">
            {mainInfo?.aboutMe && (
              <p className="c-main-info__text c-main-info__text--about-me">
                <span className="c-main-info__sub-text">
                  About Me
                  <FontAwesomeIcon
                    className="c-main-info__sub-text-icon"
                    icon={faUser}
                  />
                </span>
                {mainInfo?.aboutMe}
              </p>
            )}
            {mainInfo?.location && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">
                  Location
                  <FontAwesomeIcon
                    className="c-main-info__sub-text-icon"
                    icon={faMapMarkerAlt}
                  />
                </span>
                {mainInfo?.location}
              </p>
            )}
            {mainInfo?.skills && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">
                  Skills
                  <FontAwesomeIcon
                    className="c-main-info__sub-text-icon"
                    icon={faUserCog}
                  />
                </span>
                {mainInfo?.skills}
              </p>
            )}
            {mainInfo?.languages && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">
                  Lenguages
                  <FontAwesomeIcon
                    className="c-main-info__sub-text-icon"
                    icon={faCommentDots}
                  />
                </span>
                {mainInfo?.languages}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
