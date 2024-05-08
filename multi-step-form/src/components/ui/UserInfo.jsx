import { useState } from 'react';
import Button from './Button';

import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../../../utils/motion';

const UserInfo = ({
  currentIndex,
  inputError,
  dispatch,
  name,
  email,
  errorType,
}) => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <motion.h2
        className='lg:text-4xl text-3xl text-marineBlue font-semibold font-ubuntuMedium'
        variants={textVariant(0.05)}
        initial='hidden'
        whileInView='show'
      >
        Personal info
      </motion.h2>
      <motion.p
        className='mt-3 mb-8 text-coolGray'
        variants={textVariant(0.1)}
        initial='hidden'
        whileInView='show'
      >
        Please provide your name, email address, and phone number
      </motion.p>

      <motion.form
        className='flex flex-col gap-4 lg:gap-8'
        onSubmit={(e) => e.preventDefault()}
        variants={fadeIn('left', 'spring', 0.5, 0.8)}
        initial='hidden'
        whileInView='show'
      >
        <div className='flex flex-col gap-1'>
          <span className='text-marineBlue text-[15px]'>Name</span>
          <input
            type='text'
            className={`${
              errorType === 'nameError' && inputError && 'border-strawberryRed'
            }`}
            placeholder='e.g Stephen King'
            value={name}
            onChange={(e) =>
              dispatch({ type: 'nameChange', payload: e.target.value })
            }
            required
          />
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-marineBlue text-[15px]'>Email Address</span>
          <input
            type='email'
            className={`${
              errorType === 'emailError' && inputError && 'border-strawberryRed'
            }`}
            placeholder='e.g stephenking@gmail.com'
            value={email}
            onChange={(e) =>
              dispatch({ type: 'emailChange', payload: e.target.value })
            }
            required
          />
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-marineBlue text-[15px]'>Phone Number</span>
          <input
            type='tel'
            placeholder='e.g +1 234 567 890'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <Button
          currentIndex={currentIndex}
          dispatch={dispatch}
          amount={1}
          type='form'
          name={name}
          email={email}
        />
      </motion.form>
    </div>
  );
};

export default UserInfo;
