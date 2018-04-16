import React from 'react';

const Message = (props) => (
  <div className='message-container'>
    <div className='username'>
      <p>{props.message.user}</p>
    </div>
    <div className='message-content'>
      <pre>{props.message.content}</pre>
    </div>
  </div>
)

export default Message;
