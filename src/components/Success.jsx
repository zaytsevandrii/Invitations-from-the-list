import React from 'react';

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>{count} {`${count==1 ?'user was':'users were'}`}  sent {`${count==1 ?'an invitation':'invitations'}`}</p>
      <button onClick={()=>window.location.reload()} className="send-invite-btn">Reload page</button>
    </div>
  );
};
