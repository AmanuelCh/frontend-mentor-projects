import { useItem } from '../context/ItemContext';

const Desserts = () => {
  const { items } = useItem();

  return (
    <div className='w-full basis-[65%] px-2'>
      <h2 className='text-rose-900 text-3xl font-bold'>Desserts</h2>

      <div className='mt-6'>
        {/* {items.map((item) => (
          <img
            src={item.image.desktop}
            key={item.name}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Desserts;
