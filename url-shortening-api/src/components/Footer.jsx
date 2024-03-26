import Logo from '../assets/logo-white.svg';
import FacebookIcon from '../assets/icon-facebook.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import PinterestIcon from '../assets/icon-pinterest.svg';
import InstagramIcon from '../assets/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='py-16 bg-veryDarkViolet'>
      <div className='container mx-auto px-6 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between'>
        <div>
          <img
            src={Logo}
            className='cursor-pointer'
            alt='Shortly Logo'
          />
        </div>

        <div className='body-text text-center lg:text-left flex flex-col gap-4 text-[14px] lg:flex-row lg:gap-16'>
          <div>
            <p className='text-gray-200 text-[1rem] font-semibold my-4 mt-10 lg:my-0'>
              Features
            </p>

            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <p className='text-gray-200 text-[1rem] font-semibold my-4 lg:my-0'>
              Resources
            </p>

            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <p className='text-gray-200 text-[1rem] font-semibold my-4 lg:my-0'>
              Company
            </p>

            <ul>
              <li>About</li>
              <li>Out Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className='flex gap-8 mt-12 lg:mt-0'>
          <img
            src={FacebookIcon}
            className='cursor-pointer'
            alt='facebook icon'
          />
          <img
            src={TwitterIcon}
            className='cursor-pointer'
            alt='twitter icon'
          />
          <img
            src={PinterestIcon}
            className='cursor-pointer'
            alt='pinterest icon'
          />
          <img
            src={InstagramIcon}
            className='cursor-pointer'
            alt='instagram icon'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
