import {
  bgLightMobile,
  bgDarkMobile,
  bgLightDesktop,
  bgDarkDesktop,
} from '../constants/index.js';

const Header = ({ dark, isDesktop }) => {
  return (
    <>
      {isDesktop < 480 ? (
        <header
          className='bg-contain bg-no-repeat w-full h-[1440px] absolute -z-10 overflow-hidden dark:bg-veryDarkBlue'
          style={{
            backgroundImage: `url(${dark ? bgDarkMobile : bgLightMobile})`,
          }}
        ></header>
      ) : (
        <header
          className='bg-contain bg-no-repeat h-[1440px] w-full absolute -z-10 overflow-hidden dark:bg-veryDarkBlue'
          style={{
            backgroundImage: `url(${dark ? bgDarkDesktop : bgLightDesktop})`,
          }}
        ></header>
      )}
    </>
  );
};

export default Header;
