import React from 'react';

interface SocialLinkProps {
  link: string;
  image: string;
  alt: string;
}

const SocialLink = (props: SocialLinkProps): JSX.Element => {
  return (
    <li>
      <a className="icon" href={props.link}>
        <img src={props.image} alt={props.alt} />
      </a>
    </li>
  );
};

export default SocialLink;
