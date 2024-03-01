import Item from './Item';

const items = [
  {
    id: 1,
    title: '10 minutes meditation',
    completed: true,
  },
  {
    id: 2,
    title: 'Read for 1 hour',
    completed: false,
  },
  {
    id: 3,
    title: 'Hey bro idk what to write',
    completed: false,
  },
  {
    id: 4,
    title: "So don't try to read it",
    completed: false,
  },
];

const Items = () => {
  return (
    <div className='max-w-xl mx-auto mt-6'>
      <div className='mx-7 bg-veryLightGray rounded-[4px] text-veryDarkGrayishBlue dark:bg-veryDarkDesaturatedBlue dark:text-lightGrayishBlueDark'>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
