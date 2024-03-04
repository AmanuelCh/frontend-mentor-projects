import { useState } from 'react';

const Filter = ({ isDesktop, onClearItems, items, sortBy, setSortBy }) => {
  const numItems = items.length;
  const itemsLeft = items.filter((item) => !item.completed).length;
  const percentage = Math.round((itemsLeft / numItems) * 100);

  return (
    <div className='py-3 pb-0 lg:pb-3 md:mb-6'>
      {isDesktop > 768 ? (
        <div className='mx-7 flex justify-between text-sm text-darkGrayishBlue'>
          {sortBy === 'all' ? (
            <p>
              {itemsLeft} items Left (
              {percentage ? 100 - percentage : numItems === 0 ? 0 : 100}%)
            </p>
          ) : sortBy === 'active' ? (
            <p>{numItems} items left</p>
          ) : (
            <p>{numItems} items completed</p>
          )}
          <div className='flex gap-5'>
            <p
              className={`filter-btn ${sortBy === 'all' ? 'active' : ''}`}
              onClick={() => setSortBy('all')}
            >
              All
            </p>
            <p
              className={`filter-btn ${sortBy === 'active' ? 'active' : ''}`}
              onClick={() => setSortBy('active')}
            >
              Active
            </p>
            <p
              className={`filter-btn ${sortBy === 'completed' ? 'active' : ''}`}
              onClick={() => setSortBy('completed')}
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
            {sortBy === 'all' ? (
              <p>
                {itemsLeft} items Left (
                {percentage ? 100 - percentage : numItems === 0 ? 0 : 100}%)
              </p>
            ) : sortBy === 'active' ? (
              <p>{numItems} items left</p>
            ) : (
              <p>{numItems} items completed</p>
            )}
            <p
              className='filter-btn'
              onClick={onClearItems}
            >
              Clear Completed
            </p>
          </div>

          <div
            className={`max-w-xl lg:max-w-2xl  w-full mt-4 dark:bg-veryDarkBlue ${
              numItems === 0
                ? 'dark:bg-transparent'
                : 'dark:filter pt-1 dark:pt-4'
            }`}
          >
            <div className='gap-8 px-4 flex justify-center filter filter-btn--mobile w-full'>
              <p
                className={`filter-btn ${sortBy === 'all' ? 'active' : ''}`}
                onClick={() => setSortBy('all')}
              >
                All
              </p>
              <p
                className={`filter-btn ${sortBy === 'active' ? 'active' : ''}`}
                onClick={() => setSortBy('active')}
              >
                Active
              </p>
              <p
                className={`filter-btn ${
                  sortBy === 'completed' ? 'active' : ''
                }`}
                onClick={() => setSortBy('completed')}
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
