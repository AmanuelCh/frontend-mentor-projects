import { useState } from 'react';
import useMedia from 'use-media';

import bgDesktop from '../assets/images/background-pattern-desktop.svg';
import bgMobile from '../assets/images/background-pattern-mobile.svg';

const Header = () => {
  const isDesktop = useMedia({ minWidth: '480px' });

  return (
    <header>
      <img
        src={isDesktop ? bgDesktop : bgMobile}
        className='header-image'
        alt='desktop background'
      />
    </header>
  );
};

export default Header;
