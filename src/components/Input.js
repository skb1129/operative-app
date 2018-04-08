import React from 'react';
import serializeForm from 'form-serialize';

const Input = (props) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = serializeForm(e.target, { hash: true });
    if (message.content)
      props.sendMessage(message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' name='content' />
        <button>Send</button>
      </div>
    </form>
  )
}

export default Input;
