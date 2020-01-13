import React, { Component } from 'react';
import Menu from '../shared/menu';
import Eye from '../shared/eye';
import Card from './card';
// @ts-ignore
import Div100vh from 'react-div-100vh';

interface iProps {
  mouseMovement: Function;
  menuClick: Function;
  open: boolean;
  xPosition: number;
  yPosition: number;
}

class Homepage extends Component<iProps> {
  render() {
    return (
      <>
        <Menu menuClick={this.props.menuClick} />
        <Eye
          xPosition={this.props.xPosition}
          yPosition={this.props.yPosition}
        />
        <Card open={this.props.open} />
      </>
    )
  }
}

export default Homepage;
