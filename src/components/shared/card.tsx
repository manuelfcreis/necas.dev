import React, { Component } from "react";
import "../../stylesheets/shared/card.scss";

class Card extends Component<{}> {
  render(): JSX.Element {
    return <div className="card">{this.props.children}</div>;
  }
}

export default Card;
