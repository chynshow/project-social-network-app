import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faPen,
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
  const profile = useSelector((state: AppState) => state.profile.profile);

  return (
    <header className="c-user-info__header">
      <h3 className="c-title-secondary c-user-info__user-name">
        {profile?.name}
        {profile?.profession && (
          <span className="c-user-info__user-position">
            {profile?.position} {profile?.profession}
          </span>
        )}
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
  const profile = useSelector((state: AppState) => state.profile.profile);

  return (
    <section
      className={
        showContent ? 'c-user-info c-user-info--active' : 'c-user-info'
      }
    >
      <div className="l-user-info-content">
        <div className="c-main-info">
          <div className="c-main-info__header">
            <h3 className="c-title-tertiary c-user-info__title">
              Personal information
            </h3>
            <Tooltip label="Edit">
              <button
                className="c-btn c-main-info__btn"
                type="button"
                onClick={() => setShowModal(!showModal)}
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
            </Tooltip>
            {showModal && <ModalAddUserInfo setShowModal={setShowModal} />}
          </div>
          <div className="c-main-info__content">
            {profile?.about && (
              <p className="c-main-info__text c-main-info__text--about-me">
                <span className="c-main-info__sub-text">
                  About Me
                  {/* <FontAwesomeIcon
                    className="c-main-info__sub-text-icon"
                    icon={faUser}
                  /> */}
                </span>
                {profile?.about}
              </p>
            )}
            {profile?.location && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">
                  Location
                  {/* <FontAwesomeIcon
                    className="c-main-info__sub-text-icon"
                    icon={faMapMarkerAlt}
                  /> */}
                </span>
                {profile?.location}
              </p>
            )}
            {profile?.skills && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">
                  Skills
                  {/* <FontAwesomeIcon
                    className="c-main-info__sub-text-icon"
                    icon={faUserCog}
                  /> */}
                </span>
                {profile?.skills}
              </p>
            )}
            {profile?.languages && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">
                  Lenguages
                  {/* <FontAwesomeIcon
                    className="c-main-info__sub-text-icon"
                    icon={faCommentDots}
                  /> */}
                </span>
                {profile?.languages}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
