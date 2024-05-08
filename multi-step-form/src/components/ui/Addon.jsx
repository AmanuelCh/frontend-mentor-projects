import { useRef, useState } from 'react';

const Addon = ({ addon, planType, dispatch }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);

    !isClicked
      ? dispatch({ type: 'addAddons', payload: addon })
      : dispatch({ type: 'removeAddons', payload: addon });
  };

  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:border-purplishBlue cursor-pointer ${
        isClicked && 'border-purplishBlue'
      }`}
      onClick={() => handleClick()}
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
    </div>
  );
};

export default Addon;
