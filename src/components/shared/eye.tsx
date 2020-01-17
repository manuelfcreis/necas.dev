import React, { Component } from 'react';
import '../../stylesheets/shared/eye.scss';
import classnames from 'classnames';

interface iProps {
  small: boolean;
  positions: {
    x: number;
    y: number;
  }
  hide?: boolean;
}

class Eye extends Component<iProps> {
  constructor(props: iProps) {
    super(props);
  }

  render() {
    const topValue = String(Math.round(
      (this.props.positions.y) / window.innerHeight * 100
    )) + '%';
    const leftValue = String(Math.round(
      (this.props.positions.x) / window.innerWidth * 100
    )) + '%';

    return (
      <div hidden={this.props.hide} className={classnames("eye", this.props.small ? 'smallEye' : '')}>
        <div
          className='ball'
          style={this.props.small ? {} : { 'top': topValue, 'left': leftValue }}
        >
          <div className='iris' />
        </div>
      </div>
    );
  }
}

export default Eye;
