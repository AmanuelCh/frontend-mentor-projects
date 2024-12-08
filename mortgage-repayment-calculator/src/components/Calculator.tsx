import { useState } from 'react';
import calcImg from '../assets/images/icon-calculator.svg';

type Props = {};

const Calculator = (props: Props) => {
  const [mortgage, setMortgage] = useState('repayment');

  const handleMortgageType = (type: string) => {
    setMortgage(type);
  };

  return (
    <div className='p-6 bg-white md:w-[500px] lg:w-[470px] lg:rounded-2xl w-[100vw] sm:w-auto'>
      <div className='flex flex-col justify-between gap-3 sm:flex-row sm:gap-8 sm:items-center'>
        <h3 className='text-Slate900 text-xl font-jsBold'>
          Mortgage Calculator
        </h3>
        <p className='text-sm text-Slate500 underline cursor-pointer hover:text-Slate900'>
          Clear All
        </p>
      </div>

      <div className='mt-10'>
        <div>
          <p className='input-title'>Mortgage Amount</p>
          <div className='relative group'>
            <input
              className='calc-input'
              type='text'
            />
            <span className='absolute top-1/2 left-[0.5px] -translate-y-1/2 bg-Slate100 h-11/12 ml-[.8px] px-4 py-3 rounded-l-md mb-2px text-Slate700 font-bold transition group-hover:bg-Lime group-hover:text-Slate900 group-focus:bg-Lime'>
              ￡
            </span>
          </div>
        </div>
        <div className='mt-6 flex flex-col gap-6 lg:flex-row'>
          <div className='flex flex-col'>
            <p className='input-title'>Mortgage Term</p>
            <div className='relative'>
              <input
                className='calc-input calc-input--lower'
                type='text'
              />
              <span className='absolute top-1/2 right-[0.5px] -translate-y-1/2 bg-Slate100 h-11/12 ml-[.8px] px-4 py-3 rounded-r-md mb-2px text-Slate700 font-bold transition group-hover:bg-Lime group-hover:text-Slate900 group-focus:bg-Lime'>
                years
              </span>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='input-title'>Interest Rate</p>
            <div className='relative'>
              <input
                className='calc-input calc-input--lower'
                type='text'
              />
              <span className='absolute top-1/2 right-[0.5px] -translate-y-1/2 bg-Slate100 h-11/12 px-4 py-3 rounded-r-md mb-2px text-Slate700 font-bold transition group-hover:bg-Lime group-hover:text-Slate900 group-focus:bg-Lime'>
                %
              </span>
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <div className='flex flex-col'>
            <p className='input-title'>Mortgage Type</p>
            <div className='flex flex-col gap-4'>
              <div
                className={`flex items-center gap-6 calc-input pl-4 ${
                  mortgage === 'repayment' ? 'bg-yellow-100' : ''
                }`}
                onClick={() => handleMortgageType('repayment')}
              >
                <input
                  type='radio'
                  name='type'
                  checked={mortgage === 'repayment' ? true : false}
                />
                <div>
                  <p>Repayment</p>
                </div>
              </div>
              <div
                className={`flex items-center gap-6 calc-input pl-4 ${
                  mortgage === 'interestOnly' ? 'bg-yellow-100' : ''
                }`}
                onClick={() => setMortgage('interestOnly')}
              >
                <input
                  type='radio'
                  name='type'
                  checked={mortgage === 'interestOnly' ? true : false}
                />

                <div>
                  <p>Interest Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-9 mb-2'>
          <button className='bg-Lime py-3 px-8 flex items-center justify-center gap-3 font-jsBold rounded-full w-full lg:w-max hover:opacity-70'>
            <img
              src={calcImg}
              alt=''
            />
            Calculate Repayments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
