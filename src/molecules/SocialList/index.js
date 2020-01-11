import React, { useMemo } from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from 'react-icons/fi';

import PropTypes from 'prop-types';

import SocialIcon from '~/atoms/SocialIcon';

import { Container } from './styles';

const data = [
  {
    name: 'github',
    link: 'https://github.com/henry-ns',
    description: 'My github profile',
    component: <FiGithub />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/henry-ns/',
    description: 'My linkedin profile',
    component: <FiLinkedin />,
  },
  {
    name: 'instagram',
    link: 'https://instagram.com/_henry_ns',
    description: 'My instagram profile',
    component: <FiInstagram />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/_henry_ns',
    description: 'My twitter profile',
    component: <FiTwitter />,
  },
  {
    name: 'email',
    link: 'mailto:enrque.ns@gmail.com',
    description: 'My email for contacts',
    component: <FiMail />,
  },
];

function SocialList({ excluded, isAnimated }) {
  const dataFiltered = useMemo(
    () => data.filter(item => !excluded.includes(item.name)),
    [excluded]
  );

  return (
    <Container isAnimated={isAnimated}>
      {dataFiltered.map(item => {
        return (
          <li key={item.link}>
            <SocialIcon link={item.link} alt={item.description}>
              {item.component}
            </SocialIcon>
          </li>
        );
      })}
    </Container>
  );
}

SocialList.defaultProps = {
  excluded: [],
  isAnimated: true,
};

SocialList.propTypes = {
  excluded: PropTypes.arrayOf(PropTypes.string),
  isAnimated: PropTypes.bool,
};

export default SocialList;
