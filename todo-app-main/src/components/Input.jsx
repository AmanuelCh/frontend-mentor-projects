import { useState } from 'react';
import { lightToggle, darkToggle } from '../constants';

const Input = ({ dark, onDarkToggle, onAddItem }) => {
  const [todoInput, setTodoInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoInput) return;

    const newItem = {
      id: Date.now(),
      title: todoInput,
      completed: false,
    };

    onAddItem(newItem);

    setTodoInput('');
  };

  return (
    <div className='max-w-xl lg:max-w-2xl mx-auto relative z-20'>
      <div className='flex justify-between mx-7 pt-6 sm:pt-14 lg:pt-20'>
        <h2 className='text-veryLightGray font-bold tracking-[.7rem] text-3xl sm:text-4xl'>
          TODO
        </h2>
        <div>
          <img
            src={dark ? lightToggle : darkToggle}
            className='cursor-pointer'
            alt='toggle light theme'
            onClick={onDarkToggle}
          />
        </div>
      </div>

      <div className='mt-8 lg:mt-12 mx-7 relative'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            className='w-[100%] px-6 p-4 pb-[17px] pl-[53px] bg-veryLightGray text-veryDarkGrayishBlue rounded-[4px] outline-none dark:bg-veryDarkDesaturatedBlue dark:text-lightGrayishBlue'
            placeholder='Create a new todo'
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </form>

        <div className='w-5 h-5 rounded-full absolute top-[50%] left-[20px] translate-y-[-50%] border-veryLightGrayishBlue dark:border-veryDarkGrayishBlueInput border-[1px]'></div>
      </div>
    </div>
  );
};

export default Input;
