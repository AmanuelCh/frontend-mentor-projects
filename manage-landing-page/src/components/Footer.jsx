import { useState } from 'react';

import logo from '../images/logo-white.svg'
import { facebookIcon, youtubeIcon, twitterIcon, pinterestIcon, instagramIcon } from '../constants/index'

const Footer = () => {
  const [email, setEmail] = useState('')

  return (
    <div className="bg-veryDarkBlue py-24 w-full relative">
      <div className="container mx-auto px-6 text-white flex flex-col-reverse gap-16 items-center lg:items-start lg:gap-0 lg:flex-row justify-between">
        <div className='flex flex-col-reverse gap-12 items-center lg:flex-col lg:gap-24 lg:items-start'>
          <div>
            <img src={logo} className='w-[180px] lg:w-[146px] lg:h-[24px]' alt="logo" />
          </div>
          <div className='flex gap-10 justify-between lg:justify-center lg:gap-3'>
            <img src={facebookIcon} className='w-[35px] lg:w-[20px] cursor-pointer' alt="facebook" />
            <img src={youtubeIcon} className='w-[35px] lg:w-[20px] cursor-pointer' alt="youtube" />
            <img src={twitterIcon} className='w-[35px] lg:w-[20px] cursor-pointer' alt="twitter" />
            <img src={pinterestIcon} className='w-[35px] lg:w-[20px] cursor-pointer' alt="pinterest" />
            <img src={instagramIcon} className='w-[35px] lg:w-[20px] cursor-pointer' alt="instagram" />
          </div>
        </div>

        <div className='flex gap-32'>
          <ul className='space-y-3'>
            <li className='hover:text-brightRed cursor-pointer'>Home</li>
            <li className='hover:text-brightRed cursor-pointer'>Pricing</li>
            <li className='hover:text-brightRed cursor-pointer'>Products</li>
            <li className='hover:text-brightRed cursor-pointer'>About Us</li>
          </ul>
          <ul className='space-y-3'>
            <li className='hover:text-brightRed cursor-pointer'>Careers</li>
            <li className='hover:text-brightRed cursor-pointer'>Community</li>
            <li className='hover:text-brightRed cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <div className='space-x-2'>
            <input type="email" value={email} className="py-3 px-2 pl-6 rounded-full text-darkBlue focus:outline-none active:outline-none" onChange={e => setEmail(e.target.value)} placeholder='someone@gmail.com' required/>
            <button className="btn btn-primary">Go</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
