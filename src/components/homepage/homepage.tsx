import React, { Component } from 'react';
import Card from './card';

interface Props {
  mouseMovement: Function;
  open: boolean;
  positions: {
    x: number;
    y: number;
  };
}

class Homepage extends Component<Props> {
  render(): JSX.Element {
    return (
      <>
        <Card open={this.props.open} />
      </>
    );
  }
}

export default Homepage;
