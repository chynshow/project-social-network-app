import React from 'react';
import UserAvatar from '../../../Common/UserAvatar';

interface PropTypes {
  className: string;
}

const Comment: React.FC<PropTypes> = ({ className }) => {
  return (
    <div className={className ? `c-comment ${className}` : 'c-comment'}>
      <div className="c-comment__header">
        <UserAvatar
          size="4rem"
          src="/assets/images/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg"
          alt="User Avatar"
        />
        <h3 className="c-title-tertiary c-comment__title">Jone Doe</h3>
        {/* <span className="c-comment__comment-date">1.07.2020</span> */}
      </div>
      <div className="c-comment__text">
        This is com Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo facere dolorum unde consequuntur soluta, laboriosam quibusdam
        ullam? Explicabo maiores, illum fugit voluptatibus ea minima sequi at
        vitae possimus aut omnis animi iure fugiat dicta in provident laudantium
        iusto consequuntur quaerat.
      </div>
    </div>
  );
};

export default Comment;
