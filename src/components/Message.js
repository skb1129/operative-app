import React from 'react';

const Message = (props) => (
  <div>
    <p>{props.message.user} | {props.message.content}</p>
  </div>
)

export default Message;
