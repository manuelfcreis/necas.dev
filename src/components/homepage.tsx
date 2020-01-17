import React, { Component } from 'react';
import Eye from './shared/eye';

interface Props {
  positions: {
    x: number;
    y: number;
  };
  small: boolean;
}
class Homepage extends Component<Props> {
  render(): JSX.Element {
    return <Eye small={false} positions={this.props.positions} />;
  }
}

export default Homepage;
