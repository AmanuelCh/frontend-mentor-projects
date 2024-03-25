import HeroImage from '../assets/illustration-working.svg'

const Hero = () => {
  return (
    <div className='container mx-auto mt-6 px-6 flex items-center relative lg:mt-24 lg:px-0'>
      <div className='flex items-center justify-between flex-col-reverse lg:flex-row'>
        <div className='mt-8 flex flex-col items-center lg:block lg:mt-0'>
          <p className='text-veryDarkBlue text-4xl font-bold text-center leading-[2.5rem] lg:leading-[4rem] lg:text-6xl lg:text-left'>More than just shorter links</p>

          <p className='mt-2 body-text text-center w-full lg:w-[85%] lg:text-left'> Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>


        <button className='btn mt-6 hover:opacity-50'>Get Started</button>

        </div>

        <div className='left-heros lg:w-[70rem]'>
          <img src={HeroImage} className='lg:ml-[1rem] lg:w-full' alt="working person" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
