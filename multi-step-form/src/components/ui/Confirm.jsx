import confirmSvg from '../../../public/assets/images/icon-thank-you.svg';

import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../../../utils/motion';

const Confirm = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-2 mt-8 lg:mt-20'>
        <motion.img
          src={confirmSvg}
          variants={textVariant(0.1)}
          initial='hidden'
          whileInView='show'
        />
        <motion.h2
          className='lg:text-4xl text-3xl text-marineBlue font-semibold font-ubuntuMedium mt-6'
          variants={textVariant(0.2)}
          initial='hidden'
          whileInView='show'
        >
          Thank You!
        </motion.h2>
        <motion.p
          className='mt-3 mb-8 text-coolGray text-center'
          variants={textVariant(0.3)}
          initial='hidden'
          whileInView='show'
        >
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </motion.p>
      </div>
    </div>
  );
};

export default Confirm;
