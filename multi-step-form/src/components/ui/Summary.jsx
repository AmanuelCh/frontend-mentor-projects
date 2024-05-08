import Button from './Button';

const Summary = ({
  currentIndex,
  planType,
  mode,
  fees,
  selectedAddons,
  dispatch,
}) => {
  const capitalize = (word) => {
    return word.split('')[0].toUpperCase() + word.split('').slice(1).join('');
  };

  const fee =
    planType === 'mo' && mode === 'arcade'
      ? fees.arcade.perMo
      : planType === 'yr' && mode === 'arcade'
      ? fees.arcade.perYr
      : planType === 'mo' && mode === 'advanced'
      ? fees.advanced.perMo
      : planType === 'yr' && mode === 'advanced'
      ? fees.advanced.perYr
      : planType === 'mo' && mode === 'pro'
      ? fees.pro.perMo
      : fees.pro.perYr;

  const addonFee = selectedAddons.reduce((prev, cur) => prev + cur.price, 0);
  const addonTotalFee = planType === 'mo' ? addonFee : addonFee * 10;
  const totalFee = fee + addonTotalFee;

  return (
    <div>
      <h2 className='lg:text-4xl text-3xl text-marineBlue font-semibold font-ubuntuMedium'>
        Finishing up
      </h2>
      <p className='mt-3 mb-8 text-coolGray'>
        Double-check everything looks OK before confirming.
      </p>

      <div className='bg-alabaster rounded-lg py-5 px-5 lg:px-7 text-coolGray'>
        <div>
          <div
            className={`flex justify-between items-center mb-6 ${
              selectedAddons.length !== 0 && 'pb-6 border-b border-b-lightGray'
            }`}
          >
            <div>
              <p className='text-marineBlue font-semibold lg:text-[18px]'>
                {capitalize(mode)} ({planType === 'mo' ? 'Monthly' : 'Yearly'})
              </p>
              <p
                className='mt-1 underline cursor-pointer hover:text-purplishBlue'
                onClick={() => dispatch({ type: 'previous', payload: 2 })}
              >
                Change
              </p>
            </div>
            <p className='font-semibold text-marineBlue text-[14px] lg:text-[16px]'>
              ${fee}/mo
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            {selectedAddons.map((addon, index) => (
              <div
                className='flex justify-between items-center'
                key={index}
              >
                <p className='text-[14px]'>{addon.title}</p>
                <p className='text-marineBlue text-[14px]'>
                  +${planType === 'mo' ? addon.price : addon.price * 10}/
                  {planType}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-between p-7 pb-0 lg:pb-8'>
        <p className='text-coolGray text-[14px]'>
          Total (per {planType === 'mo' ? 'month' : 'year'})
        </p>
        <p className='text-purplishBlue lg:text-[20px] font-bold'>
          +${totalFee}/{planType === 'mo' ? 'mo' : 'yr'}
        </p>
      </div>

      <div className='lg:mt-6 -mt-4'>
        <Button
          currentIndex={currentIndex}
          dispatch={dispatch}
          amount={2}
          type='confirm'
        />
      </div>
    </div>
  );
};

export default Summary;
