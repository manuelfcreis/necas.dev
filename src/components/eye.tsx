import React, { Component } from 'react';
import '../stylesheets/eye.css';

interface iProps {
  xPosition: number;
  yPosition: number;
}

class Eye extends Component<iProps> {
  constructor(props: iProps) {
    super(props);
  }

  render() {
    console.log(window.innerHeight)
    console.log(this.props.yPosition)
    const topValue = String(Math.round(
      (this.props.yPosition) / window.innerHeight * 100
    )) + '%';
    const leftValue = String(Math.round(
      (this.props.xPosition) / window.innerWidth * 100
    )) + '%';

    return (
      <div className="eye">
        <div className='ball' style={{ 'top': topValue, 'left': leftValue }}>
          <div className='iris' />
        </div>
      </div>
    );
  }
}

export default Eye;
