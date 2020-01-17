import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/shared/menu.scss';
import Eye from './eye';

interface Props {
  positions: {
    x: number;
    y: number;
  };
  history: any;
  location: any;
  match: any;
  staticContext?: any;
}

class Menu extends Component<Props> {
  render(): JSX.Element {
    return (
      <div className="menu">
        <ul>
          <Eye
            small={true}
            positions={this.props.positions}
            hide={this.props.location.pathname == '/'}
          />
          <li>
            <Link
              to={this.props.location.pathname == '/about' ? '/' : '/about'}
            >
              About me
            </Link>
          </li>
          <li>
            <Link to={this.props.location.pathname == '/blog' ? '/' : '/blog'}>
              Blog
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dropbox.com/s/9vlsiv339xoipzo/resume.pdf?dl=0"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/manuelfcreis"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const menuWithRouter = withRouter((props: Props) => <Menu {...props} />);
export default menuWithRouter;
