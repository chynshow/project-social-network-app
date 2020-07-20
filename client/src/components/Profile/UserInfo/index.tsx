import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faPen,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import Tooltip from '../../Common/Tooltip';
import ModalAddUserInfo from '../ModalAddUserInfo';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useParams } from 'react-router-dom';

export const UserInfoHeader: React.FC<TUserInfoHeaderProps> = ({
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

const UserInfo: React.FC<TUserInfoProps> = ({ showContent }) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const profile = useSelector((state: AppState) => state.profile.profile);

  const { userId } = useParams<{ userId: string }>();

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
            {!userId && (
              <Tooltip label="Edit">
                <button
                  className="c-btn c-main-info__btn"
                  type="button"
                  onClick={() => setShowModal(!showModal)}
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </Tooltip>
            )}
          </div>
          <TransitionGroup>
            {showModal && (
              <CSSTransition
                in={showModal}
                timeout={200}
                classNames="c-modal-add-user-info"
              >
                <ModalAddUserInfo setShowModal={setShowModal} />
              </CSSTransition>
            )}
          </TransitionGroup>
          <div className="c-main-info__content">
            {profile?.about && (
              <p className="c-main-info__text c-main-info__text--about-me">
                <span className="c-main-info__sub-text">About Me</span>
                {profile?.about}
              </p>
            )}
            {profile?.location && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">Location</span>
                {profile?.location}
              </p>
            )}
            {profile?.skills && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">Skills</span>
                {profile?.skills}
              </p>
            )}
            {profile?.languages && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">Lenguages</span>
                {profile?.languages}
              </p>
            )}
            {profile?.user.email && (
              <p className="c-main-info__text">
                <span className="c-main-info__sub-text">Contact</span>
                {profile?.user.email}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;

type TUserInfoProps = {
  showContent: boolean;
};

type TUserInfoHeaderProps = {
  setShowContent: (value: boolean) => void;
  showContent: boolean;
};
