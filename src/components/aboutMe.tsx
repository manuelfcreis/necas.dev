import React, { Component } from 'react';
import SocialLink from './shared/social_link';
import Card from './shared/card';

class AboutMe extends Component<{}> {
  render(): JSX.Element {
    return (
      <Card>
        <h2>Manuel Costa Reis</h2>
        <ul className="iconList">
          <SocialLink
            link="https://www.linkedin.com/in/manuelfcreis/"
            image="assets/linkedin.png"
            alt="Linkedin"
          />
          <SocialLink
            link="https://twitter.com/ManuelCReis"
            image="assets/twitter.png"
            alt="Twitter"
          />
        </ul>

        <hr />
        <p>
          I&apos;m Manuel: Programmer, Economist, Data Scientist and all around
          nerd.
        </p>
        <p>
          Currently I&apos;m a Data Scientist at{' '}
          <a href="https://casafari.com">Casafari</a>
          &nbsp;and I&apos;m looking to finish some side projects mostly related
          to Data Science, Deep Learning, and Gaming.
        </p>
      </Card>
    );
  }
}

export default AboutMe;
