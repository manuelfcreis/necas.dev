import React, { Component } from "react";
import "../../stylesheets/shared/eye.scss";
import classnames from "classnames";

interface Props {
  small: boolean;
  positions: {
    x: number;
    y: number;
  };
  hide?: boolean;
}

class Eye extends Component<Props> {
  eyeRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.eyeRef = React.createRef();
  }

  calculateEyePosition(mouse: number, window: number, kind: any): string {
    let eyePosition = 0;

    if (this.eyeRef.current) {
      eyePosition =
        kind === "top"
          ? this.eyeRef.current.getBoundingClientRect().top +
            this.eyeRef.current.getBoundingClientRect().height / 2
          : this.eyeRef.current.getBoundingClientRect().left +
            this.eyeRef.current.getBoundingClientRect().width / 2;
    }

    const mouseRelative = mouse / window;
    const eyeRelative = eyePosition / window;
    const position = mouseRelative / (eyeRelative * 2);

    return String(Math.min(Math.max(Math.round(position * 100), 20), 80)) + "%";
  }

  render(): JSX.Element {
    const topValue = this.calculateEyePosition(
      this.props.positions.y,
      window.innerHeight,
      "top"
    );

    const leftValue = this.calculateEyePosition(
      this.props.positions.x,
      window.innerWidth,
      "left"
    );

    return (
      <div
        ref={this.eyeRef}
        className={classnames(
          "eye",
          this.props.small ? "smallEye" : "",
          this.props.hide ? "invisible" : ""
        )}
      >
        <div className="ball" style={{ top: topValue, left: leftValue }}>
          <div className="iris" />
        </div>
      </div>
    );
  }
}

export default Eye;
