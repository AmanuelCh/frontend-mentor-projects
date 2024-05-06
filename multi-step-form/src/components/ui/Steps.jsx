const steps = [
  {
    num: 1,
    msg: 'Your Info',
  },
  {
    num: 2,
    msg: 'Select Plan',
  },
  {
    num: 3,
    msg: 'Add-ons',
  },
  {
    num: 4,
    msg: 'Summary',
  },
];

const Steps = ({ currentIndex, onHandleClick }) => {
  return (
    <div className='hidden lg:flex flex-col gap-4'>
      {steps.map((step, index) => (
        <div
          className='flex gap-6 items-start'
          key={step.num}
        >
          <div
            className={`${
              currentIndex >= index + 1
                ? 'bg-lightBlue text-black border border-lightBlue'
                : 'border'
            } py-1 px-3 rounded-full cursor-pointer`}
            onClick={() => onHandleClick(index + 1)}
          >
            {step.num}
          </div>
          <div>
            <p className='uppercase text-coolGray text-[14px]'>
              Step {step.num}
            </p>
            <p
              className='uppercase font-semibold cursor-pointer font-ubuntuMedium'
              onClick={() => onHandleClick(index + 1)}
            >
              {step.msg}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
