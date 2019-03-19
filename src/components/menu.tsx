import React, { Component } from 'react';
import '../stylesheets/menu.scss';

interface iProps {
  menuClick: any
}

class Menu extends Component<iProps> {
  render() {
    return (
      <div className="menu">
        <ul>
          <li>
            <p onClick={this.props.menuClick}>About me</p>
          </li>
          <li>
            <a href='/resume.pdf'>Resume</a>
          </li>
          <li>
            <a href='https://github.com/manuelfcreis'>Github</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;