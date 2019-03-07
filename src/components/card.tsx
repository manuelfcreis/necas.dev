import React, { Component } from 'react';
import '../stylesheets/card.css'

interface Props {
  header: string,
}

export default class Card extends Component<Props> {
  render() {
    return (
      <div className='card'>
        {this.props.header &&
          <div className='header'>
            {this.props.header}
          </div>
        }
        <div className='body'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
