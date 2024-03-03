import { useState } from 'react';

const Filter = ({
  isDesktop,
  onClearItems,
  onActiveFilter,
  onCompletedFilter,
  items,
}) => {
  const itemsLeft = items.filter((item) => !item.completed).length;
  const percentage = Math.round((itemsLeft / items.length) * 100);

  return (
    <div className='py-3 pb-0 lg:pb-3 md:mb-6'>
      {isDesktop > 768 ? (
        <div className='mx-7 flex justify-between text-sm text-darkGrayishBlue'>
          <p>
            {itemsLeft} items Left (
            {percentage ? 100 - percentage : items.length === 0 ? 0 : 100}%)
          </p>
          <div className='flex gap-5'>
            <p className='filter-btn active'>All</p>
            <p
              className='filter-btn'
              onClick={onActiveFilter}
            >
              Active
            </p>
            <p
              className='filter-btn'
              onClick={onCompletedFilter}
            >
              Completed
            </p>
          </div>
          <p
            className='filter-btn'
            onClick={onClearItems}
          >
            Clear Completed
          </p>
        </div>
      ) : (
        <div>
          <div className='mx-7 flex justify-between text-sm text-darkGrayishBlue'>
            <p>
              {itemsLeft} items Left (
              {percentage ? 100 - percentage : items.length === 0 ? 0 : 100}%)
            </p>
            <p
              className='filter-btn'
              onClick={onClearItems}
            >
              Clear Completed
            </p>
          </div>

          <div
            className={`max-w-xl lg:max-w-2xl  w-full mt-4 dark:bg-veryDarkBlue ${
              items.length === 0
                ? 'dark:bg-transparent'
                : 'dark:filter pt-1 dark:pt-4'
            }`}
          >
            <div className='gap-8 px-4 flex justify-center filter filter-btn--mobile w-full'>
              <p className='filter-btn active'>All</p>
              <p
                className='filter-btn'
                onClick={onActiveFilter}
              >
                Active
              </p>
              <p
                className='filter-btn'
                onClick={onCompletedFilter}
              >
                Completed
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
