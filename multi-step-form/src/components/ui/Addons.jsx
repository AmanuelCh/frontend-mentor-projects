import { useEffect } from 'react';
import Addon from './Addon';
import Button from './Button';

import { motion } from 'framer-motion';
import { textVariant } from '../../../utils/motion';

const addons = [
  {
    title: 'Online service',
    desc: 'Access to multiplayer games',
    price: 1,
  },
  {
    title: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    title: 'Customizable profile',
    desc: 'Custom theme on your profile',
    price: 2,
  },
];

const Addons = ({ planType, currentIndex, dispatch }) => {
  useEffect(() => {
    dispatch({ type: 'resetAddons' });
  }, []);

  return (
    <div>
      <motion.h2
        className='lg:text-4xl text-3xl text-marineBlue font-semibold font-ubuntuMedium'
        variants={textVariant(0.05)}
        initial='hidden'
        whileInView='show'
      >
        Pick add-ons
      </motion.h2>
      <motion.p
        className='mt-3 mb-8 text-coolGray'
        variants={textVariant(0.1)}
        initial='hidden'
        whileInView='show'
      >
        Add-ons help enhance your gaming experience.
      </motion.p>
      <div className='flex flex-col gap-6'>
        {addons.map((addon, index) => (
          <Addon
            addon={addon}
            planType={planType}
            dispatch={dispatch}
            index={index}
            key={index}
          />
        ))}
      </div>

      <div className='lg:mt-12'>
        <Button
          currentIndex={currentIndex}
          dispatch={dispatch}
          amount={2}
        />
      </div>
    </div>
  );
};

export default Addons;
