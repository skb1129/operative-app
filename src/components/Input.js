import React from 'react';
import serializeForm from 'form-serialize';

const Input = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = serializeForm(e.target, { hash: true });
    if (message.content)
      props.sendMessage(message);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <textarea className='message-input' name='content' rows='1'></textarea>
        <button className='send-button'>Send</button>
      </div>
    </form>
  )
}

export default Input;
