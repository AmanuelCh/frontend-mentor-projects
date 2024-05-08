import { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/motion';

const Addon = ({ addon, planType, index, dispatch }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);

    !isClicked
      ? dispatch({ type: 'addAddons', payload: addon })
      : dispatch({ type: 'removeAddons', payload: addon });
  };

  return (
    <motion.div
      className={`flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:border-purplishBlue cursor-pointer ${
        isClicked && 'border-purplishBlue'
      }`}
      onClick={() => handleClick()}
      variants={fadeIn('left', 'spring', 0.3 * index, 0.8)}
      initial='hidden'
      whileInView='show'
    >
      <div className='flex items-center gap-6'>
        <input
          type='checkbox'
          checked={isClicked}
          onChange={() => {
            setIsClicked(!isClicked);
          }}
        />
        <div>
          <h3 className='text-marineBlue'>{addon.title}</h3>
          <p className='text-coolGray'>{addon.desc}</p>
        </div>
      </div>
      <p className='text-purplishBlue ml-9 mt-3 lg:mt-0 lg:ml-0'>
        +${planType === 'mo' ? addon.price : addon.price * 10}/
        {planType === 'mo' ? 'mo' : 'yr'}
      </p>
    </motion.div>
  );
};

export default Addon;
