import { checkIcon } from '../constants';

const Item = ({ item }) => {
  return (
    <div className='relative py-4 pl-[53px] border-b border-lightGrayishBlue dark:border-veryDarkGrayishBlueInput'>
      <p
        className={
          item.completed
            ? 'line-through text-lightGrayishBlue dark:text-veryDarkGrayishBlueDark'
            : ''
        }
      >
        {item.title}
      </p>

      {item.completed ? (
        <div className='w-5 h-5 rounded-full absolute top-[50%] left-[20px] translate-y-[-50%] cursor-pointer checkBackground'>
          <img
            src={checkIcon}
            className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'
            alt='mark as complete'
          />
        </div>
      ) : (
        <div className='w-5 h-5 rounded-full absolute top-[50%] left-[20px] translate-y-[-50%] cursor-pointer border-veryLightGrayishBlue dark:border-veryDarkGrayishBlueInput border-[1px]'></div>
      )}
    </div>
  );
};

export default Item;
