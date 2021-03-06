import React from 'react';
import Notification from 'Components/notification';

interface Props {
  greetings: Function;
}

function Coordinator({ greetings }: Props) {
  function onStart() {
    greetings('Hello, how are you?');
  }

  onStart();

  return (<Notification />);
}

export default Coordinator;
