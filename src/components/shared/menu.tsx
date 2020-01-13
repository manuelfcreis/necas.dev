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
            <a target='_blank' href='/Blog'>Blog</a>
          </li>
          <li>
            <a target='_blank' href='https://www.dropbox.com/s/9vlsiv339xoipzo/resume.pdf?dl=0'>Resume</a>
          </li>
          <li>
            <a target='_blank' href='https://github.com/manuelfcreis'>Github</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
