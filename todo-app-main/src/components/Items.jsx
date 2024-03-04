import { useState } from 'react';
import Filter from './Filter';
import Item from './Item';

const Items = ({
  items,
  onCheckItem,
  isDesktop,
  onDeleteItem,
  onClearItems,
}) => {
  const [sortBy, setSortBy] = useState('all');

  let sortedItems;

  if (sortBy === 'all') sortedItems = items;

  if (sortBy === 'active')
    sortedItems = items.filter((item) => !item.completed);

  if (sortBy === 'completed')
    sortedItems = items.filter((item) => item.completed);

  return (
    <div className='max-w-xl lg:max-w-2xl mx-auto mt-6 relative z-20 lg:overflow-hidden'>
      <div
        className={`mx-7 bg-veryLightGray rounded-[4px] text-veryDarkGrayishBlue shadow-xl dark:shadow-none dark:bg-veryDarkDesaturatedBlue dark:text-lightGrayishBlueDark ${
          items.length === 0 ? 'shadow-none' : null
        }`}
      >
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onCheckItem={onCheckItem}
            onDeleteItem={onDeleteItem}
          />
        ))}

        <Filter
          isDesktop={isDesktop}
          onClearItems={onClearItems}
          items={sortedItems}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
    </div>
  );
};

export default Items;
