import React, { Component } from "react";
import SocialLink from "./shared/socialLink";
import Card from "./shared/card";
import "../stylesheets/aboutMe.scss";

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
          Hi, I&apos;m Manuel Costa Reis and this is my personal website.
          <br />
          <br />
          <strong>A quick summary</strong>
        </p>
        <ul className="summary">
          <li>I&apos;m currently a data scientist at Casafari.</li>
          <li>
            I have previously worked as a{" "}
            <strong>full-stack software developer</strong>, as an{" "}
            <strong>economist</strong> and I&apos;ve had my own start-up,
            dedicated to podcasts.
          </li>
          <li>
            <strong>Data science</strong> is for me a mixture of both
            development and economics. I end up gravitating towards it as I
            enjoy both implementing products in code but also trying to use data
            as a source for making decision.
          </li>
          <li>
            I listen to a lot of podcasts and audiobooks -{" "}
            <em>Over 65 days of recorded listening.</em>
          </li>
          <li>
            I&apos;m very interested in music, namely collecting vinyl and in
            cinema. I host a weekly cinema club at my place.
          </li>
          <li>
            Besides all this reading ends up being one of my favorite
            activities. Both fiction and non-fiction. The best books I&apos;ve
            read recently are <em>East of Eden</em> by John Steinbeck,{" "}
            <em>What I talk when I talk about running</em> by Haruki Murakami,{" "}
            and <em>Other minds</em> by Peter Godfrey-Smith.
          </li>
          <li>I have a very large dog. 🐶</li>
        </ul>
        <br />
      </Card>
    );
  }
}

export default AboutMe;
