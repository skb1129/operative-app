import React, { Component } from 'react';
import Message from './Message';
import Input from './Input';

class Interface extends Component {
  state = {
    user: 'p2test',
    portal1: [
      {
        id: 1,
        user: 'p1test1',
        content: 'Mah Nigga!'
      }, {
        id: 2,
        user: 'p1test2',
        content: 'Yo! Wassup Beyotch'
      }, {
        id: 3,
        user: 'p1test3',
        content: 'Hey! Dudes'
      }
    ],
    portal2: [
      {
        id: 1,
        user: 'p2test1',
        content: 'Mah Nigga!'
      }, {
        id: 2,
        user: 'p2test2',
        content: 'Yo! Wassup Beyotch'
      }, {
        id: 3,
        user: 'p2test3',
        content: 'Hey! Dudes'
      }
    ]
  }

  addMessage = (message) => {
    message.id = this.state[this.props.match.params.portal].length + 1;
    message.user = this.state.user;
    this.setState((prevState) => ({
      [this.props.match.params.portal]: prevState[this.props.match.params.portal].concat([message])
    }));
  }

  componentWillMount() {
    this.setState({
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
