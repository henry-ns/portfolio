import React from 'react';

import { Variants, Transition } from 'framer-motion';

import SEO, { SEOProps } from '@/components/atoms/SEO';

import { Container, TransitionFrame } from './styles';

interface LayoutProps {
  id?: string;
  className?: string;
  seo: SEOProps;
}

const transitionVariants: Variants = {
  initial: {
    x: '0%',
  },
  animate: {
    x: '100%',
    transition: {
      delay: 0.15,
      duration: 0.5,
    },
  },
  exit: {
    x: ['-100%', '0%'],
    transition: {
      duration: 0.5,
      times: [0, 1],
    },
  },
};

const transition: Transition = {
  duration: 0.5,
  ease: 'easeInOut',
};

const Layout: React.FC<LayoutProps> = ({ children, seo, ...rest }) => {
  return (
    <Container {...rest}>
      <TransitionFrame
        variants={transitionVariants}
        transition={transition}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <SEO {...seo} />
      {children}
    </Container>
  );
};

export default Layout;
