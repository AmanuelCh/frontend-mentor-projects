import MobileSVG from '../assets/bg-boost-mobile.svg';
import DesktopSVG from '../assets/bg-boost-desktop.svg';

const CTA = () => {
  return (
    <div className='cta-bg py-24 bg-darkViolet lg:py-20'>
      <div className='container mx-auto px-6 flex items-center justify-center flex-col gap-6'>
        <p className='text-white text-3xl font-bold text-center'>
          Boost your links today
        </p>
        <button className='btn hover:bg-cyan-300'>Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
