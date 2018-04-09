import React, { Component } from 'react';
import Message from './Message';
import Input from './Input';

class Interface extends Component {
  state = {}

  addMessage = (message) => {
    message.id = this.state[this.props.match.params.portal].length + 1;
    message.user = this.state.user;
    this.setState((prevState) => ({
      [this.props.match.params.portal]: prevState[this.props.match.params.portal].concat([message])
    }));
  }

  componentWillMount() {
    let username = prompt('Username:');
    while (!username || !username.trim()) {
      username = prompt('Username:');
    }
    this.setState({
      user: username,
      [this.props.match.params.portal]: []
    });
  }

  render() {
    return (
      <div>
        {this.state[this.props.match.params.portal].map((message) => (
          <Message message={message} key={message.id}/>
        ))}
        <Input sendMessage={this.addMessage} />
      </div>
    )
  }
}

export default Interface;
