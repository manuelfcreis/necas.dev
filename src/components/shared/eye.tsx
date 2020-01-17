import React, { Component } from 'react';
import '../../stylesheets/shared/eye.scss';
import classnames from 'classnames';

interface Props {
  small: boolean;
  positions: {
    x: number;
    y: number;
  };
  hide?: boolean;
}

class Eye extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    const topValue =
      String(Math.round((this.props.positions.y / window.innerHeight) * 100)) +
      '%';
    const leftValue =
      String(Math.round((this.props.positions.x / window.innerWidth) * 100)) +
      '%';

    return (
      <div
        className={classnames(
          'eye',
          this.props.small ? 'smallEye' : '',
          this.props.hide ? 'invisible' : ''
        )}
      >
        <div
          className="ball"
          style={this.props.small ? {} : { top: topValue, left: leftValue }}
        >
          <div className="iris" />
        </div>
      </div>
    );
  }
}

export default Eye;
