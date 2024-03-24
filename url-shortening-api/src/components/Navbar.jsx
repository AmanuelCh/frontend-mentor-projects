import { useState } from 'react';

import Logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container mx-auto mt-6  px-6 flex items-center justify-between relative lg:mt-10 lg:px-0'>
      <div className='flex items-center gap-16'>
        <img
          src={Logo}
          alt='Shortly Logo'
        />

        <ul className='gap-6 nav-text hidden lg:flex'>
          <li className='cursor-pointer hover:text-veryDarkViolet'>Features</li>
          <li className='cursor-pointer hover:text-veryDarkViolet'>Pricing</li>
          <li className='cursor-pointer hover:text-veryDarkViolet'>
            Resources
          </li>
        </ul>
      </div>

      <div className='gap-10 hidden lg:flex'>
        <button className='nav-text cursor-pointer hover:text-veryDarkViolet'>
          Login
        </button>
        <button className='btn cursor-pointer hover:opacity-50 font-semibold'>
          Sign Up
        </button>
      </div>

      <div
        className='cursor-pointer mt-2 lg:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='menu'></p>
        <p className='menu'></p>
        <p className='menu'></p>
      </div>

      {isOpen && (
        <div className='bg-darkViolet absolute top-14 py-6 w-[90%] rounded-md block lg:hidden'>
          <div className='flex flex-col items-center '>
            <ul className='w-[80%] pb-6 gap-6 text-white space-y-6 text-center font-semibold border-b-[1px] border-solid  border-gray-500'>
              <li className='cursor-pointer hover:text-gray-300'>Features</li>
              <li className='cursor-pointer hover:text-gray-300'>Pricing</li>
              <li className='cursor-pointer hover:text-gray-300'>Resources</li>
            </ul>

            <div className='w-[80%] flex flex-col mt-6 gap-6'>
              <button className='font-semibold text-white cursor-pointer hover:text-gray-300'>
                Login
              </button>
              <button className='w-full btn cursor-pointer hover:opacity-80 font-semibold'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
