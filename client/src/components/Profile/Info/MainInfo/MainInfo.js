import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faMapMarkerAlt,
  faUserCog,
  faCommentDots,
  faUser,
  faFileDownload,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const MainInfo = () => {
  return (
    <div className="c-main-info">
      <div className="c-main-info__header">
        <button className="c-btn c-main-info__btn c-btn--shadow-circle">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="c-btn c-main-info__btn c-btn--shadow-circle">
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>
      <div className="c-main-info__content">
        {/* <p className="c-main-info__text">
          <span className="c-main-info__sub-text">
            Me
            <FontAwesomeIcon
              className="c-main-info__sub-text-icon"
              icon={faUser}
            />
          </span>
          Hi my name is Serhii, I'm beginner web developer and I'm looking for a
          job to develop my professional skills. I learn programming by using
          online courses. I like to code things from scratch, and enjoy bringing
          ideas to life in the browser. I value simple content structure, clean
          design patterns, and thoughtful interactions.
        </p>
        <p className="c-main-info__text">
          <span className="c-main-info__sub-text">
            Location
            <FontAwesomeIcon
              className="c-main-info__sub-text-icon"
              icon={faMapMarkerAlt}
            />
          </span>
          Poland, Poznan
        </p>
        <p className="c-main-info__text">
          <span className="c-main-info__sub-text">
            Skills
            <FontAwesomeIcon
              className="c-main-info__sub-text-icon"
              icon={faUserCog}
            />
          </span>
          HTML, CSS, SASS, BEM, Bootstrap, RWD, Styled components, JavaScript,
          React, Redux, Git, NPM, Nodejs, MongoDB, Express, Mongoose, Postman,
          Linux
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
          (native speaker)
        </p> */}
        <p className="c-main-info__text">
          Hi my name is Serhii, I'm a web developer. I familiar with HTML, CSS,
          SASS, BEM, Bootstrap, RWD, Styled components, JavaScript, React,
          Redux, Git, NPM, Nodejs, MongoDB, Express, Mongoose, Postman, Linux. I
          learn programming by using online courses. I like to code things from
          scratch, and enjoy bringing ideas to life in the browser. I value
          simple content structure, clean design patterns, and thoughtful
          interactions. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Incidunt dolor mollitia eveniet doloribus dolore molestias
          asperiores quas odit, alias porro.
        </p>
      </div>
    </div>
  );
};

export default MainInfo;
