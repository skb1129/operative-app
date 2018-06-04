import React, { Component } from 'react';
import Message from './Message';
import Input from './Input';
import * as firebase from 'firebase';

const config = {
  /**
   * Put your firebase instance's config here.
   * Make sure there's a 'messages' object in the database.
   */
};

firebase.initializeApp(config);

const messagesRef = firebase.database().ref().child('messages');

class Interface extends Component {
  state = {}

  addMessage = (message) => {
    message.user = this.state.user;
    message.portal = this.props.match.params.portal;
    message.id = this.state.messages.length + 1;
    const update = {};
    update[message.id - 1]= message;
    messagesRef.update(update);
  }

  componentWillMount() {
    let username = prompt('Username:');
    while (!username || !username.trim()) {
      username = prompt('Username:');
    }
    this.setState({
      user: username,
      messages: []
    });
  }

  componentDidMount() {
    messagesRef.on('value', snap => {
      this.setState({
        messages: snap.val()
      })
    })
  }

  render() {
    const showingMessages = this.state.messages.filter((message) => (
      message.portal === this.props.match.params.portal
    ));
    return (
      <div className='messages-container'>
        {showingMessages.map((message) => (
          <Message message={message} key={message.id}/>
        ))}
        <Input sendMessage={this.addMessage} />
      </div>
    )
  }
}

export default Interface;
