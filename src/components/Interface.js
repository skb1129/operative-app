import React, { Component } from 'react';
import Message from './Message';
import Input from './Input';
import * as MessagesAPI from '../utils/MessagesAPI';

class Interface extends Component {
  state = {}

  addMessage = (message) => {
    message.user = this.state.user;
    message.portal = this.props.match.params.portal;
    MessagesAPI.create(message).then(message => {
      this.setState(prevState => ({
        messages: prevState.messages.concat([message])
      }))
    })
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
    setInterval(() => {
      MessagesAPI.getAll().then((messages) => {
        this.setState({messages})
      });
    }, 1000);
  }

  render() {
    const showingMessages = this.state.messages.filter((message) => message.portal === this.props.match.params.portal)
    return (
      <div>
        {showingMessages.map((message) => (
          <Message message={message} key={message.id}/>
        ))}
        <Input sendMessage={this.addMessage} />
      </div>
    )
  }
}

export default Interface;
