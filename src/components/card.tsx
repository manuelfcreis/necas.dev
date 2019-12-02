import React, { Component } from 'react';
import '../stylesheets/card.scss';
import SocialLink from './social_link'

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
            <SocialLink link="https://www.linkedin.com/in/manuelfcreis/" image="assets/linkedin.png" alt="Linkedin" />
            <SocialLink link="https://twitter.com/ManuelCReis" image="assets/twitter.png" alt="Twitter" />
          </ul>

          <p>I'm Manuel: Programmer, Economist, Data Scientist and all around nerd.</p>
          <p>Currently I'm a Data Scientist at<a href='https://casafari.com'> Casafari </a>
            and I'm looking to finish some side projects mostly related to Data Science, Deep Learning,
            and Gaming.</p>
          <p>I'm also a part-time farmer. 🐮</p>
        </div>
      </div>
    );
  }
}

export default Card;
