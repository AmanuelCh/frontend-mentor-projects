import confirmSvg from '../../../public/assets/images/icon-thank-you.svg';

const Confirm = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-2 mt-8 lg:mt-20'>
        <img src={confirmSvg} />
        <h2 className='lg:text-4xl text-3xl text-marineBlue font-semibold font-ubuntuMedium mt-6'>
          Thank You!
        </h2>
        <p className='mt-3 mb-8 text-coolGray text-center'>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
};

export default Confirm;
