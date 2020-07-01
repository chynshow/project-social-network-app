import React from 'react';
import PropTypes from 'prop-types';

const UserAvatar = ({ src = '/', size = '5rem', alt = '', className = '' }) => {
  return (
    <div className={`c-user-avatar ${className}`}>
      <img
        style={{ width: size }}
        className="c-user-avatar__img"
        src={src}
        alt={alt}
      />
    </div>
  );
};

UserAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default React.memo(UserAvatar);
