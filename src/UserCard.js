import React from 'react';

const UserCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Pierre Lasante</div>
        <div className="description">
          {props.children}
        </div>
        <div className="ui bottom button">
          <i className="add icon"></i>
          Add Friend
        </div>
      </div>
    </div>
  );
};

export default UserCard;