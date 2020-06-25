import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const MainInfo = () => {
  return (
    <div className="c-main-info">
      <div className="c-main-info__header">
        <h4 className="c-main-info__title">Main information</h4>
        <button className="c-main-info__btn-add-info">
          <FontAwesomeIcon icon={faPen} />
        </button>
      </div>
      <div className="c-main-info__content">
        <p className="c-main-info__text">
          <span className="c-main-info__sub-text">About Me:&nbsp;</span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
          similique!
        </p>
        <p className="c-main-info__text">
          <span className="c-main-info__sub-text">Location:&nbsp;</span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
          similique!
        </p>
        <p className="c-main-info__text">
          <span className="c-main-info__sub-text">Skills:&nbsp;</span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
          similique!
        </p>
        <p className="c-main-info__text">
          <span className="c-main-info__sub-text">Lenguages:&nbsp;</span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
          similique!
        </p>
      </div>
    </div>
  );
};

export default MainInfo;
