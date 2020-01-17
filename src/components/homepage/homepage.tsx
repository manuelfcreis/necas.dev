import React, { Component } from 'react';
import Card from './card';
// @ts-ignore
import Div100vh from 'react-div-100vh';

interface iProps {
  mouseMovement: Function;
  open: boolean;
  positions: {
    x: number;
    y: number;
  }
}

class Homepage extends Component<iProps> {
  render() {
    return (
      <>
        <Card open={this.props.open} />
      </>
    )
  }
}

export default Homepage;
