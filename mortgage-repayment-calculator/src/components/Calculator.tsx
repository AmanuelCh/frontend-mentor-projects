import { Dispatch, SetStateAction, useState } from 'react';
import calcImg from '../assets/images/icon-calculator.svg';

type Props = {
  setTotalMortgage: Dispatch<SetStateAction<number>>;
};

const Calculator = ({ setTotalMortgage }: Props) => {
  const [mortgageAmount, setMortgageAmount]: any = useState();
  const [mortgageTerm, setMortgageTerm]: any = useState();
  const [interestRate, setInterestRate]: any = useState();
  const [mortgageType, setMortgageType] = useState('repayment');

  // switch between mortgage type
  const handleMortgageType = (type: string) => {
    setMortgageType(type);
  };

  // calculate the mortgage based on the type of mortgage
  const calculateMortgage = () => {
    // set them to null to show error message
    !mortgageAmount && setMortgageAmount(null);
    !mortgageTerm && setMortgageTerm(null);
    !interestRate && setInterestRate(null);
    if (!mortgageAmount || !mortgageTerm || !interestRate) return;

    const mortgageAmountNum = Number(mortgageAmount);
    const monthlyInterestRate = Number(interestRate) / 1200;
    const totalNumberOfPayments = Number(mortgageTerm) * 12;

    if (mortgageType === 'repayment') {
      const numerator =
        mortgageAmountNum *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalNumberOfPayments);
      const denominator =
        Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1;
      const totalMortgage = numerator / denominator;

      setTotalMortgage(Number(totalMortgage.toFixed(2)));
    } else if (mortgageType === 'interestOnly') {
      const totalMortgage = mortgageAmountNum * monthlyInterestRate;
      setTotalMortgage(Number(totalMortgage.toFixed(2)));
    }
  };

  const handleClearAll = () => {
    setMortgageAmount();
    setMortgageTerm();
    setInterestRate();
  };

  return (
    <div className='p-6 bg-white md:w-[500px] lg:w-[470px] lg:rounded-2xl w-[100vw] sm:w-auto'>
      <div className='flex flex-col justify-between gap-3 sm:flex-row sm:gap-8 sm:items-center'>
        <h3 className='text-Slate900 text-xl font-jsBold'>
          Mortgage Calculator
        </h3>
        <p
          className='text-sm text-Slate500 underline cursor-pointer hover:text-Slate900'
          onClick={handleClearAll}
        >
          Clear All
        </p>
      </div>

      <div className='mt-10'>
        <div>
          <p className='input-title'>Mortgage Amount</p>
          <div className='relative group'>
            <input
              className={`calc-input ${
                mortgageAmount === null ? 'border-Red' : ''
              }`}
              type='text'
              value={mortgageAmount ? mortgageAmount : ''}
              onChange={(e) => {
                setMortgageAmount(e.target.value);
              }}
            />
            <span
              className={`absolute top-1/2 left-[0.5px] -translate-y-1/2 bg-Slate100 h-11/12 ml-[.8px] px-4 py-3 rounded-l-md mb-2px text-Slate700 font-bold transition group-focus:bg-Lime ${
                mortgageAmount === null ? 'bg-Red text-White rounded-l-sm' : ''
              }`}
            >
              ￡
            </span>
          </div>
          {mortgageAmount === null && (
            <p className={`text-sm text-Red mt-2`}>This field is required</p>
          )}
        </div>
        <div className='mt-6 flex flex-col gap-6 lg:flex-row'>
          <div className='flex flex-col'>
            <p className='input-title'>Mortgage Term</p>
            <div className='relative'>
              <input
                className={`calc-input calc-input--lower ${
                  mortgageTerm === null ? 'border-Red' : ''
                }`}
                type='text'
                value={mortgageTerm ? mortgageTerm : ''}
                onChange={(e) => {
                  setMortgageTerm(e.target.value);
                }}
              />
              <span
                className={`absolute top-1/2 right-[0.5px] -translate-y-1/2 bg-Slate100 h-11/12 ml-[.8px] px-4 py-3 rounded-r-md mb-2px text-Slate700 font-bold transition group-hover:bg-Lime group-hover:text-Slate900 group-focus:bg-Lime ${
                  mortgageTerm === null ? 'bg-Red text-White rounded-r-sm' : ''
                }`}
              >
                years
              </span>
            </div>
            {mortgageTerm === null && (
              <p className={`text-sm text-Red mt-2`}>This field is required</p>
            )}
          </div>
          <div className='flex flex-col'>
            <p className='input-title'>Interest Rate</p>
            <div className='relative'>
              <input
                className={`calc-input calc-input--lower ${
                  interestRate === null ? 'border-Red' : ''
                }`}
                type='text'
                value={interestRate ? interestRate : ''}
                onChange={(e) => {
                  setInterestRate(e.target.value);
                }}
              />
              <span
                className={`absolute top-1/2 right-[0.5px] -translate-y-1/2 bg-Slate100 h-11/12 px-4 py-3 rounded-r-md mb-2px text-Slate700 font-bold transition group-hover:bg-Lime group-hover:text-Slate900 group-focus:bg-Lime ${
                  interestRate === null ? 'bg-Red text-White' : ''
                }`}
              >
                %
              </span>
            </div>
            {interestRate === null && (
              <p className={`text-sm text-Red mt-2`}>This field is required</p>
            )}
          </div>
        </div>
        <div className='mt-6'>
          <div className='flex flex-col'>
            <p className='input-title'>Mortgage Type</p>
            <div className='flex flex-col gap-4'>
              <div
                className={`flex items-center gap-6 calc-input pl-4 ${
                  mortgageType === 'repayment' ? 'bg-yellow-100' : ''
                }`}
                onClick={() => handleMortgageType('repayment')}
              >
                <input
                  type='radio'
                  name='type'
                  checked={mortgageType === 'repayment' ? true : false}
                />
                <div>
                  <p>Repayment</p>
                </div>
              </div>
              <div
                className={`flex items-center gap-6 calc-input pl-4 ${
                  mortgageType === 'interestOnly' ? 'bg-yellow-100' : ''
                }`}
                onClick={() => setMortgageType('interestOnly')}
              >
                <input
                  type='radio'
                  name='type'
                  checked={mortgageType === 'interestOnly' ? true : false}
                />

                <div>
                  <p>Interest Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-9 mb-2'>
          <button
            className='bg-Lime py-3 px-8 flex items-center justify-center gap-3 font-jsBold rounded-full w-full lg:w-max hover:opacity-70'
            onClick={calculateMortgage}
          >
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
