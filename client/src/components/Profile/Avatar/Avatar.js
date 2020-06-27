import React from "react";

const Avatar = () => {
  return (
    <div className="c-avatar">
      <img
        className="c-avatar__image"
        src="/assets/images/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
        alt=""
      />
      <h3 className="c-avatar__user-name">Jane Moren</h3>
      <span className="c-avatar__user-position">Designer</span>
    </div>
  );
};

export default Avatar;
