import resultEmptyImg from '../assets/images/illustration-empty.svg';

type Props = {};

const Result = (props: Props) => {
  return (
    <div className='bg-Slate900 text-white p-4 md:w-[500px] lg:w-[470px] lg:rounded-r-2xl lg:rounded-bl-[5rem] w-[100vw] sm:w-auto'>
      <div className='flex flex-col items-center justify-center h-full'>
        <div>
          <img
            src={resultEmptyImg}
            alt='result empty'
          />
        </div>
        <p className='mt-4 text-2xl text-center font-jsBold'>
          Results shown here
        </p>
        <p className='mt-3 text-gray-300 text-sm text-center font-jsMedium'>
          Complete the form and click "calculate repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
};

export default Result;
