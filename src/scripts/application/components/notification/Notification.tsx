import React from 'react';
import { NotificationType } from 'Store/types';

interface Props {
  notification: NotificationType;
}

function Notification({ notification }: Props) {
  if (!notification.message) {
    return (<></>);
  }

  return (
    <article data-testid="notification">
      <h3>{notification.message}</h3>
      <br />
      <h6>
        reason:&nbsp;
        {notification.reason}
      </h6>
    </article>
  );
}

export default Notification;
