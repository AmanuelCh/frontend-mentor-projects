import { useItem } from '../context/ItemContext';
import { ItemType } from '../shared/type';
import Item from './Item';

const Desserts = () => {
  const { items } = useItem();

  return (
    <div className='w-full basis-[70%] px-2'>
      <h2 className='text-rose-900 text-4xl font-bold'>Desserts</h2>

      <div className='mt-6 grid md:grid-cols-3 gap-6 '>
        {items.map((item: ItemType) => (
          <Item
            item={item}
            key={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Desserts;
