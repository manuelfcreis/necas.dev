import React, { Component } from "react";
import SocialLink from "./shared/socialLink";
import Card from "./shared/card";
import "../stylesheets/aboutMe.scss";

class AboutMe extends Component<{}> {
  render(): JSX.Element {
    return (
      <div className="container">
        <Card>
          <h2>Manuel Costa Reis</h2>
          <ul className="iconList">
            <SocialLink
              link="https://twitter.com/ManuelCReis"
              image="assets/twitter.png"
              alt="Twitter"
            />
          </ul>

          <hr />
          <ul className="summary">
            <li>
              I'm a{" "}
              full-stack software developer, data scientist, {" "}
              economist and I&apos;ve had my own start-up,
              dedicated to podcasts.
            </li>
            <li>
              <strong>Data science</strong> is for me a mixture of both
              development and economics. I end up gravitating towards it as I
              enjoy both implementing products in code but also trying to use
              data as a source for making decisions.
            </li>
            <li>
              I listen to a lot of podcasts and audiobooks.
            </li>
            <li>
              I&apos;m very interested in music. I&apos;m always looking for new
              things. I&apos;m also very into cinema, host a weekly
              cinema club and I keep trying to learn more about cinematography and cinema history.
            </li>
            <li>
              Besides all this reading ends up being one of my favorite
              activities. Both fiction and non-fiction. I try to vary between the two.
            </li>
            <li>I have a very large dog. 🐶</li>
          </ul>
          <br />
        </Card>
      </div>
    );
  }
}

export default AboutMe;
