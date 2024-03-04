import { useState } from 'react';
import { checkIcon, crossIcon } from '../constants';

const Item = ({ item, onCheckItem, onDeleteItem }) => {
  const [dragging, setDragging] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  return (
    <div
      className={`relative py-4 pl-[53px] border-b border-lightGrayishBlue dark:border-veryDarkGrayishBlueInput group ${
        dragging ? 'bg-veryLightGrayishBlue dark:bg-[#30314e]' : ''
      } ${dragOver ? 'bg-veryLightGrayishBlue dark:bg-[#30314e]' : ''}`}
      draggable='true'
      onDrag={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragEnter={() => setDragOver(true)}
      onDragLeave={() => setDragOver(false)}
      onDrop={() => {
        setDragOver(false);
      }}
    >
      <p
        className={` cursor-pointer max-w-[250px] lg:max-w-[510px]
          ${
            item.completed
              ? 'line-through text-lightGrayishBlue dark:text-veryDarkGrayishBlueDark hover:text-darkGrayishBlue dark:hover:text-darkGrayishBlue'
              : 'hover:text-veryDarkDesaturatedBlue dark:hover:text-veryLightGray'
          }
        `}
        onClick={() => onCheckItem(item.id)}
      >
        {item.title}
      </p>

      {item.completed ? (
        <div
          className='w-5 h-5 rounded-full absolute top-[50%] left-[20px] translate-y-[-50%] cursor-pointer checkBackground'
          onClick={() => onCheckItem(item.id)}
        >
          <img
            src={checkIcon}
            className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'
            alt='mark as complete'
          />
        </div>
      ) : (
        <div
          className='w-5 h-5 rounded-full absolute top-[50%] left-[20px] translate-y-[-50%] cursor-pointer border-veryLightGrayishBlue dark:border-veryDarkGrayishBlueInput border-[1px]'
          onClick={() => onCheckItem(item.id)}
        ></div>
      )}

      <div className='absolute top-2 right-2 rounded-full w-[12px] lg:top-[50%] lg:translate-y-[-50%] lg:right-4 lg:w-[18px] hidden group-hover:block'>
        {/* <p className='text-[12px] cursor-pointer'>✖</p> */}
        <img
          src={crossIcon}
          className='w-full cursor-pointer'
          alt='delete the todo'
          onClick={() => onDeleteItem(item.id)}
        />
      </div>

      {item.completed ? (
        <div className='absolute top-2 right-2 rounded-full w-[12px] lg:top-[50%] lg:translate-y-[-50%] lg:right-4 lg:w-[18px]'>
          {/* <p className='text-[12px] cursor-pointer'>✖</p> */}
          <img
            src={crossIcon}
            className='w-full cursor-pointer'
            alt='delete the todo'
            onClick={() => onDeleteItem(item.id)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Item;
