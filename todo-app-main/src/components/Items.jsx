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
  const [sortedItems, setSortedItems] = useState(items);

  // filter by active
  const handleActiveFilter = () => {
    setSortedItems((sortedItems) => items.filter((item) => !item.completed));
    console.log(sortedItems);
  };

  // filter by completed
  const handleCompletedFilter = () => {
    setSortedItems((sortedItems) => items.filter((item) => item.completed));
    console.log(sortedItems);
  };

  return (
    <div className='max-w-xl lg:max-w-2xl mx-auto mt-6 relative z-20 lg:overflow-hidden'>
      <div
        className={`mx-7 bg-veryLightGray rounded-[4px] text-veryDarkGrayishBlue shadow-xl dark:shadow-none dark:bg-veryDarkDesaturatedBlue dark:text-lightGrayishBlueDark ${
          items.length === 0 ? 'shadow-none' : null
        }`}
      >
        {items.map((item) => (
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
          onActiveFilter={handleActiveFilter}
          onCompletedFilter={handleCompletedFilter}
          items={items}
        />
      </div>
    </div>
  );
};

export default Items;
