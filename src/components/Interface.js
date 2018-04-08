import React, { Component } from 'react';
import Message from './Message';

class Interface extends Component {
  state = {
    data: {
      portal1: [
        {
          user: 'p1test1',
          content: 'Mah Nigga!'
        }, {
          user: 'p1test2',
          content: 'Yo! Wassup Beyotch'
        }, {
          user: 'p1test3',
          content: 'Hey! Dudes'
        }
      ],
      portal2: [
        {
          user: 'p2test1',
          content: 'Mah Nigga!'
        }, {
          user: 'p2test2',
          content: 'Yo! Wassup Beyotch'
        }, {
          user: 'p2test3',
          content: 'Hey! Dudes'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.data[this.props.match.params.portal].map((message) => (
          <Message message={message} />
        ))}
      </div>
    )
  }
}

export default Interface;
