import React from "react";
import classnames from "classnames";
import "../../stylesheets/shared/card.scss";

interface Props {
  children: any;
  classes?: string;
}

const Card = (props: Props): JSX.Element => {
  return (
    <div className={classnames("card", props.classes)}>{props.children}</div>
  );
};

export default Card;
