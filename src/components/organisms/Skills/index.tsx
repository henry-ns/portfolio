import React, { useState } from 'react';

import { motion } from 'framer-motion';

import SkillItem from '~/components/atoms/SkillItem';
import Title from '~/components/atoms/Title';

import useAnimationRef from '~/hooks/useAnimationRef';

import arduinoIcon from '~/assets/svgs/arduino.svg';
import cIcon from '~/assets/svgs/c.svg';
import css3Icon from '~/assets/svgs/css3.svg';
import html5Icon from '~/assets/svgs/html5.svg';
import iotIcon from '~/assets/svgs/iot.svg';
import javaIcon from '~/assets/svgs/java.svg';
import jsIcon from '~/assets/svgs/javascript.svg';
import kotlinIcon from '~/assets/svgs/kotlin.svg';
import nodeIcon from '~/assets/svgs/nodejs.svg';
import pythonIcon from '~/assets/svgs/python.svg';
import reactIcon from '~/assets/svgs/react.svg';
import tsIcon from '~/assets/svgs/typescript.svg';

import { Container, SubTitle } from './styles';

const focus = [
  {
    description: 'Typescript',
    icon: tsIcon,
  },
  {
    description: 'Javascript',
    icon: jsIcon,
  },
  {
    description: 'HTML5',
    icon: html5Icon,
  },
  {
    description: 'CSS3',
    icon: css3Icon,
  },
  {
    description: 'React',
    icon: reactIcon,
  },
  {
    description: 'Node.js',
    icon: nodeIcon,
  },
];

const others = [
  {
    description: 'Arduino',
    icon: arduinoIcon,
  },
  {
    description: 'Java',
    icon: javaIcon,
  },
  {
    description: 'IoT',
    icon: iotIcon,
  },
  {
    description: 'C/C++',
    icon: cIcon,
  },
  {
    description: 'Kotlin',
    icon: kotlinIcon,
  },
  {
    description: 'Python',
    icon: pythonIcon,
  },
];

const listAnimaton = {
  show: (delay = 0.4) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
  hide: (delay = 0.4) => ({
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay,
    },
  }),
};

const Skills: React.FC = () => {
  const [inFocus, setInFocus] = useState(-1);

  const [animationControls, ref] = useAnimationRef();

  function handleTap(index: number): void {
    setInFocus(inFocus === index ? -1 : index);
  }

  function onHoverStart(index: number): void {
    setInFocus(index);
  }

  function onHoverEnd(): void {
    setInFocus(-1);
  }

  return (
    <Container id="skills" ref={ref}>
      <Title animationControls={animationControls}>Skills</Title>
      <div>
        <SubTitle>My Focus</SubTitle>
        <motion.ul variants={listAnimaton} animate={animationControls}>
          {focus.map((item, index) => (
            <SkillItem
              src={item.icon}
              key={item.description}
              description={item.description}
              isEnabled={index === inFocus}
              onTap={() => handleTap(index)}
              onHoverStart={() => onHoverStart(index)}
              onHoverEnd={onHoverEnd}
            />
          ))}
        </motion.ul>
        <SubTitle>I&apos;ve made cool things with</SubTitle>
        <motion.ul
          custom={0.6}
          variants={listAnimaton}
          animate={animationControls}
        >
          {others.map((item, index) => (
            <SkillItem
              src={item.icon}
              key={item.description}
              description={item.description}
              isEnabled={index + focus.length === inFocus}
              onTap={() => handleTap(index + focus.length)}
              onHoverStart={() => onHoverStart(index + focus.length)}
              onHoverEnd={onHoverEnd}
            />
          ))}
        </motion.ul>
      </div>
    </Container>
  );
};

export default React.memo(Skills);
