import {
  bgLightMobile,
  bgDarkMobile,
  bgLightDesktop,
  bgDarkDesktop,
} from '../constants/index.js';

const Header = ({ dark, isDesktop }) => {
  return (
    <div className='absolute'>
      {isDesktop < 768 ? (
        <header>
          <img
            src={dark ? bgDarkMobile : bgLightMobile}
            className='w-[768px]'
          />
        </header>
      ) : (
        <header>
          <img
            src={dark ? bgDarkDesktop : bgLightDesktop}
            className='w-full'
          />
        </header>
      )}
    </div>
  );
};

export default Header;
