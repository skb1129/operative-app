import React, { Component } from 'react';

class Interface extends Component {
  state = {
    data: {
      portal1: [
        {
          user: 'p1test1',
          message: 'Mah Nigga!'
        }, {
          user: 'p1test2',
          message: 'Yo! Wassup Beyotch'
        }, {
          user: 'p1test3',
          message: 'Hey! Dudes'
        }
      ],
      portal2: [
        {
          user: 'p2test1',
          message: 'Mah Nigga!'
        }, {
          user: 'p2test2',
          message: 'Yo! Wassup Beyotch'
        }, {
          user: 'p2test3',
          message: 'Hey! Dudes'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.data[this.props.match.params.portal])}
      </div>
    )
  }
}

export default Interface;
