import InputSVGDesktop from '../assets/bg-shorten-desktop.svg';
import InputSVGMobile from '../assets/bg-shorten-mobile.svg';

const Input = () => {
  return (
    <div className='input-bg max-w-[90%] container mx-auto bg-darkViolet rounded-md'>
      <div className='p-6 flex flex-col justify-between gap-6 lg:p-12 lg:flex-row'>
        <input
          type='text'
          className='bg-white py-3 pl-6 rounded-md w-full outline-none'
          placeholder='Shorten a link here'
        />
        <button className='btn px-8 rounded-md font-semibold hover:bg-cyan-300'>
          Shorten
        </button>
      </div>
    </div>
  );
};

export default Input;
