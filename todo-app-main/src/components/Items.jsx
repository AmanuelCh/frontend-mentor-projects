import Item from './Item';

const Items = ({ items, onCheckItem }) => {
  return (
    <div className='max-w-xl mx-auto mt-6'>
      <div className='mx-7 bg-veryLightGray rounded-[4px] text-veryDarkGrayishBlue dark:bg-veryDarkDesaturatedBlue dark:text-lightGrayishBlueDark'>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onCheckItem={onCheckItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
