import React from 'react';

interface UserAvatarPropTypes {
  src: string;
  size: string;
  alt: string;
  className?: string;
}

const UserAvatar: React.FC<UserAvatarPropTypes> = ({
  src,
  size,
  alt,
  className,
}) => {
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

export default React.memo(UserAvatar);
