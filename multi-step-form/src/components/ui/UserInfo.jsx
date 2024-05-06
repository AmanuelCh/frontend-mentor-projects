import { useState } from 'react';

const UserInfo = ({ currentIndex, dispatch }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = () => {
    dispatch({ type: 'next', payload: currentIndex + 1 });
  };

  return (
    <div>
      <h2 className='lg:text-4xl text-3xl text-marineBlue font-semibold font-ubuntuMedium'>
        Personal info
      </h2>
      <p className='mt-3 mb-8 text-coolGray'>
        Please provide your name, email address, and phone number
      </p>

      <form
        className='flex flex-col gap-4 lg:gap-8'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='flex flex-col gap-1'>
          <span className='text-marineBlue text-[15px]'>Name</span>
          <input
            type='text'
            placeholder='e.g Stephen King'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-marineBlue text-[15px]'>Email Address</span>
          <input
            type='email'
            placeholder='e.g stephenking@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-marineBlue text-[15px]'>Phone Number</span>
          <input
            type='tel'
            placeholder='e.g +1 234 567 890'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className='flex justify-end -mt-16 relative top-32 lg:-mt-32'>
          <button
            type='submit'
            className='bg-marineBlue w-fit text-alabaster py-3 px-6 rounded-lg hover:bg-slate-800'
            onClick={handleClick}
            disabled={currentIndex > 4 ? true : false}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
