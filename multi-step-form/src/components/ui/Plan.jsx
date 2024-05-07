import ArcadeSvg from '../../../public/assets/images/icon-arcade.svg';
import AdvancedSvg from '../../../public/assets/images/icon-advanced.svg';
import ProSvg from '../../../public/assets/images/icon-pro.svg';
import { useRef } from 'react';
import Button from './Button';

const plans = [
  {
    title: 'Arcade',
    icon: ArcadeSvg,
    price: 9,
  },
  {
    title: 'Advanced',
    icon: AdvancedSvg,
    price: 12,
  },
  {
    title: 'Pro',
    icon: ProSvg,
    price: 15,
  },
];

const Plan = ({ planType, currentIndex, dispatch, mode }) => {
  const toggleEl = useRef(null);

  const handleToggleClick = () => {
    toggleEl.current.classList.toggle('left-7');
    dispatch({ type: 'typeToggle' });
  };

  const handleModeClick = (title) => {
    title !== mode && dispatch({ type: 'modeChange', payload: title });
  };

  return (
    <div>
      <h2 className='lg:text-4xl text-3xl text-marineBlue font-semibold font-ubuntuMedium'>
        Select your plan
      </h2>
      <p className='mt-3 mb-8 text-coolGray'>
        You have the option of monthly or yearly billing.
      </p>

      <div className='grid lg:grid-cols-3 gap-6'>
        {plans.map((plan) => (
          <div
            className={`flex lg:flex-col gap-4 px-4 py-6 border border-lightGray rounded-lg lg:px-6 lg:py-8 hover:border-purplishBlue cursor-pointer ${
              plan.title.toLowerCase() === mode && 'border-purplishBlue'
            }`}
            key={plan.title}
            onClick={() => handleModeClick(plan.title.toLowerCase())}
          >
            <img
              src={plan.icon}
              alt={plan.title}
              className='w-[50px]'
            />
            <div>
              <h3 className='font-semibold font-ubuntuMedium text-marineBlue'>
                {plan.title}
              </h3>
              <p className='text-coolGray'>
                ${planType === 'mo' ? plan.price : plan.price * 10}/{planType}
              </p>
              {planType === 'yr' && (
                <p className='text-marineBlue text-[14px]'>2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className='flex gap-6 items-center justify-center mt-12 mb-6'>
        <p>Monthly</p>
        <div
          className='bg-marineBlue rounded-full px-6 py-3 w-fit cursor-pointer relative'
          onClick={handleToggleClick}
        >
          <div
            className='bg-white w-[10px] h-p[10px] rounded-full p-2 absolute top-1 left-1'
            ref={toggleEl}
          ></div>
        </div>
        <p>Yearly</p>
      </div>

      <div>
        <Button
          currentIndex={currentIndex}
          dispatch={dispatch}
          amount={2}
        />
      </div>
    </div>
  );
};

export default Plan;
