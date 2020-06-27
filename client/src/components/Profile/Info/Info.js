import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MainInfo from "./MainInfo/MainInfo";

const Info = () => {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <section className="c-user-info">
      <header className="c-user-info__header">
        {/* <button
          onClick={() => setShowInfo(!showInfo)}
          className="c-btn  c-user-info__btn-show-more"
        >
          <FontAwesomeIcon className="c-user-info__icon" icon={faChevronDown} />
        </button> */}
      </header>

      <div className="l-user-info-content">
        <MainInfo />
      </div>
    </section>
  );
};

export default Info;
