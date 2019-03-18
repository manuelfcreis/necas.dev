import React, { Component } from 'react';
import '../stylesheets/card.scss';

interface iProps {
  open: boolean;
}
class Card extends Component<iProps> {
  render() {
    const names = "card " + (this.props.open ? 'card--open' : 'card--closed');

    return (
      <div className='cardContainer'>
        <div className={names}>
          <h2>Manuel <br />Costa Reis</h2>
          <ul className='iconList'>
            <li><a className='icon' href='https://www.linkedin.com/in/manuelfcreis/' ><img src='assets/linkedin.png' alt='Linkedin' /></a></li>
            {/* <li><a className='icon' href='#' ><img src='assets/instagram.png' alt='Instagram' /></a></li> */}
            <li><a className='icon' href='https://twitter.com/ManuelCReis' ><img src='assets/twitter.png' alt='Twitter' /></a></li>
          </ul>

          <p>I'm Manuel: Programmer, Economist, Data Scientist and all around nerd.</p>
          <p>Currently I'm a Data Scientist at<a href='https://landing.jobs'> Landing.jobs </a>
            and I'm looking to finish some side projects mostly related to Data Science, Deep Learning,
            and Gaming.</p>
          <p>I'm also a part-time farmer. 🐮</p>
        </div>
      </div>
    );
  }
}

export default Card;
